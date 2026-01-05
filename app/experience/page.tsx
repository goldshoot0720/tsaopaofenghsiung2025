"use client";
import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function ExperiencePage() {
  return (
    <>
      <div>
        <h1 className={title()}>經歷</h1>
      </div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">高考三級資訊處理榜首</p>
            <p className="text-small text-default-500">2025年，37歲</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <a
            href="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/114080_02_202_2085_27720090%2011408049116215016157_ExamNotice-Qk2iL4eAko5n2Zy9JIPNOxl4mfJQLK.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            考試通知書
          </a>
          <a
            href="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/Screenshot%202025-07-06%20at%2016-40-13%20%E8%80%83%E9%81%B8%E9%83%A8%28Ministry%20of%20Examination%20R.O.C%28Taiwan%29%29%E5%85%A8%E7%90%83%E8%B3%87%E8%A8%8A%E7%B6%B2%20-%20%E7%B7%8A%E6%80%A5%E9%80%9A%E5%91%8A-FfD1M5Casnv7P5ErRDKIpHsACuhdB7.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            📢7月6日公務人員高考三級考試延期舉行
          </a>
          <a
            href="https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com/Screenshot%202025-07-06%20at%2019-30-50%20%E8%80%83%E9%81%B8%E9%83%A8%28Ministry%20of%20Examination%20R.O.C%28Taiwan%29%29%E5%85%A8%E7%90%83%E8%B3%87%E8%A8%8A%E7%B6%B2%20-%20%E7%B7%8A%E6%80%A5%E9%80%9A%E5%91%8A-t8oXnotAXWP5KGsPOB2CJLRbda885f.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            📢受丹娜絲颱風持續影響
            114年公務人員高考三級考試再度順延至7月8日至10日舉行
          </a>
          <p>2025年高普考因地震之故延後榜示?農曆(相當於11/06)</p>
          <p> 成績通知/尚未岀爐</p>
          <p>典試委員會榜單/尚未岀爐</p>
          <p>考試院公報/尚未岀爐</p>
          <p>榜示通知函/尚未岀爐</p>
          <p>管理師</p>
          <p>報到日37歲生日當天?</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://sccdc.tycg.gov.tw/">
            桃園市政府智慧城鄉發展委員會
          </Link>
        </CardFooter>
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://tytax.tycg.gov.tw/">
            桃園市政府地方稅務局
          </Link>
        </CardFooter>
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://www.ncu.edu.tw/">
            國立中央大學
          </Link>
        </CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">熱門人選</p>
            <p className="text-small text-default-500">2034年至2038年</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>以鋒兄出現在民調上為準</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.tvbs.com.tw/poll-center"
          >
            民調中心 | TVBS
          </Link>
        </CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">臺北市長(候選人)</p>
            <p className="text-small text-default-500">2038年，50歲</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>時下國高中生模仿鋒兄</p>
          <p>黨主席(候選人)</p>
          <p>輔選臺北市議員有功</p>
          <p>輔選全台縣市長有功</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://www.gov.taipei/">
            臺北市政府全球資訊網
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
