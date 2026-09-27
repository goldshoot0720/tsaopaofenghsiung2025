import NextLink from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <p className="label text-accent">404</p>
      <h1 className="font-display mt-3 text-3xl font-black">找不到這個頁面</h1>
      <p className="mt-3 text-soft">連結可能已失效，或文章已被移除。</p>
      <NextLink className="btn btn-primary mt-8" href="/">
        回到首頁
      </NextLink>
    </div>
  );
}
