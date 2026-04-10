import { projects, getDateRange } from "@/data/projects";
import BlueCloudCorner from "@/features/landing/components/blue-cloud-corner";
import OrangeStar from "@/features/landing/components/orange-star";
import Footer from "@/features/shared/components/footer/footer";
import Header from "@/features/shared/components/header/header";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import Image from "next/image";
import Link from "next/link";

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded border border-green-700">En cours</span>;
    case "completed":
      return <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded border border-blue-700">Terminé</span>;
    case "abandoned":
      return <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-zinc-700">Abandonné</span>;
    default:
      return null;
  }
};

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen relative bg-transparent">
        <BlueCloudCorner className="absolute top-0 left-0" />
        <OrangeStar className="absolute bottom-0 right-0" />
        <HorizontalSpacing className="relative z-10 flex flex-col gap-8 pt-36 pb-24 h-full">
          <div className="flex flex-col items-center gap-2">
            <div className="text-lg font-bold text-orange-600">- PORTFOLIO</div>
            <h1 className="text-5xl font-bold text-center">MES PROJETS</h1>
            <p className="text-gray-400 text-center max-w-2xl mt-4">
              Découvrez mes projets personnels et professionnels, du développement de SaaS aux applications mobiles en passant par les bots Discord.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8 mt-8">
            {projects.map((project) => (
              <div key={project.title} className="w-full">
                <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/70 rounded-lg p-6 border border-zinc-800 h-full flex flex-col">
                  <div className="h-[180px] min-h-[180px] w-full mb-4 rounded-lg overflow-hidden relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover"
                      fill
                      priority
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex flex-row justify-between items-start gap-4 mb-2">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="text-sm text-gray-400">{getDateRange(project.startDate, project.endDate)}</div>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.languages.map((lang) => (
                        <span key={lang} className="text-xs bg-zinc-800 px-2 py-1 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-row gap-4">
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="text-orange-500 hover:text-orange-400 transition-colors"
                        >
                          Voir le projet →
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          GitHub →
                        </Link>
                      )}
                      {project.blogSlug && (
                        <Link
                          href={`/blog/${project.blogSlug}`}
                          className="text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          Plus d&apos;infos →
                        </Link>
                      )}
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

export default ProjectsPage;
