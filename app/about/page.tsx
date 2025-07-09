import { title } from "@/components/primitives";
import Image from "next/image";

export const runtime = "edge";

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className={title()}>關於</h1>
      </div>
      <h1>建議使用以下版本瀏覽器</h1>
      <h1>以獲得最佳瀏覽體驗:</h1>
      <h2>Google Chrome 114 以上</h2>
      <h2>Microsoft Edge 114 以上</h2>
      <h2>Mozilla Firefox 114 以上</h2>
      <h2>Apple Safari 15 以上</h2>
      <br />
      <h1>Thank to:</h1>
      <h2>Vercel/Netlify/Render</h2>
      <h2>Next.js</h2>
      <h2>HeroUI</h2>
      <h2>React</h2>
      <h2>ChatGPT</h2>
      <h2>Google(Text-to-Speech AI)</h2>
      <h2>Font Awesome</h2>
      <br />
      <h1>分流:</h1>
      <h2>
        <a
          href="https://tsaopaofenghsiung2025.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel(主站)
        </a>
      </h2>
      <h2>
        <a
          href="https://tsaopaofenghsiung2025.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify(備用站)
        </a>
      </h2>
      <h2>
        <a
          href="https://tsaopaofenghsiung2025.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Render(備用站)
        </a>
      </h2>
      <div className="columns-2 ...">
        <Image
          src="/qr_netlify.png"
          width={100}
          height={100}
          alt="qr_netlify"
          title="qr_netlify"
        />
        <Image
          src="/qr_render.png"
          width={100}
          height={100}
          alt="qr_render"
          title="qr_render"
        />
      </div>
    </>
  );
}
