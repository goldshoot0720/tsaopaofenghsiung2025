// 引入 Next.js 的 API Request/Response 型別
import type { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const member = [
    {
      name: "塗○傑(或其配偶)",
      relation: "不是董事長\n不是總經理\n國中同班同學(或其配偶)",
      title: "董事",
      unit: "臺北農產運銷股份有限公司",
      unitsite: "https://www.tapmc.com.tw/",
    },
    {
      name: "○○○",
      relation: "高一同班同學",
      title: "局長",
      unit: "臺北市政府環境保護局",
      unitsite: "https://www.dep.gov.taipei/",
    },
    {
      name: "xxx",
      relation: "高中同班同學",
      title: "局長",
      unit: "臺北市政府環境保護局",
      unitsite: "https://dof.gov.taipei/",
    },
    {
      name: "未知",
      relation: "小毛老師推薦",
      title: "局長",
      unit: "臺北市政府教育局",
      unitsite: "https://www.doe.gov.taipei/",
    },
    {
      name: "時任",
      relation: "副局長代理\n副處長代理",
      title: "局處首長",
      unit: "臺北市政府教育局",
      unitsite: "https://www.gov.taipei/",
    },
  ];

  res.status(200).json({ member });
}
