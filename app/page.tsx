import Image from "next/image";
import NextLink from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { SectionTitle } from "@/components/page-header";
import { getContent } from "@/lib/content/store";

export const revalidate = 60;

export default async function Home() {
  const { content } = await getContent();
  const { home, experience } = content;

  return (
    <div className="space-y-20 sm:space-y-28">
      <section className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="label text-accent">{home.eyebrow}</p>
          <h1 className="font-display mt-5 text-5xl font-black leading-[1.08] tracking-tight text-balance [word-break:keep-all] sm:text-6xl lg:text-7xl">
            {home.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">{home.subline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NextLink className="btn btn-primary" href="/experience">
              看完整經歷 <FontAwesomeIcon className="h-3.5 w-3.5" icon={faArrowRight} />
            </NextLink>
            <NextLink className="btn btn-ghost" href="/article">
              最新文章
            </NextLink>
          </div>
        </div>

        <ol className="surface divide-y divide-[var(--line)] overflow-hidden">
          {experience.map((m) => (
            <li key={`${m.year}-${m.title}`} className="flex gap-5 px-5 py-4">
              <span className="label w-20 shrink-0 pt-1 text-accent">{m.year}</span>
              <div>
                <p className="font-semibold">{m.title}</p>
                <p className="text-sm text-faint">{m.subtitle}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <SectionTitle label="Mirrors" title="分站部落格" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {home.blogs.map((blog) => (
            <li key={blog.href}>
              <a
                className="surface group flex items-center justify-between px-4 py-4 transition-colors hover:border-[var(--accent)]"
                href={blog.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-semibold">{blog.label}</span>
                <FontAwesomeIcon
                  className="h-3 w-3 text-faint transition-colors group-hover:text-[var(--accent)]"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle label={`${home.gallery.length} Photos`} title="影像紀錄" />
        <ul className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:grid-cols-3 lg:grid-cols-4">
          {home.gallery.map((img, i) => (
            <li key={`${img.src}-${i}`} className={clsx(i === 0 && "col-span-2 row-span-2")}>
              <a
                className="group relative block h-full overflow-hidden rounded-2xl bg-[var(--paper-sunk)]"
                href={img.src}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  fill
                  alt={img.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  src={img.src}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2.5 pt-8 text-sm font-medium text-white">
                  {img.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
