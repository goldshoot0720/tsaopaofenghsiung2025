"use client";

import Image from "next/image";
import { title } from "@/components/primitives";
import { useEffect } from "react";
import "plyr/dist/plyr.css";

export default function Saint202507050418Page() {
  useEffect(() => {
    async function loadPlyr() {
      const PlyrModule = await import("plyr");
      const Plyr = PlyrModule.default;
      const player = new Plyr("#player");
    }
    loadPlyr();
  }, []);
  return (
    <>
      <h1 className={title()}>第8屆回顧</h1>
      <Image
        alt="30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com"
        height={333}
        src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/30%E5%88%86%E9%90%98%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%8F%E8%87%AA%E7%A8%B1%E7%B9%BC%E6%89%BF%E4%BA%BA%EF%BC%81%E5%94%90%E6%96%B0%E6%B0%91%E6%89%AF%E3%80%8C%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%AF%92%E6%AE%BA%E8%94%A3%E7%B6%93%E5%9C%8B%E3%80%8D%E5%93%BD%E5%92%BD%EF%BC%9A%E6%AD%BB%E5%BE%97%E5%A5%BD%E5%86%A4%EF%BD%9C%E4%B8%89%E7%AB%8B%E6%96%B0%E8%81%9E%E7%B6%B2%20SETN_com-40c0087e65e7362b-SwxfbWjBM7FuSzbO14I2PGXgHOXxIq.jpg"
        title="30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com"
        width={333}
      />
      <h2>2分25秒版本</h2>
      <video id="player" width="100%" controls>
        <source
          src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/video/di-8jie-tai-bei-shi-chang-xuan-ju-hui-gu.mp4"
          type="video/mp4"
        />
        <source
          src="https://storage.googleapis.com/goldshoot0720/video/di-8jie-tai-bei-shi-chang-xuan-ju-hui-gu.mp4"
          type="video/mp4"
        />
        <source
          src="https://pub-c89792336046495e89758a0a802e15c8.r2.dev/di-8jie-tai-bei-shi-chang-xuan-ju-hui-gu.mp4"
          type="video/mp4"
        />
        <track
          kind="captions"
          srcLang="zh"
          label="中文字幕"
          src="/saint202507050418.vtt"
          default
        />
      </video>
      <h2>完整版本</h2>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height="315"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/eLF6tvVGFiA?si=bfanuCO8UwgP9RIL"
        title="YouTube video player"
        width="560"
      />
      <h3>農曆：七月初五上午04時18分</h3>
      <h3>國曆：2025年08月27日</h3>
      <h3>地點:臺北盆地</h3>
      <h3>芮氏規模:7.?</h3>
      <h3>地震深度:?.?公里</h3>
    </>
  );
}
