import type { Metadata } from "next";

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
        <section>
          <SectionTitle label="Short cut" title={review.shortCut.label} />
          <VideoPlayer captions={review.shortCut.captions} sources={review.shortCut.sources} />
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
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
