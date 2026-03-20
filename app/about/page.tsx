import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <div className="tech-panel rounded-[2rem] px-6 py-8 sm:px-8">
        <div className="space-y-3">
          <p className="tech-heading text-sm text-cyan-200/90">About System</p>
          <h1 className={title({ color: "cyan" })}>關於</h1>
          <div className="tech-divider" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="tech-panel rounded-[1.75rem] p-6">
            <h1 className="mb-3 text-xl font-semibold text-white">建議使用以下版本瀏覽器</h1>
            <h1 className="mb-4 text-xl font-semibold text-white">以獲得最佳瀏覽體驗:</h1>
            <div className="space-y-2 tech-muted">
              <h2>Google Chrome 114 以上</h2>
              <h2>Microsoft Edge 114 以上</h2>
              <h2>Mozilla Firefox 114 以上</h2>
              <h2>Apple Safari 15 以上</h2>
            </div>
          </div>

          <div className="tech-panel rounded-[1.75rem] p-6">
            <h1 className="mb-4 text-xl font-semibold text-white">Thank to:</h1>
            <div className="grid gap-3 sm:grid-cols-2 tech-muted">
              <h2>Vercel/Netlify/Render</h2>
              <h2>Next.js/HeroUI/React</h2>
              <h2>ChatGPT</h2>
              <h2>Google(Text-to-Speech AI)</h2>
              <h2>Font Awesome</h2>
            </div>
          </div>
        </div>

        <div className="tech-panel rounded-[1.75rem] p-6">
          <h1 className="mb-4 text-xl font-semibold text-white">分流:</h1>
          <div className="space-y-3">
            <h2>
              <a
                href="https://tsaopaofenghsiung2025.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link inline-flex rounded-full px-4 py-2"
              >
                Vercel(主站)
              </a>
            </h2>
            <h2>
              <a
                href="https://tsaopaofenghsiung2025.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link inline-flex rounded-full px-4 py-2"
              >
                Netlify(備用站)
              </a>
            </h2>
            <h2>
              <a
                href="https://tsaopaofenghsiung2025.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link inline-flex rounded-full px-4 py-2"
              >
                Render(備用站)
              </a>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="tech-panel rounded-[1.25rem] p-4">
              <Image
                src="/qr_netlify.png"
                width={180}
                height={180}
                alt="qr_netlify"
                title="qr_netlify"
                className="mx-auto h-auto w-full max-w-[160px]"
              />
            </div>
            <div className="tech-panel rounded-[1.25rem] p-4">
              <Image
                src="/qr_render.png"
                width={180}
                height={180}
                alt="qr_render"
                title="qr_render"
                className="mx-auto h-auto w-full max-w-[160px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
