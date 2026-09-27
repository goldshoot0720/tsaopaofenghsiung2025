import type { Metadata } from "next";

import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { MemberCard } from "@/components/member-card";
import { findMember, safeDecode } from "@/lib/content/members";
import { getContent } from "@/lib/content/store";

type Props = { params: Promise<{ name: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  return { title: safeDecode(name) };
}

export default async function MemberDetailPage({ params }: Props) {
  const { name } = await params;
  const { content } = await getContent();
  const member = findMember(content, safeDecode(name));

  return (
    <div className="mx-auto max-w-xl">
      <NextLink className="label mb-8 inline-flex items-center gap-2 hover:text-[var(--accent)]" href="/member">
        <FontAwesomeIcon className="h-3 w-3" icon={faArrowLeft} />
        團隊成員
      </NextLink>
      <MemberCard featured linked={false} member={member} />
      {!member.known && (
        <p className="mt-6 text-center text-sm text-faint">此人不在名單中，已依預設規則分配職位。</p>
      )}
    </div>
  );
}
