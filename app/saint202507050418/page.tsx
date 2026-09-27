import type { Metadata } from "next";

import Image from "next/image";

import { PageHeader, SectionTitle } from "@/components/page-header";
import { VideoPlayer } from "@/components/video-player";
import { getContent } from "@/lib/content/store";

export const revalidate = 60;

export const metadata: Metadata = { title: "第8屆回顧" };

export default async function ReviewPage() {
  const { content } = await getContent();
  const { review } = content;

  return (
    <>
      <PageHeader eyebrow="Archive" index="03" title={review.title} />

      <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-14">
          <section>
            <SectionTitle label="Short cut" title={review.shortCut.label} />
            <VideoPlayer captions={review.shortCut.captions} sources={review.shortCut.sources} />
          </section>

          <section>
            <SectionTitle label="YouTube" title={review.fullVersion.label} />
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={review.fullVersion.youtubeEmbed}
                title={review.fullVersion.label}
              />
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <figure className="surface overflow-hidden">
            <Image
              alt={review.cover.title}
              className="aspect-square w-full object-cover"
              height={640}
              src={review.cover.src}
              width={640}
            />
            <figcaption className="p-4 text-sm leading-relaxed text-soft">{review.cover.title}</figcaption>
          </figure>

          <dl className="surface divide-y divide-[var(--line)]">
            {review.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                <dt className="label">{fact.label}</dt>
                <dd className="text-right font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  );
}
