import type { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = Array.isArray(req.query.name) ? req.query.name[0] : req.query.name ?? "";

  if (name === "塗○傑(或其配偶)") {
    res.status(200).json({
      name,
      relation: "不是董事長\n不是總經理\n國中同班同學(或其配偶)",
      title: "董事",
      unit: "臺北農產運銷股份有限公司",
      unitsite: "https://www.tapmc.com.tw/",
    });
  } else if (name === "○○○") {
    res.status(200).json({
      name,
      relation: "高一同班同學",
      title: "局長",
      unit: "臺北市政府環境保護局",
      unitsite: "https://www.dep.gov.taipei/",
    });
  } else if (name === "xxx") {
    res.status(200).json({
      name,
      relation: "高中同班同學",
      title: "局長",
      unit: "臺北市政府環境保護局",
      unitsite: "https://dof.gov.taipei/",
    });
  } else if (name === "未知") {
    res.status(200).json({
      name,
      relation: "小毛老師推薦",
      title: "局長",
      unit: "臺北市政府教育局",
      unitsite: "https://www.doe.gov.taipei/",
    });
  } else if (name === "時任") {
    res.status(200).json({
      name,
      relation: "副局長代理\n副處長代理",
      title: "局處首長",
      unit: "臺北市政府教育局",
      unitsite: "https://www.gov.taipei/",
    });
  } else if (name === "草包鋒兄") {
    res.status(200).json({
      name,
      relation: "桃園縣立東興國中第十七屆畢業生",
      title: "大家長",
      unit: "市政大樓11F中央區",
      unitsite:
        "https://www-ws.gov.taipei/001/Upload/297/relfile/7725/97235/5624f50e-9193-4c61-88f3-6a8686ee8adb.pdf",
    });
  } else {
    res.status(200).json({
      name,
      relation: "和鋒兄無關係",
      title: "無位子",
      unit: "臺北市陳情系統1999",
      unitsite: "https://1999.gov.taipei/Front/main",
    });
  }
}
