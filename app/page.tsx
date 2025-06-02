import { title } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className={title()}>首頁</h1>
        <Image
          src="/MyTshirtmy.png"
          width={100}
          height={100}
          alt="草包鋒兄T恤正面"
          title="草包鋒兄T恤正面"
        />
        <Image
          src="/BackTshirtBack.png"
          width={100}
          height={100}
          alt="草包鋒兄T恤背面"
          title="草包鋒兄T恤背面"
        />
        <Image
          src="/IMG_0032.jpg"
          width={100}
          height={100}
          alt="Picture of cat."
          title="Picture of cat."
        />
        <Image
          src="/qr250431003912code.png"
          width={100}
          height={100}
          alt="Picture of QrCode."
          title="Picture of QrCode."
        />
      </div>
    </>
  );
}
