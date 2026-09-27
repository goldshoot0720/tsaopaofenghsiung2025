"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function MemberLookup() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        const trimmed = name.trim();

        if (trimmed) router.push(`/member/${encodeURIComponent(trimmed)}`);
      }}
    >
      <label className="sr-only" htmlFor="member-name">
        姓名
      </label>
      <input
        className="field sm:max-w-xs"
        id="member-name"
        placeholder="輸入姓名，例如：市民"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        查詢職位
      </button>
    </form>
  );
}
