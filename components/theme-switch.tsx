"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      aria-label={isDark ? "切換為淺色模式" : "切換為深色模式"}
      className="grid h-10 w-10 place-items-center rounded-full text-soft transition-colors hover:text-[var(--ink)]"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunFilledIcon size={20} /> : <MoonFilledIcon size={20} />}
    </button>
  );
}
