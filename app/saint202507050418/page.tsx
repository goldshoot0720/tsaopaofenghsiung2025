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
      <h2>2022/11/26 臺北</h2>
      <h3>市長選舉日期</h3>
      <h2>2025/07/05 04:18 臺北</h2>
      <h3>不是國歷</h3>
      <h3>會不會是農曆(相當於08/04)</h3>
      <h3>會不會是農曆(相當於08/27)</h3>
      <h3>芮氏規模7.?</h3>
      <h2>2025/07/26 臺北</h2>
      <h3>大罷免</h3>
      <h3>農曆(相當於09/17)</h3>
      <h3>預定榜示</h3>
      <h3>國曆：2025年07月05日上午04時18分</h3>
      <h3>農曆：六月十一</h3>
      <h3>農曆：閏六月十一上午04時18分</h3>
      <h3>國曆：2025年08月04日</h3>
      <h3>農曆：七月初五上午04時18分</h3>
      <h3>國曆：2025年08月27日</h3>
      <h3>芮氏規模7.?</h3>
      <h3>関東地方、東京都、神奈川県(横浜市，竜樹諒)</h3>
      <h3>代表1923年9月1日是必然事件</h3>
      <h3>芮氏規模7.?</h3>
      <h3>臺北盆地(第8屆必然，第12屆視選舉結果而定)</h3>
      <h3>代表1999年9月21日是必然事件</h3>
      <h3>章萬安沒有總統命，臺北市民害死蔣萬安</h3>
      <Image
        alt="30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com"
        height={333}
        src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/30%E5%88%86%E9%90%98%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%8F%E8%87%AA%E7%A8%B1%E7%B9%BC%E6%89%BF%E4%BA%BA%EF%BC%81%E5%94%90%E6%96%B0%E6%B0%91%E6%89%AF%E3%80%8C%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%AF%92%E6%AE%BA%E8%94%A3%E7%B6%93%E5%9C%8B%E3%80%8D%E5%93%BD%E5%92%BD%EF%BC%9A%E6%AD%BB%E5%BE%97%E5%A5%BD%E5%86%A4%EF%BD%9C%E4%B8%89%E7%AB%8B%E6%96%B0%E8%81%9E%E7%B6%B2%20SETN_com-40c0087e65e7362b-SwxfbWjBM7FuSzbO14I2PGXgHOXxIq.jpg"
        title="30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com"
        width={333}
      />
      <video id="player" width="333" height="333" controls>
        <source
          src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/30%E5%88%86%E9%90%98%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%8F%E8%87%AA%E7%A8%B1%E7%B9%BC%E6%89%BF%E4%BA%BA%EF%BC%81%E5%94%90%E6%96%B0%E6%B0%91%E6%89%AF%E3%80%8C%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%AF%92%E6%AE%BA%E8%94%A3%E7%B6%93%E5%9C%8B%E3%80%8D%E5%93%BD%E5%92%BD%EF%BC%9A%E6%AD%BB%E5%BE%97%E5%A5%BD%E5%86%A4%EF%BD%9C%E4%B8%89%E7%AB%8B%E6%96%B0%E8%81%9E%E7%B6%B2%20SETN_com-40c0087e65e7362b-pKT6bzP3T3ToF87AX0YIBtjUwx3Ap8.mp4"
          type="video/mp4"
        />
        <source
          src="https://storage.googleapis.com/tsaopaofenghsiung2025/30%E5%88%86%E9%90%98%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%8F%E8%87%AA%E7%A8%B1%E7%B9%BC%E6%89%BF%E4%BA%BA%EF%BC%81%E5%94%90%E6%96%B0%E6%B0%91%E6%89%AF%E3%80%8C%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%AF%92%E6%AE%BA%E8%94%A3%E7%B6%93%E5%9C%8B%E3%80%8D%E5%93%BD%E5%92%BD%EF%BC%9A%E6%AD%BB%E5%BE%97%E5%A5%BD%E5%86%A4%EF%BD%9C%E4%B8%89%E7%AB%8B%E6%96%B0%E8%81%9E%E7%B6%B2%20SETN_com-40c0087e65e7362b.mp4"
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
      <h3>鋒兄不是第12屆臺北市長的話</h3>
      <h3>鋒兄2038年至2042年人會在中壢</h3>
      <h3>希望鋒兄支持者和鋒兄一起離開臺北四年喔</h3>
      <h3>當鋒兄支持者超過臺北市總人口的時候鋒兄就會當選</h3>
      <h3>鋒兄支持者 250萬 臺北市總人口 250萬</h3>
      <h3>鋒兄支持者 150萬 臺北市總人口 150萬 桃園人口增加50萬</h3>
      <h3>鋒兄支持者 50萬以下 臺北市降格成新北市的幾個區</h3>
      <h3>原臺北市走入歷史 桃園人口增加100萬</h3>
      <h3>假的真不了 真的假不了</h3>
      <h3>鋒兄支持者 革命情感 感恩鋒兄 讚嘆鋒兄 舉家連續支持二十年以上</h3>
      <h3>選擇秦二世的人自行負責</h3>
      <h3>選擇項羽的人自行負責</h3>
      <h3>不選擇劉邦的人自行負責</h3>
      <Image
        alt="30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com"
        height={333}
        src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/8ba18682-8f2a-4fd4-84b0-dd60b574bc39-1EgBtBF9i9ZIuhSto9iXNv2YdDxS7M.png"
        title="30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com"
        width={333}
      />
      <Image
        alt="プリキュア〜永遠のともだち〜"
        height={333}
        src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/8c6abd83-e443-4f6f-b895-b8e434b8b68e-wd0JWws97KWuEcKNQaSzFHjuVwiKFq.png"
        title="プリキュア〜永遠のともだち〜"
        width={333}
      />
      <Image
        alt="いきづらい部！「What is my LIFE?」"
        height={333}
        src="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/4a9f58af-db4d-4253-81c9-8324e3b38138-sJslhWpDwiBW8qykuN2rC5pLcSwe5Q.png"
        title="いきづらい部！「What is my LIFE?」"
        width={333}
      />
    </>
  );
}
