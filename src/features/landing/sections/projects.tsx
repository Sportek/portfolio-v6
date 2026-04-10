import { getFeaturedProjects, getDateRange } from "@/data/projects";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import Image from "next/image";
import Link from "next/link";
import OrangeSphereBlurr from "../components/orange-sphere-blurr";
import ProjectsArrow from "../components/projects-arrow";
import RedSphereBlurr from "../components/red-sphere-blurr";

const Projects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <HorizontalSpacing className="relative flex flex-col gap-4" id="projects">
      <RedSphereBlurr className="absolute top-0 right-0 w-96 h-96" />
      <OrangeSphereBlurr className="absolute bottom-0 left-0 w-96 h-96" />
      <div className="flex flex-row justify-between relative z-10">
        <div className="flex flex-row gap-4 flex-grow">
          <div className="flex flex-col justify-end">
            <div className="text-lg font-bold text-orange-600">- MES DERNIERS</div>
            <div className="text-5xl font-bold">PROJETS</div>
          </div>
          <ProjectsArrow className="max-h-[200px] w-full hidden md:block" />
        </div>
        <div className="flex items-end">
          <Link
            href="/projects"
            className="text-gray-400 font-semibold text-lg hover:underline cursor-pointer transition-all hover:text-orange-600 duration-300 ease-in-out"
          >
            Voir tous
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 lg:gap-12 relative z-10">
        {featuredProjects.map((project) => (
          <div key={project.title} className="w-full h-[500px]">
            <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/70 rounded-lg p-6 border border-zinc-800 h-full flex flex-col">
              <div className="h-[150px] min-h-[150px] w-full mb-4 rounded-lg overflow-hidden relative">
                <Image src={project.imageUrl} alt={project.title} className="object-cover" fill priority />
              </div>
              <div className="flex flex-col flex-grow min-h-0">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-400">{getDateRange(project.startDate, project.endDate)}</div>
                </div>
                <div className="flex-grow overflow-y-auto mb-4 pr-2">
                  <p className="text-gray-400">{project.description}</p>
                </div>
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
  );
};

export default Projects;
