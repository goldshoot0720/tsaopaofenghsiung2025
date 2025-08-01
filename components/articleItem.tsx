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
    <li className="py-4 flex justify-start items-center space-x-4 hover:bg-gray-50 rounded-md transition-colors">
      <Link
        href={`/article/${post.slug}`}
        className="text-blue-600 hover:underline font-medium text-lg"
      >
        {post.title}
      </Link>
      <time
        dateTime={post.published_at}
        className="text-gray-500 text-sm"
        aria-label={`發佈日期：${formatDate(post.published_at)}`}
      >
        {formatDate(post.published_at)}
      </time>
    </li>
  );
}
