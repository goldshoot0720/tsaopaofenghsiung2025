import { title } from "@/components/primitives";
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <div>
        <h1 className={title()}>首頁</h1>
      </div>
      <Image
        src="/IMG_0032.jpg"
        width={200}
        height={200}
        alt="Picture of cat."
      />
    </>
  );
}
