import type { SiteContent } from "./types";

const BLOB = "https://wrn5xhmwg3rulhoy.public.blob.vercel-storage.com";

// 預設內容：Blob 尚未寫入資料、或讀取失敗時使用。
// 也是後台「載入預設資料」的來源。
export const defaultContent: SiteContent = {
  home: {
    eyebrow: "2025 → 2038 全紀錄",
    headline: "從高考榜首，到臺北市長",
    subline:
      "草包鋒兄 二零二五年至二零三八年 全紀錄 — 從 2025 年高考三級資訊處理榜首到 2038 年第 12 屆臺北市長（候選人）。",
    blogs: [
      { label: "WordPress", href: "https://wordpress.tpe12thmayor2025to2038.com/" },
      { label: "Ghost", href: "https://ghost.tpe12thmayor2025to2038.com/" },
      { label: "Hexo", href: "https://hexo.tpe12thmayor2025to2038.com/" },
      { label: "Jekyll", href: "https://jekyll.tpe12thmayor2025to2038.com/" },
      { label: "Hugo", href: "https://hugo.tpe12thmayor2025to2038.com/" },
    ],
    gallery: [
      { src: "/MyTshirtmy.png", title: "草包鋒兄T恤正面" },
      { src: "/BackTshirtBack.png", title: "草包鋒兄T恤背面" },
      { src: "/IMG_0032.jpg", title: "Picture of cat." },
      { src: "/qr250431003912code.png", title: "Picture of QrCode." },
      {
        src: "/IMG_20250627_150822-LGKf5tn2jAiRt5lvuIDv3AXG31US68.jpg",
        title: "草包鋒兄實拍",
      },
      {
        src: "/4de7140d-3f72-461a-bed3-41462fcc7c2a-Zmpt2GVJl5je4trrqy1Rc7L02gPaHI.png",
        title: "AI草包鋒兄",
      },
      {
        src: "/41848a2a-dc14-41fc-b70f-b095156b1c0c-JsEgf7QDizN8nG0W4dd2nrudBXeKEE.png",
        title: "第12屆臺北市長",
      },
      {
        src: "/6141d366-a1bf-4e01-94aa-052a9dfd7f70-d8K6tPB7bwiJ6gYo6i8zp8fDaTMrdN.png",
        title: "榜首2025",
      },
      {
        src: "/85ffa275-3f4f-476e-9adf-457e5f7d1ad6-LgvX1I517ppaGh1Dloq6o2QOnYGXVb.png",
        title: "114榜首",
      },
      {
        src: "/4aad4fb4-8ec9-4fe5-939d-a8ba4a88e6ac-jorpY0lFh1tDnB1PKeeHMQffpbhOaQ.png",
        title: "榜首市長",
      },
    ],
  },
  experience: [
    {
      year: "2025",
      title: "高考三級資訊處理榜首",
      subtitle: "2025年，37歲",
      notes: [
        "2025年高普考因地震之故延後榜示?農曆(相當於11/06)",
        "成績通知/尚未岀爐",
        "典試委員會榜單/尚未岀爐",
        "考試院公報/尚未岀爐",
        "榜示通知函/尚未岀爐",
        "管理師",
        "報到日37歲生日當天?",
      ],
      documents: [
        {
          label: "考試通知書",
          href: `${BLOB}/114080_02_202_2085_27720090%2011408049116215016157_ExamNotice-Qk2iL4eAko5n2Zy9JIPNOxl4mfJQLK.pdf`,
        },
        {
          label: "📢7月6日公務人員高考三級考試延期舉行",
          href: `${BLOB}/Screenshot%202025-07-06%20at%2016-40-13%20%E8%80%83%E9%81%B8%E9%83%A8%28Ministry%20of%20Examination%20R.O.C%28Taiwan%29%29%E5%85%A8%E7%90%83%E8%B3%87%E8%A8%8A%E7%B6%B2%20-%20%E7%B7%8A%E6%80%A5%E9%80%9A%E5%91%8A-FfD1M5Casnv7P5ErRDKIpHsACuhdB7.png`,
        },
        {
          label: "📢受丹娜絲颱風持續影響 114年公務人員高考三級考試再度順延至7月8日至10日舉行",
          href: `${BLOB}/Screenshot%202025-07-06%20at%2019-30-50%20%E8%80%83%E9%81%B8%E9%83%A8%28Ministry%20of%20Examination%20R.O.C%28Taiwan%29%29%E5%85%A8%E7%90%83%E8%B3%87%E8%A8%8A%E7%B6%B2%20-%20%E7%B7%8A%E6%80%A5%E9%80%9A%E5%91%8A-t8oXnotAXWP5KGsPOB2CJLRbda885f.png`,
        },
      ],
      links: [
        { label: "桃園市政府智慧城鄉發展委員會", href: "https://sccdc.tycg.gov.tw/" },
        { label: "桃園市政府地方稅務局", href: "https://tytax.tycg.gov.tw/" },
        { label: "國立中央大學", href: "https://www.ncu.edu.tw/" },
      ],
    },
    {
      year: "2034–2038",
      title: "熱門人選",
      subtitle: "2034年至2038年",
      notes: ["以鋒兄出現在民調上為準"],
      documents: [],
      links: [{ label: "民調中心 | TVBS", href: "https://www.tvbs.com.tw/poll-center" }],
    },
    {
      year: "2038",
      title: "臺北市長(候選人)",
      subtitle: "2038年，50歲",
      notes: ["時下國高中生模仿鋒兄", "黨主席(候選人)", "輔選臺北市議員有功", "輔選全台縣市長有功"],
      documents: [],
      links: [{ label: "臺北市政府全球資訊網", href: "https://www.gov.taipei/" }],
    },
  ],
  members: {
    leader: {
      name: "草包鋒兄",
      title: "大家長",
      relation: ["桃園縣立東興國中第十七屆畢業生"],
      unit: "市政大樓11F中央區",
      unitsite:
        "https://www-ws.gov.taipei/001/Upload/297/relfile/7725/97235/5624f50e-9193-4c61-88f3-6a8686ee8adb.pdf",
    },
    list: [
      {
        name: "塗○傑(或其配偶)",
        title: "董事",
        relation: ["不是董事長", "不是總經理", "國中同班同學(或其配偶)"],
        unit: "臺北農產運銷股份有限公司",
        unitsite: "https://www.tapmc.com.tw/",
      },
      {
        name: "○○○",
        title: "局長",
        relation: ["高一同班同學"],
        unit: "臺北市政府環境保護局",
        unitsite: "https://www.dep.gov.taipei/",
      },
      {
        name: "xxx",
        title: "局長",
        relation: ["高中同班同學"],
        unit: "臺北市政府財政局",
        unitsite: "https://dof.gov.taipei/",
      },
      {
        name: "未知",
        title: "局長",
        relation: ["小毛老師推薦"],
        unit: "臺北市政府教育局",
        unitsite: "https://www.doe.gov.taipei/",
      },
      {
        name: "時任",
        title: "局處首長",
        relation: ["副局長代理", "副處長代理"],
        unit: "臺北市政府全球資訊網",
        unitsite: "https://www.gov.taipei/",
      },
    ],
    fallback: {
      title: "無位子",
      relation: ["和鋒兄無關係"],
      unit: "臺北市陳情系統1999",
      unitsite: "https://1999.gov.taipei/Front/main",
    },
  },
  review: {
    title: "第8屆回顧",
    cover: {
      src: `${BLOB}/30%E5%88%86%E9%90%98%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%8F%E8%87%AA%E7%A8%B1%E7%B9%BC%E6%89%BF%E4%BA%BA%EF%BC%81%E5%94%90%E6%96%B0%E6%B0%91%E6%89%AF%E3%80%8C%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%AF%92%E6%AE%BA%E8%94%A3%E7%B6%93%E5%9C%8B%E3%80%8D%E5%93%BD%E5%92%BD%EF%BC%9A%E6%AD%BB%E5%BE%97%E5%A5%BD%E5%86%A4%EF%BD%9C%E4%B8%89%E7%AB%8B%E6%96%B0%E8%81%9E%E7%B6%B2%20SETN_com-40c0087e65e7362b-SwxfbWjBM7FuSzbO14I2PGXgHOXxIq.jpg`,
      title:
        "30分鐘完整版／自稱繼承人！唐新民扯「馬英九毒殺蔣經國」哽咽：死得好冤｜三立新聞網 SETN.com",
    },
    shortCut: {
      label: "2分25秒版本",
      sources: [
        `${BLOB}/video/di-8jie-tai-bei-shi-chang-xuan-ju-hui-gu.mp4`,
        "https://storage.googleapis.com/goldshoot0720/video/di-8jie-tai-bei-shi-chang-xuan-ju-hui-gu.mp4",
        "https://pub-c89792336046495e89758a0a802e15c8.r2.dev/di-8jie-tai-bei-shi-chang-xuan-ju-hui-gu.mp4",
      ],
      captions: "/saint202507050418.vtt",
    },
    fullVersion: {
      label: "完整版本",
      youtubeEmbed: "https://www.youtube.com/embed/eLF6tvVGFiA?si=bfanuCO8UwgP9RIL",
    },
    facts: [
      { label: "農曆", value: "七月初五上午04時18分" },
      { label: "國曆", value: "2025年08月27日" },
      { label: "地點", value: "臺北盆地" },
      { label: "芮氏規模", value: "7.?" },
      { label: "地震深度", value: "?.?公里" },
    ],
  },
  yearbook: {
    title: "畢業紀念冊",
    entries: [
      { text: "學生數: 33", tip: "33歲，2021年" },
      { text: "班級人數: 5、12、18、23", tip: "" },
      { text: "5 12", tip: "委任第五職等／簡任第十二職等" },
      { text: "12 18", tip: "臺北市第12屆市長／臺北市議會第18屆議員選舉選舉公報" },
      { text: "18 23", tip: "第18屆立法委員選舉選舉公報／第23任總統副總統選舉選舉公報" },
      { text: "5 23", tip: "女，5班23號／國中補習班同學" },
      { text: "座號和", tip: "男，1號／女，32號／國中同班同學" },
    ],
    footer: "© 桃園縣立東興國中第十七屆畢業紀念冊 2004",
  },
  about: {
    browsers: [
      "Google Chrome 114 以上",
      "Microsoft Edge 114 以上",
      "Mozilla Firefox 114 以上",
      "Apple Safari 15 以上",
    ],
    thanks: [
      "Vercel/Netlify/Render",
      "Next.js/HeroUI/React",
      "ChatGPT",
      "Google(Text-to-Speech AI)",
      "Font Awesome",
    ],
    mirrors: [
      { label: "Vercel(主站)", href: "https://tsaopaofenghsiung2025.vercel.app/" },
      {
        label: "Netlify(備用站)",
        href: "https://tsaopaofenghsiung2025.netlify.app/",
        qr: "/qr_netlify.png",
      },
      {
        label: "Render(備用站)",
        href: "https://tsaopaofenghsiung2025.onrender.com/",
        qr: "/qr_render.png",
      },
    ],
  },
};
