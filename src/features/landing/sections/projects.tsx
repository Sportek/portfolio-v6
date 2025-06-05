import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import Image from "next/image";
import Link from "next/link";
import OrangeSphereBlurr from "../components/orange-sphere-blurr";
import ProjectsArrow from "../components/projects-arrow";
import RedSphereBlurr from "../components/red-sphere-blurr";

interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  imageUrl: string;
  languages: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Hadaly",
    description:
      "Hadaly est une entreprise spécialisée en intelligence artificielle avec laquelle j'ai travaillé en tant que développeur full stack. J’ai entièrement reconstruit le site web avec Next.js, tout en encadrant deux stagiaires front-end. Je participe également au développement de nouvelles fonctionnalités backend en Python, notamment autour des systèmes de notification et de logique métier. L'équipe travaille en méthodologie Agile avec des cycles de feedback rapide.",
    startDate: "2024-05-01T12:00:00.000Z",
    endDate: new Date().toISOString(),
    imageUrl: "/hadaly-banner.png",
    languages: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "AWS Lambda"],
    link: "https://hadaly.ca/",
  },
  {
    title: "BlacklistMC",
    description:
      "BlacklistMC centralise les blacklists Minecraft pour une gestion simplifiée des bannissements. Des modérateurs expérimentés garantissent des sanctions justes et efficaces.",
    startDate: "2024-07-01T12:00:00.000Z",
    imageUrl: "https://raw.githubusercontent.com/Sportek/blacklistmc/main/public/blacklistmc/banner.png",
    languages: ["TYPESCRIPT", "NEXTJS", "TAILWINDCSS"],
    link: "https://blacklistmc.com",
  },
  {
    title: "Minecraft-Stats",
    description:
      "Minecraft-Stats est un site web qui suit en temps réel les statistiques de connexion de plus de 200 serveurs Minecraft. Les données sont conservées indéfiniment pour permettre une analyse à long terme, et tout serveur peut être ajouté instantanément par les utilisateurs.",
    startDate: "2024-07-01T12:00:00.000Z",
    imageUrl:
      "https://raw.githubusercontent.com/Sportek/minecraft-stats/main/frontend/public/images/minecraft-stats/banner.png",
    languages: ["TYPESCRIPT", "NEXTJS", "ADONISJS"],
    link: "https://minecraft-stats.com",
  },
];

const Projects = () => {
  const getDate = (startDate: string, endDate?: string) => {
    if (!startDate) return "";
    if (!endDate || startDate === endDate) {
      return new Date(startDate).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return `du ${new Date(startDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })} au ${new Date(endDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  };

  return (
    <HorizontalSpacing className="relative flex flex-col gap-4" id="projects">
      <RedSphereBlurr className="absolute top-0 right-0 w-96 h-96" />
      <OrangeSphereBlurr className="absolute bottom-0 left-0 w-96 h-96" />
      <div className="flex flex-row justify-between relative z-10">
        <div className="flex flex-row gap-4 flex-grow">
          <div className="flex flex-col justify-end">
            <div className="text-lg font-bold text-orange-600">- MY LATEST</div>
            <div className="text-5xl font-bold">PROJECTS</div>
          </div>
          <ProjectsArrow className="max-h-[200px] w-full hidden md:block" />
        </div>
        <div className="flex items-end">
          <Link
            href="/projects"
            className="text-gray-400 font-semibold text-lg hover:underline cursor-pointer transition-all hover:text-orange-600 duration-300 ease-in-out"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 lg:gap-12 relative z-10">
        {projects.map((project) => (
          <div key={project.title} className="w-full h-[500px]">
            <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/70 rounded-lg p-6 border border-zinc-800 h-full flex flex-col">
              <div className="h-[150px] min-h-[150px] w-full mb-4 rounded-lg overflow-hidden relative">
                <Image src={project.imageUrl} alt={project.title} className="object-cover" fill priority />
              </div>
              <div className="flex flex-col flex-grow min-h-0">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-400">{getDate(project.startDate, project.endDate)}</div>
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
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Voir le projet →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HorizontalSpacing>
  );
};

export default Projects;
