import BlueCloudCorner from "@/features/landing/components/blue-cloud-corner";
import OrangeStar from "@/features/landing/components/orange-star";
import Footer from "@/features/shared/components/footer/footer";
import Header from "@/features/shared/components/header/header";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import Image from "next/image";

const blogPosts = [
  {
    title: "BlacklistMC",
    date: "2024-07",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis odio vitae ullamcorper rhoncus. Nullam et leo laoreet erat ultrices ullamcorper.",
    imageUrl: "https://raw.githubusercontent.com/Sportek/blacklistmc/main/public/blacklistmc/banner.png",
    tags: ["CODE", "CODE"],
  },
  {
    title: "Me and Minecraft",
    date: "200X-2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis odio vitae ullamcorper rhoncus. Nullam et leo laoreet erat ultrices ullamcorper.",
    imageUrl:
      "https://raw.githubusercontent.com/Sportek/minecraft-stats/main/frontend/public/images/minecraft-stats/banner.png",
    tags: ["CODE", "CODE"],
  },
  {
    title: "BlacklistMC",
    date: "2024-07",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis odio vitae ullamcorper rhoncus. Nullam et leo laoreet erat ultrices ullamcorper.",
    imageUrl: "https://raw.githubusercontent.com/Sportek/blacklistmc/main/public/blacklistmc/banner.png",
    tags: ["CODE", "CODE"],
  },
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen relative bg-transparent">
        <BlueCloudCorner className="absolute top-0 left-0" />
        <OrangeStar className="absolute bottom-0 right-0" />
        <HorizontalSpacing className="relative z-10 flex flex-col gap-8 pt-36 pb-24 h-full">
          {/* Titre */}
          <h1 className="text-5xl font-bold text-center">BLOG</h1>

          {/* Barre de recherche et tags */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-10">
            <div className="flex flex-row items-center w-full md:w-auto gap-2">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full px-6 py-2 bg-zinc-900/80 border border-zinc-700 text-white focus:outline-none w-full md:w-72"
              />
              <button className="rounded-full px-4 py-2 bg-zinc-900/80 border border-zinc-700 text-white flex items-center gap-2">
                Tags <span className="ml-1">▼</span>
              </button>
            </div>
          </div>

          {/* Grille de cartes */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-12 mt-4">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="w-full h-[420px]">
                <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/70 rounded-lg p-6 border border-zinc-800 h-full flex flex-col">
                  <div className="h-[150px] min-h-[150px] w-full mb-4 rounded-lg overflow-hidden relative">
                    <Image src={post.imageUrl} alt={post.title} className="object-cover" fill priority />
                  </div>
                  <div className="flex flex-col flex-grow min-h-0">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                      <div className="text-sm text-gray-400">{post.date}</div>
                    </div>
                    <div className="flex-grow overflow-y-auto mb-4 pr-2">
                      <p className="text-gray-400">{post.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-zinc-800 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </HorizontalSpacing>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
