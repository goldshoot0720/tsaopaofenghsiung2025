import type { Member, SiteContent } from "./types";

export function findMember(content: SiteContent, name: string): Member & { known: boolean } {
  const { leader, list, fallback } = content.members;
  const match = [leader, ...list].find((m) => m.name === name);

  return match ? { ...match, known: true } : { ...fallback, name, known: false };
}

// 保持舊版 /api/member 的回應格式（relation 以換行字串表示）
export function toApiMember({ name, relation, title, unit, unitsite }: Member) {
  return { name, relation: relation.join("\n"), title, unit, unitsite };
}

export function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
