import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage: string;
  published: boolean;
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseArticleFile(filename: string): Article | null {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.published) return null;

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? "",
      published: data.published,
    },
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((f) => parseArticleFile(f))
    .filter((a): a is Article => a !== null)
    .map((a) => a.meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, filename);

  if (!fs.existsSync(filePath)) return null;

  return parseArticleFile(filename);
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = new Set(articles.flatMap((a) => a.tags));
  return Array.from(tags).sort();
}

export function getAllSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
