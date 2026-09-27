import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { getContent } from "@/lib/content/store";

export const revalidate = 60;

export const metadata: Metadata = { title: "畢業紀念冊" };

export default async function YearbookPage() {
  const { content } = await getContent();
  const { yearbook } = content;

  return (
    <>
      <PageHeader eyebrow="Class of 2004" index="04" title={yearbook.title}>
        數字背後的暗號 — 點開每一行看提示。
      </PageHeader>

      <div className="mx-auto max-w-2xl">
        <ol className="surface divide-y divide-[var(--line)] overflow-hidden">
          {yearbook.entries.map((entry, i) => (
            <li key={`${entry.text}-${i}`}>
              {entry.tip ? (
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 hover:bg-[var(--paper-sunk)] [&::-webkit-details-marker]:hidden">
                    <span className="label w-6 text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-grow text-lg font-medium">{entry.text}</span>
                    <span
                      aria-hidden
                      className="grid h-7 w-7 place-items-center rounded-full border rule text-sm text-faint transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 pl-[3.75rem] leading-relaxed text-soft">{entry.tip}</p>
                </details>
              ) : (
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="label w-6 text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-medium">{entry.text}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm text-faint">{yearbook.footer}</p>
      </div>
    </>
  );
}
