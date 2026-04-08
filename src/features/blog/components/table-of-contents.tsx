"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Heading } from "../lib/headings";

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto">
      <p className="text-sm font-semibold text-white mb-3">Chapitres</p>
      <ul className="space-y-1.5 border-l border-zinc-700">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.slug)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "block text-sm py-0.5 transition-colors border-l-2 -ml-px",
                heading.level === 3 ? "pl-6" : "pl-4",
                activeSlug === heading.slug
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
