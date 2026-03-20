import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f1" },
    { media: "(prefers-color-scheme: dark)", color: "#fff8f1" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased text-foreground",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="tech-shell relative flex min-h-screen flex-col">
            <Navbar />
            <main className="container mx-auto flex-grow px-4 pb-12 pt-24 sm:px-6 lg:max-w-7xl">
              {children}
            </main>
            <footer className="w-full px-4 pb-6 sm:px-6">
              <Link
                className="tech-panel mx-auto flex max-w-7xl items-center justify-center gap-1 rounded-[1.75rem] px-6 py-4 text-current"
                href="/"
              >
                <span className="tech-muted">Powered by</span>
                <p className="tech-heading bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  草包鋒兄 2025
                </p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
