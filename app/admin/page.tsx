"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { upload } from "@vercel/blob/client";

import type { ContentResult, SiteContent } from "@/lib/content/types";

import { defaultContent } from "@/lib/content/defaults";
import { sectionKeys, validateSection, type SectionKey } from "@/lib/content/validate";

const TOKEN_KEY = "tsaopao-admin-token";

const sectionLabels: Record<SectionKey, string> = {
  home: "首頁",
  experience: "經歷",
  members: "團隊成員",
  review: "第8屆回顧",
  yearbook: "畢業紀念冊",
  about: "關於",
};

type Drafts = Record<SectionKey, string>;

interface MediaItem {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

type Status = ContentResult & { blobConfigured: boolean; authorized: boolean };

function toDrafts(content: SiteContent): Drafts {
  return Object.fromEntries(
    sectionKeys.map((key) => [key, JSON.stringify(content[key], null, 2)]),
  ) as Drafts;
}

function parseDraft(key: SectionKey, text: string): { value?: unknown; errors: string[] } {
  try {
    const value = JSON.parse(text);

    return { value, errors: validateSection(key, value) };
  } catch (e) {
    return { errors: [`JSON 語法錯誤：${(e as Error).message}`] };
  }
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;

  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [status, setStatus] = useState<Status | null>(null);
  const [saved, setSaved] = useState<Drafts | null>(null);
  const [drafts, setDrafts] = useState<Drafts | null>(null);
  const [active, setActive] = useState<SectionKey>("home");
  const [message, setMessage] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [uploading, setUploading] = useState<string | null>(null);

  const authed = Boolean(token && status?.authorized);

  const refresh = useCallback(async (t: string) => {
    const res = await fetch("/api/content", {
      cache: "no-store",
      headers: t ? { Authorization: `Bearer ${t}` } : {},
    });
    const data = (await res.json()) as Status;

    setStatus(data);
    const d = toDrafts(data.content);

    setSaved(d);
    setDrafts(d);

    return data;
  }, []);

  const loadMedia = useCallback(async (t: string) => {
    const res = await fetch("/api/media", { headers: { Authorization: `Bearer ${t}` } });

    if (res.ok) setMedia(((await res.json()) as { blobs: MediaItem[] }).blobs);
  }, []);

  useEffect(() => {
    let stored = "";

    try {
      stored = sessionStorage.getItem(TOKEN_KEY) ?? "";
    } catch {}
    setToken(stored);
    refresh(stored);
  }, [refresh]);

  useEffect(() => {
    if (authed) loadMedia(token);
  }, [authed, token, loadMedia]);

  const parsed = useMemo(() => {
    if (!drafts) return null;

    return Object.fromEntries(sectionKeys.map((key) => [key, parseDraft(key, drafts[key])])) as Record<
      SectionKey,
      ReturnType<typeof parseDraft>
    >;
  }, [drafts]);

  const dirty = drafts && saved ? sectionKeys.filter((k) => drafts[k] !== saved[k]) : [];
  const invalid = parsed ? sectionKeys.filter((k) => parsed[k].errors.length > 0) : [];

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const data = await refresh(tokenInput);

    if (data.authorized) {
      try {
        sessionStorage.setItem(TOKEN_KEY, tokenInput);
      } catch {}
      setToken(tokenInput);
      setMessage(null);
    } else {
      setMessage({ tone: "error", text: "管理密鑰錯誤，或伺服器未設定 ADMIN_TOKEN。" });
    }
  }

  function logout() {
    try {
      sessionStorage.removeItem(TOKEN_KEY);
    } catch {}
    setToken("");
    setTokenInput("");
    refresh("");
  }

  async function save() {
    if (!parsed || invalid.length) return;
    setSaving(true);
    setMessage(null);
    const body = Object.fromEntries(sectionKeys.map((k) => [k, parsed[k].value]));

    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({
          tone: "error",
          text: [data.error, ...(data.details ?? [])].filter(Boolean).join("\n"),
        });
      } else {
        await refresh(token);
        setMessage({ tone: "ok", text: "已儲存到 Vercel Blob，頁面會在數秒內更新。" });
      }
    } catch (e) {
      setMessage({ tone: "error", text: (e as Error).message });
    } finally {
      setSaving(false);
    }
  }

  function updateDraft(key: SectionKey, text: string) {
    setDrafts((d) => (d ? { ...d, [key]: text } : d));
  }

  async function onUpload(files: FileList | null) {
    if (!files?.length) return;
    setMessage(null);
    try {
      for (const file of Array.from(files)) {
        setUploading(file.name);
        await upload(`uploads/${file.name}`, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
          clientPayload: token,
          multipart: file.size > 8 * 1024 * 1024,
        });
      }
      await loadMedia(token);
      setMessage({ tone: "ok", text: "上傳完成。" });
    } catch (e) {
      setMessage({ tone: "error", text: `上傳失敗：${(e as Error).message}` });
    } finally {
      setUploading(null);
    }
  }

  function addToGallery(item: MediaItem) {
    const home = parsed?.home.value as SiteContent["home"] | undefined;

    if (!home) {
      setMessage({ tone: "error", text: "首頁區塊的 JSON 目前有錯誤，請先修正。" });

      return;
    }
    const title = item.pathname.replace(/^uploads\//, "").replace(/-[A-Za-z0-9]{20,}(\.\w+)$/, "$1");
    const next = { ...home, gallery: [...home.gallery, { src: item.url, title }] };

    updateDraft("home", JSON.stringify(next, null, 2));
    setActive("home");
    setMessage({ tone: "ok", text: "已加入首頁相簿草稿，記得按「儲存」。" });
  }

  if (!status || !drafts || !parsed) {
    return <p className="py-20 text-center text-faint">載入中…</p>;
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-sm py-12">
        <p className="label text-accent">Admin</p>
        <h1 className="font-display mt-3 text-3xl font-black">內容管理</h1>
        <p className="mt-3 text-soft">輸入環境變數 ADMIN_TOKEN 的值以編輯網站內容。</p>
        <form className="mt-8 space-y-3" onSubmit={login}>
          <label className="label block" htmlFor="token">
            管理密鑰
          </label>
          <input
            autoComplete="current-password"
            className="field"
            id="token"
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
          />
          <button className="btn btn-primary w-full" disabled={!tokenInput} type="submit">
            登入
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-accent">{message.text}</p>}
      </div>
    );
  }

  const current = parsed[active];

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 border-b rule pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="label text-accent">Admin</p>
          <h1 className="font-display mt-2 text-3xl font-black">內容管理</h1>
          <p className="mt-2 text-sm text-soft">
            資料來源：
            <span className="chip mx-1">{status.source === "blob" ? "Vercel Blob" : "內建預設"}</span>
            {status.updatedAt && `最後更新 ${new Date(status.updatedAt).toLocaleString("zh-TW")}`}
            {!status.blobConfigured && "（伺服器未設定 BLOB_READ_WRITE_TOKEN，無法儲存）"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-ghost" type="button" onClick={logout}>
            登出
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => {
              if (confirm("以內建預設資料取代所有草稿？（儲存前不會寫入）")) setDrafts(toDrafts(defaultContent));
            }}
          >
            載入全部預設
          </button>
          <button
            className="btn btn-primary"
            disabled={saving || invalid.length > 0 || !status.blobConfigured}
            type="button"
            onClick={save}
          >
            {saving ? "儲存中…" : `儲存到 Vercel Blob${dirty.length ? `（${dirty.length}）` : ""}`}
          </button>
        </div>
      </header>

      {message && (
        <p
          className={clsx(
            "whitespace-pre-line rounded-xl px-4 py-3 text-sm",
            message.tone === "ok" ? "bg-[var(--accent-soft)] text-accent" : "bg-red-500/10 text-red-600 dark:text-red-400",
          )}
          role="status"
        >
          {message.text}
        </p>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
        <section>
          <div className="mb-4 flex flex-wrap gap-1" role="tablist">
            {sectionKeys.map((key) => (
              <button
                key={key}
                aria-selected={active === key}
                className={clsx(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium",
                  active === key ? "bg-[var(--accent)] text-[var(--accent-ink)]" : "text-soft hover:text-[var(--ink)]",
                )}
                role="tab"
                type="button"
                onClick={() => setActive(key)}
              >
                {sectionLabels[key]}
                {parsed[key].errors.length > 0 ? " ⚠" : dirty.includes(key) ? " •" : ""}
              </button>
            ))}
          </div>

          <textarea
            aria-label={`${sectionLabels[active]} JSON`}
            className="field min-h-[60vh] font-mono text-[0.8rem] leading-relaxed"
            spellCheck={false}
            value={drafts[active]}
            onChange={(e) => updateDraft(active, e.target.value)}
          />

          <div className="mt-3 flex flex-wrap items-start justify-between gap-3 text-sm">
            {current.errors.length ? (
              <ul className="space-y-1 text-red-600 dark:text-red-400">
                {current.errors.slice(0, 8).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            ) : (
              <p className="text-faint">格式正確</p>
            )}
            <div className="flex gap-2">
              {dirty.includes(active) && saved && (
                <button className="btn btn-ghost" type="button" onClick={() => updateDraft(active, saved[active])}>
                  放棄變更
                </button>
              )}
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => updateDraft(active, JSON.stringify(defaultContent[active], null, 2))}
              >
                此區塊還原預設
              </button>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <h2 className="font-display text-xl font-semibold">媒體庫</h2>
          <label
            className={clsx(
              "surface flex cursor-pointer flex-col items-center justify-center gap-1 border-dashed px-4 py-8 text-center text-sm",
              (!status.blobConfigured || uploading) && "pointer-events-none opacity-60",
            )}
          >
            <span className="font-semibold">{uploading ? `上傳中：${uploading}` : "選擇檔案上傳"}</span>
            <span className="text-faint">圖片、影片、音訊、PDF，最大 200MB</span>
            <input
              multiple
              accept="image/*,video/*,audio/*,application/pdf,.vtt"
              className="sr-only"
              type="file"
              onChange={(e) => {
                onUpload(e.target.files);
                e.target.value = "";
              }}
            />
          </label>

          <ul className="max-h-[60vh] space-y-2 overflow-y-auto">
            {media.map((item) => (
              <li key={item.url} className="surface flex gap-3 p-2.5">
                {/\.(png|jpe?g|gif|webp|avif|svg)$/i.test(item.pathname) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" src={item.url} />
                ) : (
                  <span className="label grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-[var(--paper-sunk)]">
                    {item.pathname.split(".").pop()}
                  </span>
                )}
                <div className="min-w-0 flex-grow text-xs">
                  <p className="truncate font-medium" title={item.pathname}>
                    {item.pathname.replace(/^uploads\//, "")}
                  </p>
                  <p className="text-faint">{formatSize(item.size)}</p>
                  <div className="mt-1 flex gap-3">
                    <button
                      className="link"
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(item.url);
                        setMessage({ tone: "ok", text: "已複製網址。" });
                      }}
                    >
                      複製網址
                    </button>
                    <button className="link" type="button" onClick={() => addToGallery(item)}>
                      加入相簿
                    </button>
                  </div>
                </div>
              </li>
            ))}
            {media.length === 0 && <li className="text-sm text-faint">尚無上傳的檔案。</li>}
          </ul>
        </aside>
      </div>
    </div>
  );
}
