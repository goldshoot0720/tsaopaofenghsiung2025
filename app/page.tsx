import { title } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className={title()}>首頁</h1>
        <Image
          src="/IMG_0032.jpg"
          width={150}
          height={150}
          alt="Picture of cat."
        />
        <Image
          src="/qr250431003912code.png"
          width={100}
          height={100}
          alt="Picture of QrCode."
        />
      </div>
    </>
  );
}
