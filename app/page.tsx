import { title } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className={title()}>首頁</h1>
        <br />
        <br />
        <h2>草包鋒兄 二零二五年至二零三八年 全紀錄</h2>
        <h2>從2025年高考三級資訊處理榜首到2038年第12屆台北市長(候選人)</h2>
        <br />
        <br />
        <a
          href="https://tsaopaofenghsiung.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
        >
          wordpress
        </a>{" "}
        <a
          href="https://tsaopaofenghsiung.digitalpress.blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
        >
          ghost
        </a>
        <br />
        <br />
        <a
          href="https://tsaopaofenghsiung37.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
        >
          hexo
        </a>{" "}
        <a
          href="https://iron2038mayor.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
        >
          jekyll
        </a>{" "}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              src: "/MyTshirtmy.png",
              alt: "草包鋒兄T恤正面",
              title: "草包鋒兄T恤正面",
            },
            {
              src: "/BackTshirtBack.png",
              alt: "草包鋒兄T恤背面",
              title: "草包鋒兄T恤背面",
            },
            {
              src: "/IMG_0032.jpg",
              alt: "Picture of cat.",
              title: "Picture of cat.",
            },
            {
              src: "/qr250431003912code.png",
              alt: "Picture of QrCode.",
              title: "Picture of QrCode.",
            },
            {
              src: "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/IMG_20250627_150822-LGKf5tn2jAiRt5lvuIDv3AXG31US68.jpg",
              alt: "草包鋒兄實拍",
              title: "草包鋒兄實拍",
            },
            {
              src: "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/4de7140d-3f72-461a-bed3-41462fcc7c2a-Zmpt2GVJl5je4trrqy1Rc7L02gPaHI.png",
              alt: "AI草包鋒兄",
              title: "AI草包鋒兄",
            },
            {
              src: "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/41848a2a-dc14-41fc-b70f-b095156b1c0c-JsEgf7QDizN8nG0W4dd2nrudBXeKEE.png",
              alt: "第12屆臺北市長",
              title: "第12屆臺北市長",
            },
            {
              src: "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/6141d366-a1bf-4e01-94aa-052a9dfd7f70-d8K6tPB7bwiJ6gYo6i8zp8fDaTMrdN.png",
              alt: "榜首2025",
              title: "榜首2025",
            },
            {
              src: "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/85ffa275-3f4f-476e-9adf-457e5f7d1ad6-LgvX1I517ppaGh1Dloq6o2QOnYGXVb.png",
              alt: "114榜首",
              title: "114榜首",
            },
            {
              src: "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/4aad4fb4-8ec9-4fe5-939d-a8ba4a88e6ac-jorpY0lFh1tDnB1PKeeHMQffpbhOaQ.png",
              alt: "榜首市長",
              title: "榜首市長",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <Image
                src={img.src}
                width={500} // 可略大一點，但會由 class 限制實際顯示大小
                height={500}
                alt={img.alt}
                title={img.title}
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[180px] lg:max-w-[160px] xl:max-w-[140px] h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
