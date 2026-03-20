import Link from "next/link";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export interface ArticleItemProps {
  post: {
    id: string;
    slug: string;
    title: string;
    published_at: string;
  };
}

export default function ArticleItem({ post }: ArticleItemProps) {
  return (
    <li className="tech-panel flex items-center justify-between gap-4 rounded-[1.5rem] px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5">
      <Link
        href={`/article/${post.slug}`}
        className="text-lg font-medium text-orange-700 hover:text-amber-600"
      >
        {post.title}
      </Link>
      <time
        dateTime={post.published_at}
        className="shrink-0 rounded-full border border-orange-300/35 bg-orange-50/80 px-3 py-1 text-sm text-orange-700/80"
        aria-label={`發佈日期：${formatDate(post.published_at)}`}
      >
        {formatDate(post.published_at)}
      </time>
    </li>
  );
}
