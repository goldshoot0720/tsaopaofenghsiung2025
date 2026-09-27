import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata, Viewport } from "next";
import NextLink from "next/link";
import clsx from "clsx";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontDisplay, fontMono } from "@/config/fonts";
import { SiteHeader } from "@/components/site-header";

faConfig.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5efe4" },
    { media: "(prefers-color-scheme: dark)", color: "#15120f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh-Hant-TW">
      <body className={clsx("min-h-screen antialiased", fontDisplay.variable, fontMono.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-6xl flex-grow px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
              {children}
            </main>
            <footer className="border-t rule">
              <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p>
                  <span className="font-display font-black text-[var(--ink)]">草包鋒兄</span> 2025 — 2038 全紀錄
                </p>
                <nav aria-label="頁尾連結" className="flex flex-wrap gap-x-5 gap-y-2">
                  <NextLink className="hover:text-[var(--ink)]" href="/about">
                    關於本站
                  </NextLink>
                  <NextLink className="hover:text-[var(--ink)]" href="/api/member">
                    成員 API
                  </NextLink>
                  <NextLink className="hover:text-[var(--ink)]" href="/admin">
                    內容管理
                  </NextLink>
                </nav>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
