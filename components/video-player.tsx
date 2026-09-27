"use client";

import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";

export function VideoPlayer({ sources, captions }: { sources: string[]; captions?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let player: { destroy: () => void } | undefined;
    let cancelled = false;

    import("plyr").then(({ default: Plyr }) => {
      if (!cancelled && ref.current) player = new Plyr(ref.current);
    });

    return () => {
      cancelled = true;
      player?.destroy();
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl bg-black">
      <video ref={ref} controls playsInline className="w-full" preload="metadata">
        {sources.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
        {captions && <track default kind="captions" label="中文字幕" src={captions} srcLang="zh" />}
      </video>
    </div>
  );
}
