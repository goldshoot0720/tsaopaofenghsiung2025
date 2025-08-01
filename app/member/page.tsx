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
    <>
      <div>
        <h1 className={title()}>團隊成員</h1>
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
      <h2>
        <Link href="/api/member">api for member</Link>
      </h2>
      <h2>
        <Link href="/api/member/塗○傑(或其配偶)">api for 塗○傑(或其配偶)</Link>
      </h2>
      <h3>
        <Link href="/api/member/草包鋒兄">api for 草包鋒兄</Link>
      </h3>
      <h3>
        <Link href="/member/草包鋒兄">member for 草包鋒兄</Link>
      </h3>
      <h3>
        <Link href="/member/市民">member for 市民</Link>
      </h3>
    </>
  );
}
