import BlueCloudCorner from "@/features/landing/components/blue-cloud-corner";
import OrangeStar from "@/features/landing/components/orange-star";
import Footer from "@/features/shared/components/footer/footer";
import Header from "@/features/shared/components/header/header";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import { getAllArticles, getAllTags } from "@/features/blog/lib/articles";
import BlogPageClient from "@/features/blog/components/blog-page-client";

export default function BlogPage() {
  const articles = getAllArticles();
  const allTags = getAllTags();

  return (
    <>
      <Header />
      <div className="min-h-screen relative bg-transparent overflow-x-clip">
        <BlueCloudCorner className="absolute top-0 left-0 max-w-[60vw] md:max-w-none" />
        <OrangeStar className="absolute bottom-0 right-0 max-w-[40vw] md:max-w-none" />
        <HorizontalSpacing className="relative z-10 flex flex-col gap-8 pt-36 pb-24 h-full">
          <h1 className="text-5xl font-bold text-center">BLOG</h1>
          <BlogPageClient articles={articles} allTags={allTags} />
        </HorizontalSpacing>
      </div>
      <Footer />
    </>
  );
}
