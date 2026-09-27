import type { Metadata } from "next";

import { ArticleList } from "@/components/article-list";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "最新文章" };

export default function ArticleListPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader eyebrow="Journal" title="最新文章">
        同步自 Ghost 分站，依發佈時間排序。
      </PageHeader>
      <ArticleList />
    </div>
  );
}
