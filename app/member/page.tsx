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

export default function MemberPage() {
  return (
    <section className="space-y-6">
      <div className="tech-panel rounded-[2rem] px-6 py-8 sm:px-8">
      <div className="space-y-3">
          <p className="tech-heading text-sm text-cyan-200/90">Team Network</p>
          <h1 className={title({ color: "cyan" })}>團隊成員</h1>
          <div className="tech-divider" />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Card className="tech-panel max-w-[400px] rounded-[1.75rem] border border-white/10 bg-transparent text-white shadow-none">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">塗○傑(或其配偶)</p>
              <p className="text-small text-default-500">董事</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>不是董事長</p>
            <p>不是總經理</p>
            <p>國中同班同學(或其配偶)</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.tapmc.com.tw/">
              臺北農產運銷股份有限公司
            </Link>
          </CardFooter>
        </Card>
        <Card className="tech-panel max-w-[400px] rounded-[1.75rem] border border-white/10 bg-transparent text-white shadow-none">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">○○○</p>
              <p className="text-small text-default-500">局長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>高一同班同學</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.dep.gov.taipei/">
              臺北市政府環境保護局
            </Link>
          </CardFooter>
        </Card>
        <Card className="tech-panel max-w-[400px] rounded-[1.75rem] border border-white/10 bg-transparent text-white shadow-none">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">xxx</p>
              <p className="text-small text-default-500">局長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>高中同班同學</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://dof.gov.taipei/">
              臺北市政府財政局
            </Link>
          </CardFooter>
        </Card>
        <Card className="tech-panel max-w-[400px] rounded-[1.75rem] border border-white/10 bg-transparent text-white shadow-none">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">未知</p>
              <p className="text-small text-default-500">局長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>小毛老師推薦</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.doe.gov.taipei/">
              臺北市政府教育局
            </Link>
          </CardFooter>
        </Card>
        <Card className="tech-panel max-w-[400px] rounded-[1.75rem] border border-white/10 bg-transparent text-white shadow-none">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">時任</p>
              <p className="text-small text-default-500">局處首長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>副局長代理</p>
            <p>副處長代理</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.gov.taipei/">
              臺北市政府全球資訊網
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="tech-panel rounded-[1.75rem] p-6">
        <div className="flex flex-wrap gap-3">
          <h2>
            <Link
              className="tech-link inline-flex rounded-full px-4 py-2"
              href="/api/member"
            >
              api for member
            </Link>
          </h2>
          <h2>
            <Link
              className="tech-link inline-flex rounded-full px-4 py-2"
              href="/api/member/塗○傑(或其配偶)"
            >
              api for 塗○傑(或其配偶)
            </Link>
          </h2>
          <h3>
            <Link
              className="tech-link inline-flex rounded-full px-4 py-2"
              href="/api/member/草包鋒兄"
            >
              api for 草包鋒兄
            </Link>
          </h3>
          <h3>
            <Link
              className="tech-link inline-flex rounded-full px-4 py-2"
              href="/member/草包鋒兄"
            >
              member for 草包鋒兄
            </Link>
          </h3>
          <h3>
            <Link
              className="tech-link inline-flex rounded-full px-4 py-2"
              href="/member/市民"
            >
              member for 市民
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
}
