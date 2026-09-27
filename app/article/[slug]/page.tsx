import type { Metadata } from "next";

import { cache } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { formatDate, postsUrl, type Post } from "@/lib/ghost";

type Props = { params: Promise<{ slug: string }> };

const fetchPost = cache(async (slug: string): Promise<Post | null> => {
  try {
    const res = await fetch(postsUrl({ filter: `slug:${slug}` }), {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) return null;
    const data = (await res.json()) as { posts?: Post[] };

    return data.posts?.[0] ?? null;
  } catch {
    return null;
  }
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost((await params).slug);

  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function ArticlePage({ params }: Props) {
  const post = await fetchPost((await params).slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl">
      <NextLink className="label mb-8 inline-flex items-center gap-2 hover:text-[var(--accent)]" href="/article">
        <FontAwesomeIcon className="h-3 w-3" icon={faArrowLeft} />
        最新文章
      </NextLink>
      <header className="mb-10 border-b rule pb-8">
        <time className="label text-accent" dateTime={post.published_at}>
          {formatDate(post.published_at)}
          {post.reading_time ? ` · ${post.reading_time} 分鐘閱讀` : ""}
        </time>
        <h1 className="font-display mt-3 text-3xl font-black leading-tight sm:text-4xl">{post.title}</h1>
      </header>
      {post.feature_image && (
        <Image
          priority
          alt={post.title}
          className="mb-10 w-full rounded-2xl"
          height={500}
          sizes="(min-width: 672px) 672px, 100vw"
          src={post.feature_image}
          width={1000}
        />
      )}
      {/* 內容來自自有 Ghost 站台 */}
      <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
