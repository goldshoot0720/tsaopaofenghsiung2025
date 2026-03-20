"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState, useRef } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const audio1 = useRef<HTMLAudioElement>(null);
  const audio3 = useRef<HTMLAudioElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      className="border-b border-white/10 bg-transparent"
      classNames={{
        base: "border-b border-white/10 bg-transparent backdrop-blur-none",
        wrapper:
          "tech-panel mt-4 rounded-[1.75rem] border px-4 py-2 shadow-[0_18px_55px_rgba(0,0,0,0.28)]",
        menu: "tech-panel mt-3 rounded-[1.5rem] border p-4",
      }}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
    >
      {/* 左側：主選單（桌機用） */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">

          <button
            aria-label="播放音訊 synthesis1"
            className="tech-link ml-2 rounded-full px-3 py-2 text-xs"
            onClick={() => audio1.current?.play()}
          >
            ▶️
          </button>
          <audio ref={audio1} src="/synthesis1.wav" preload="auto">
            <track
              kind="captions"
              srcLang="zh"
              label="中文字幕"
              src="/synthesis1.vtt"
              default
            />
          </audio>

          <span className="tech-heading bg-gradient-to-r from-cyan-300 via-sky-100 to-lime-200 bg-clip-text text-lg font-bold text-transparent">
            草包鋒兄
          </span>

          <button
            aria-label="播放音訊 synthesis3"
            className="tech-link ml-2 rounded-full px-3 py-2 text-xs"
            onClick={() => audio3.current?.play()}
          >
            ▶️
          </button>
          <audio ref={audio3} src="/synthesis3.wav" preload="auto">
            <track
              kind="captions"
              srcLang="zh"
              label="中文字幕"
              src="/synthesis3.vtt"
              default
            />
          </audio>
        </NavbarBrand>

        {/* 桌機版選單 */}
        <ul className="ml-2 hidden justify-start gap-3 lg:flex">
          {siteConfig.navItems.filter(Boolean).map((item) => (
            <NavbarItem key={item!.href}>
              <NextLink
                href={item!.href}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "tech-chip rounded-full px-3 py-2 text-sm font-medium data-[active=true]:border-cyan-300/60 data-[active=true]:text-cyan-200 flex items-center gap-2"
                )}
                color="foreground"
              >
                <FontAwesomeIcon icon={item!.icon} className="w-4 h-4" />
                {item!.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* 桌機版右上角主題切換 */}
      <NavbarContent className="hidden lg:flex basis-1/5" justify="end">
        <ThemeSwitch />
      </NavbarContent>

      {/* 小螢幕：主題切換 + Menu Toggle（手機 / 平板） */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </NavbarContent>

      {/* 手機 / 平板 選單項目 */}
      <NavbarMenu className="z-50 bg-transparent p-4">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.filter(Boolean).map((item, index) => (
            <NavbarMenuItem key={`${item!.href}-${index}`}>
              <Link
                href={item!.href}
                color="foreground"
                size="lg"
                className="tech-chip flex items-center gap-2 rounded-2xl px-4 py-3"
                onClick={() => setIsMenuOpen(false)} // 點擊後關閉選單
              >
                <FontAwesomeIcon icon={item!.icon} className="w-5 h-5" />
                {item!.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
