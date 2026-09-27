import type { Metadata } from "next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faFileLines } from "@fortawesome/free-solid-svg-icons";

import { PageHeader } from "@/components/page-header";
import { getContent } from "@/lib/content/store";

export const revalidate = 60;

export const metadata: Metadata = { title: "經歷" };

export default async function ExperiencePage() {
  const { content } = await getContent();

  return (
    <>
      <PageHeader eyebrow="Timeline" index="01" title="經歷">
        從榜首到市長候選人的每一個節點。
      </PageHeader>

      <ol className="relative space-y-12 border-l rule pl-6 sm:ml-28 sm:pl-10">
        {content.experience.map((m) => (
          <li key={`${m.year}-${m.title}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+5px)] top-2 h-[9px] w-[9px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--paper)] sm:-left-[calc(2.5rem+5px)]"
            />
            <p className="label text-accent sm:absolute sm:-left-36 sm:top-1.5 sm:w-24 sm:text-right">
              {m.year}
            </p>
            <article className="surface mt-2 p-6 sm:mt-0 sm:p-8">
              <h2 className="font-display text-2xl font-semibold">{m.title}</h2>
              <p className="mt-1 text-faint">{m.subtitle}</p>

              {m.notes.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {m.notes.map((note) => (
                    <li key={note} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-[var(--line-strong)]" />
                      {note}
                    </li>
                  ))}
                </ul>
              )}

              {m.documents.length > 0 && (
                <div className="mt-6">
                  <p className="label mb-3">文件</p>
                  <ul className="grid gap-2">
                    {m.documents.map((doc) => (
                      <li key={doc.href}>
                        <a
                          className="flex items-start gap-3 rounded-xl border rule px-4 py-3 text-sm transition-colors hover:border-[var(--accent)]"
                          href={doc.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" icon={faFileLines} />
                          <span>{doc.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {m.links.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t rule pt-5 text-sm">
                  {m.links.map((link) => (
                    <li key={link.href}>
                      <a className="link inline-flex items-center gap-1.5" href={link.href} rel="noopener noreferrer" target="_blank">
                        {link.label}
                        <FontAwesomeIcon className="h-2.5 w-2.5" icon={faArrowUpRightFromSquare} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
