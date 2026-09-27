import { JetBrains_Mono as FontMono, Noto_Serif_TC as FontDisplay } from "next/font/google";

export const fontDisplay = FontDisplay({
  weight: ["600", "900"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
  variable: "--font-display",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
