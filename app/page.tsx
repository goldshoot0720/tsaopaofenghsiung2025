import { title } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
  const gallery = [
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
      src: "/IMG_20250627_150822-LGKf5tn2jAiRt5lvuIDv3AXG31US68.jpg",
      alt: "草包鋒兄實拍",
      title: "草包鋒兄實拍",
    },
    {
      src: "/4de7140d-3f72-461a-bed3-41462fcc7c2a-Zmpt2GVJl5je4trrqy1Rc7L02gPaHI.png",
      alt: "AI草包鋒兄",
      title: "AI草包鋒兄",
    },
    {
      src: "/41848a2a-dc14-41fc-b70f-b095156b1c0c-JsEgf7QDizN8nG0W4dd2nrudBXeKEE.png",
      alt: "第12屆臺北市長",
      title: "第12屆臺北市長",
    },
    {
      src: "/6141d366-a1bf-4e01-94aa-052a9dfd7f70-d8K6tPB7bwiJ6gYo6i8zp8fDaTMrdN.png",
      alt: "榜首2025",
      title: "榜首2025",
    },
    {
      src: "/85ffa275-3f4f-476e-9adf-457e5f7d1ad6-LgvX1I517ppaGh1Dloq6o2QOnYGXVb.png",
      alt: "114榜首",
      title: "114榜首",
    },
    {
      src: "/4aad4fb4-8ec9-4fe5-939d-a8ba4a88e6ac-jorpY0lFh1tDnB1PKeeHMQffpbhOaQ.png",
      alt: "榜首市長",
      title: "榜首市長",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="tech-panel relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_62%)] lg:block" />
        <div className="relative space-y-6">
          <div className="inline-flex items-center rounded-full border border-orange-300/40 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-orange-700">
            2026-2027 Impeccable Style Interface
          </div>
          <div className="space-y-4">
            <h1 className={title({ size: "lg", color: "cyan" })}>首頁</h1>
            <div className="tech-divider max-w-2xl" />
            <div className="space-y-2 text-base sm:text-lg">
              <h2 className="tech-muted">草包鋒兄 二零二五年至二零三八年 全紀錄</h2>
              <h2 className="text-stone-800">
                從2025年高考三級資訊處理榜首到2038年第12屆台北市長(候選人)
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wordpress.tpe12thmayor2025to2038.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link inline-flex rounded-full px-5 py-3 font-semibold"
            >
              wordpress
            </a>
            <a
              href="https://ghost.tpe12thmayor2025to2038.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link inline-flex rounded-full px-5 py-3 font-semibold"
            >
              ghost
            </a>
            <a
              href="https://hexo.tpe12thmayor2025to2038.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link inline-flex rounded-full px-5 py-3 font-semibold"
            >
              hexo
            </a>
            <a
              href="https://jekyll.tpe12thmayor2025to2038.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link inline-flex rounded-full px-5 py-3 font-semibold"
            >
              jekyll
            </a>
            <a
              href="https://hugo.tpe12thmayor2025to2038.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link inline-flex rounded-full px-5 py-3 font-semibold"
            >
              hugo
            </a>
          </div>
        </div>
      </div>

      <div className="tech-panel rounded-[2rem] px-5 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="tech-heading text-sm text-orange-700/90">Visual Archive</p>
            <p className="tech-muted text-sm">保留原有內容，升級展示質感與節奏。</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="group tech-panel relative overflow-hidden rounded-[1.5rem] p-3 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-4 top-3 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-orange-700/70">
                <span>Node {String(i + 1).padStart(2, "0")}</span>
                <span>Live</span>
              </div>
              <Image
                src={img.src}
                width={500}
                height={500}
                alt={img.alt}
                title={img.title}
                className="mt-7 h-44 w-full rounded-[1rem] object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <p className="mt-3 text-sm font-medium text-stone-800">{img.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
