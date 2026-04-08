import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

import { getArticleBySlug, getAllSlugs } from "@/features/blog/lib/articles";
import { ArticleContent } from "@/features/blog/lib/mdx";
import Header from "@/features/shared/components/header/header";
import Footer from "@/features/shared/components/footer/footer";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import BlueCloudCorner from "@/features/landing/components/blue-cloud-corner";
import OrangeStar from "@/features/landing/components/orange-star";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.meta.title} | Gabriel Landry`,
    description: article.meta.description,
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      images: article.meta.coverImage ? [article.meta.coverImage] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const formattedDate = new Date(article.meta.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <div className="min-h-screen relative bg-transparent">
        <BlueCloudCorner className="absolute top-0 left-0" />
        <OrangeStar className="absolute bottom-0 right-0" />
        <HorizontalSpacing className="relative z-10 pt-36 pb-24">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <IconArrowLeft size={18} />
              Retour au blog
            </Link>

            {article.meta.coverImage && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={article.meta.coverImage}
                  alt={article.meta.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.meta.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-gray-400 text-sm">{formattedDate}</span>
              <span className="text-zinc-600">•</span>
              {article.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-zinc-800 px-2 py-1 rounded text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <article>
              <ArticleContent source={article.content} />
            </article>
          </div>
        </HorizontalSpacing>
      </div>
      <Footer />
    </>
  );
}
