"use client";

import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import type { Member } from "@/content/leadership";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z" />
    </svg>
  );
}

const MAX_TILT = 8;

export function LeadershipCard({
  member,
  index,
}: {
  member: Member;
  index: number;
}) {
  const cardRef = useRef<HTMLElement | null>(null);

  function handleMove(e: ReactMouseEvent<HTMLElement>) {
    const card = cardRef.current;
    if (!card) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * MAX_TILT;
    const tiltY = (x - 0.5) * MAX_TILT;

    card.style.setProperty("--tilt-x", `${tiltX}deg`);
    card.style.setProperty("--tilt-y", `${tiltY}deg`);
    card.style.setProperty("--glow-x", `${x * 100}%`);
    card.style.setProperty("--glow-y", `${y * 100}%`);
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: "preserve-3d",
        transform:
          "perspective(1100px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
        transition:
          "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 500ms ease",
      }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#100806] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_-20px_rgba(232,90,39,0.4)]"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
        style={{ transform: "translateZ(0)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover saturate-[0.95] transition-all duration-700"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(232,90,39,0.55), transparent 55%)",
          mixBlendMode: "soft-light",
          transform: "translateZ(15px)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/70 to-transparent"
        style={{ transform: "translateZ(20px)" }}
      />

      <span
        className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur"
        style={{ transform: "translateZ(35px)" }}
      >
        / 0{index + 1}
      </span>

      <div
        className="absolute inset-x-0 bottom-0 p-6"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-6 bg-brand" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
            {member.title}
          </p>
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
          {member.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80">
          {member.bio}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/85 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/10 text-white/85 backdrop-blur transition-colors hover:bg-brand hover:text-white"
              style={{ transform: "translateZ(10px)" }}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-brand/0 transition-all duration-500 group-hover:ring-brand/30"
      />
    </article>
  );
}
