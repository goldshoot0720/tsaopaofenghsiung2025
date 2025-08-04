// app/article/[slug]/page.tsx
import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  title: string;
  html: string;
  feature_image: string | null;
  published_at: string;
  slug: string;
}

const apiClient = axios.create({
  baseURL: "https://tsaopaofenghsiung.digitalpress.blog/ghost/api/content",
  timeout: 5000,
});

async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const res = await apiClient.get("/posts/", {
      params: {
        key: "296ec947d788283eaac056b0dc",
        filter: `slug:${slug}`,
      },
    });
    return res.data.posts?.[0] ?? null;
  } catch {
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetchPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {post.feature_image && (
        <Image
          src={post.feature_image}
          alt={post.title}
          width={800}
          height={400}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
