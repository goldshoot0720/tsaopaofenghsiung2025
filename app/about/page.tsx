import type { Metadata } from "next";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { PageHeader, SectionTitle } from "@/components/page-header";
import { getContent } from "@/lib/content/store";

export const revalidate = 60;

export const metadata: Metadata = { title: "關於" };

export default async function AboutPage() {
  const { content } = await getContent();
  const { about } = content;

  return (
    <>
      <PageHeader eyebrow="About" index="05" title="關於本站" />

      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <SectionTitle label="Mirrors" title="分流" />
          <ul className="space-y-3">
            {about.mirrors.map((mirror) => (
              <li key={mirror.href} className="surface flex items-center gap-4 p-4">
                {mirror.qr ? (
                  <Image
                    alt={`${mirror.label} QR Code`}
                    className="h-20 w-20 shrink-0 rounded-lg bg-white p-1"
                    height={80}
                    src={mirror.qr}
                    width={80}
                  />
                ) : (
                  <span aria-hidden className="h-20 w-20 shrink-0 rounded-lg bg-[var(--accent-soft)]" />
                )}
                <div className="min-w-0">
                  <p className="font-semibold">{mirror.label}</p>
                  <a
                    className="link mt-1 inline-flex items-center gap-1.5 break-all text-sm"
                    href={mirror.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {mirror.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <FontAwesomeIcon className="h-2.5 w-2.5 shrink-0" icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-12">
          <section>
            <SectionTitle label="Browsers" title="建議瀏覽器" />
            <p className="mb-4 text-soft">建議使用以下版本瀏覽器，以獲得最佳瀏覽體驗：</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {about.browsers.map((b) => (
                <li key={b} className="rounded-xl border rule px-4 py-3">
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle label="Credits" title="感謝" />
            <ul className="flex flex-wrap gap-2">
              {about.thanks.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
