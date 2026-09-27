"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function VoiceButton({ src, captions, label }: { src: string; captions: string; label: string }) {
  const audio = useRef<HTMLAudioElement>(null);

  return (
    <>
      <button
        aria-label={label}
        className="grid h-7 w-7 place-items-center rounded-full border rule text-[0.6rem] text-soft transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        type="button"
        onClick={() => {
          if (audio.current) {
            audio.current.currentTime = 0;
            audio.current.play();
          }
        }}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <audio ref={audio} preload="none" src={src}>
        <track default kind="captions" label="中文字幕" src={captions} srcLang="zh" />
      </audio>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b rule bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <VoiceButton captions="/synthesis1.vtt" label="播放語音 1" src="/synthesis1.wav" />
          <NextLink className="font-display text-xl font-black tracking-wide" href="/">
            草包<span className="text-accent">鋒兄</span>
          </NextLink>
          <VoiceButton captions="/synthesis3.vtt" label="播放語音 2" src="/synthesis3.wav" />
        </div>

        <nav aria-label="主選單" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={clsx(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive(pathname, item.href)
                      ? "bg-[var(--accent-soft)] text-accent"
                      : "text-soft hover:text-[var(--ink)]",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <ThemeSwitch />
          <button
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "關閉選單" : "開啟選單"}
            className="grid h-10 w-10 place-items-center rounded-full text-soft hover:text-[var(--ink)] lg:hidden"
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <FontAwesomeIcon className="h-5 w-5" icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="行動版選單" className="border-t rule lg:hidden" id="mobile-nav">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:grid-cols-2 sm:px-6">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={clsx(
                    "flex items-center gap-3 rounded-xl px-3 py-3 font-medium",
                    isActive(pathname, item.href)
                      ? "bg-[var(--accent-soft)] text-accent"
                      : "hover:bg-[var(--paper-sunk)]",
                  )}
                  href={item.href}
                >
                  <FontAwesomeIcon className="h-4 w-4 opacity-70" icon={item.icon} />
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
