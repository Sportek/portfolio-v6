"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "../lib/articles";

interface BlogPageClientProps {
  articles: ArticleMeta[];
  allTags: string[];
}

export default function BlogPageClient({ articles, allTags }: BlogPageClientProps) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showTags, setShowTags] = useState(false);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((t) => a.tags.includes(t));
      return matchesSearch && matchesTags;
    });
  }, [articles, search, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-10">
        <div className="flex flex-row items-center w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="Rechercher"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full px-6 py-2 bg-zinc-900/80 border border-zinc-700 text-white focus:outline-none w-full md:w-72"
          />
          <button
            onClick={() => setShowTags(!showTags)}
            className="rounded-full px-4 py-2 bg-zinc-900/80 border border-zinc-700 text-white flex items-center gap-2"
          >
            Tags <span className="ml-1">▼</span>
          </button>
        </div>
      </div>

      {showTags && (
        <div className="flex flex-wrap justify-center gap-2 pb-6">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-white text-black border-white"
                  : "bg-zinc-900/80 text-gray-300 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-8">Aucun article trouvé.</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-12 mt-4">
          {filtered.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="w-full h-[420px] group">
              <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/70 rounded-lg p-6 border border-zinc-800 h-full flex flex-col group-hover:border-zinc-600 transition-colors">
                {article.coverImage && (
                  <div className="h-[150px] min-h-[150px] w-full mb-4 rounded-lg overflow-hidden relative">
                    <Image src={article.coverImage} alt={article.title} className="object-cover" fill />
                  </div>
                )}
                <div className="flex flex-col flex-grow min-h-0">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                    <div className="text-sm text-gray-400">{article.date}</div>
                  </div>
                  <div className="flex-grow overflow-y-auto mb-4 pr-2">
                    <p className="text-gray-400">{article.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-zinc-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
