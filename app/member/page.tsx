import type { Metadata } from "next";

import NextLink from "next/link";

import { MemberCard } from "@/components/member-card";
import { MemberLookup } from "@/components/member-lookup";
import { PageHeader, SectionTitle } from "@/components/page-header";
import { getContent } from "@/lib/content/store";

export const revalidate = 60;

export const metadata: Metadata = { title: "團隊成員" };

const apiLinks = [
  { label: "GET /api/member", href: "/api/member" },
  { label: "GET /api/member/塗○傑(或其配偶)", href: "/api/member/塗○傑(或其配偶)" },
  { label: "GET /api/member/草包鋒兄", href: "/api/member/草包鋒兄" },
];

export default async function MemberPage() {
  const { content } = await getContent();
  const { leader, list } = content.members;

  return (
    <>
      <PageHeader eyebrow="Team Network" index="02" title="團隊成員" />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:row-span-2">
          <MemberCard featured member={leader} />
        </div>
        {list.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t rule pt-12 lg:grid-cols-2">
        <section>
          <SectionTitle label="Lookup" title="查詢職位" />
          <p className="mb-5 text-soft">輸入任何名字，看看在鋒兄團隊中的位子。</p>
          <MemberLookup />
        </section>
        <section>
          <SectionTitle label="JSON" title="開放 API" />
          <ul className="space-y-2 font-mono text-sm">
            {apiLinks.map((api) => (
              <li key={api.href}>
                <NextLink className="link" href={api.href}>
                  {api.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
