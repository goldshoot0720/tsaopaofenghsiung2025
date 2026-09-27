"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <p className="label text-accent">Error</p>
      <h1 className="font-display mt-3 text-3xl font-black">頁面發生錯誤</h1>
      <p className="mt-3 text-soft">請稍後再試一次。</p>
      <button className="btn btn-primary mt-8" type="button" onClick={() => reset()}>
        重新載入
      </button>
    </div>
  );
}
