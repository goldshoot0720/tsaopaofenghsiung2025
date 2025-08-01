"use client";
import React, { useState, useEffect } from "react"; // Add this import

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

// Define the type for the props, where params will be passed as a promise
type MemberPageProps = {
  params: Promise<{
    name: string;
  }>;
};

// You can adjust the type of `params` to match Next.js PageProps
export default function MemberPage({ params }: MemberPageProps) {
  // Resolve the promise for params
  const [resolvedParams, setResolvedParams] = useState<{ name: string } | null>(
    null
  );

  useEffect(() => {
    params.then((resolved) => {
      setResolvedParams(resolved);
    });
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const name = decodeURIComponent(resolvedParams.name);
  const memberData = [
    "草包鋒兄",
    "塗○傑(或其配偶)",
    "○○○",
    "xxx",
    "未知",
    "時任",
  ];

  return (
    <>
      {name === "草包鋒兄" && (
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
              <p className="text-md">草包鋒兄</p>
              <p className="text-small text-default-500">大家長</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>桃園縣立東興國中第十七屆畢業生</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://www-ws.gov.taipei/001/Upload/297/relfile/7725/97235/5624f50e-9193-4c61-88f3-6a8686ee8adb.pdf"
            >
              市政大樓11F中央區
            </Link>
          </CardFooter>
        </Card>
      )}
      {name === "塗○傑(或其配偶)" && (
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
            <p>國中同班同學</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://www.tapmc.com.tw/">
              臺北農產運銷股份有限公司
            </Link>
          </CardFooter>
        </Card>
      )}
      {name === "○○○" && (
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
      )}
      {name === "xxx" && (
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
      )}
      {name === "未知" && (
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
      )}
      {name === "時任" && (
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
      )}
      {!memberData.includes(name) && (
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
              <p className="text-md">{name}</p>
              <p className="text-small text-default-500">無位子</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>和鋒兄無關係</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://1999.gov.taipei/Front/main"
            >
              臺北市陳情系統1999
            </Link>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
