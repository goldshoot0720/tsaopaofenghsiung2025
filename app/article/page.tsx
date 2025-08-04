"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import ArticleItem from "@/components/articleItem";
import { title } from "@/components/primitives";

interface Post {
  id: string;
  uuid: string; // 加上 uuid
  title: string;
  slug: string;
  published_at: string;
}

export default function ArticleListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadingRef = useRef(loading);
  const hasMoreRef = useRef(hasMore);

  loadingRef.current = loading;
  hasMoreRef.current = hasMore;

  const limit = 10;

  const loadPosts = useCallback(async (pageNum: number) => {
    if (loadingRef.current) return;
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        "https://tsaopaofenghsiung.digitalpress.blog/ghost/api/content/posts/",
        {
          params: {
            key: "296ec947d788283eaac056b0dc",
            limit,
            order: "published_at DESC",
            page: pageNum,
          },
        }
      );
      const newPosts: Post[] = res.data.posts;

      if (!newPosts || newPosts.length === 0) {
        setHasMore(false);
      } else {
        if (newPosts.length < limit) setHasMore(false);

        setPosts((prev) => {
          const existingUuids = new Set(prev.map((p) => p.uuid));
          const filteredNewPosts = newPosts.filter(
            (p) => !existingUuids.has(p.uuid)
          );
          return [...prev, ...filteredNewPosts];
        });
      }
    } catch (err) {
      setError("載入文章時發生錯誤");
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadPosts(1);
  }, [loadPosts]);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        !loadingRef.current &&
        hasMoreRef.current
      ) {
        setPage((prev) => prev + 1);
      }
    };

    const throttledHandleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 200);
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadPosts(page);
  }, [page, loadPosts]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h1
        className={`${title()} mb-6 text-left text-3xl font-bold text-gray-800`}
      >
        最新文章
      </h1>
      {error && (
        <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
      )}
      <ul className="divide-y divide-gray-200">
        {posts.map((post) => (
          <ArticleItem key={post.uuid} post={post} />
        ))}
      </ul>
      {loading && <p className="text-center py-4 text-gray-500">載入中...</p>}
      {!hasMore && !loading && (
        <p className="text-center py-4 text-gray-500">沒有更多文章了</p>
      )}
    </div>
  );
}
