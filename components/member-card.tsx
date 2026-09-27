import NextLink from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import type { Member } from "@/lib/content/types";

export function MemberCard({
  member,
  featured = false,
  linked = true,
}: {
  member: Member;
  featured?: boolean;
  linked?: boolean;
}) {
  const initial = Array.from(member.name)[0] ?? "?";

  return (
    <article className={clsx("surface flex h-full flex-col p-6", featured && "sm:p-8")}>
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className={clsx(
            "font-display grid shrink-0 place-items-center rounded-full font-black",
            featured
              ? "h-16 w-16 bg-[var(--accent)] text-2xl text-[var(--accent-ink)]"
              : "h-12 w-12 bg-[var(--accent-soft)] text-lg text-accent",
          )}
        >
          {initial}
        </span>
        <div className="min-w-0">
          <h3 className={clsx("font-semibold", featured ? "font-display text-3xl" : "text-lg")}>
            {linked ? (
              <NextLink className="hover:text-[var(--accent)]" href={`/member/${encodeURIComponent(member.name)}`}>
                {member.name}
              </NextLink>
            ) : (
              member.name
            )}
          </h3>
          <span className="chip mt-1.5">{member.title}</span>
        </div>
      </div>

      <ul className="mt-5 flex-grow space-y-1.5 leading-relaxed text-soft">
        {member.relation.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <a
        className="mt-6 flex items-center justify-between gap-3 border-t rule pt-4 text-sm font-medium hover:text-[var(--accent)]"
        href={member.unitsite}
        rel="noopener noreferrer"
        target="_blank"
      >
        {member.unit}
        <FontAwesomeIcon className="h-3 w-3 shrink-0 text-faint" icon={faArrowUpRightFromSquare} />
      </a>
    </article>
  );
}
