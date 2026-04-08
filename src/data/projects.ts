export interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  imageUrl: string;
  languages: string[];
  link?: string;
  github?: string;
  status: "active" | "completed" | "abandoned";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "K7Panik!",
    description:
      "K7 Panik! est un jeu de coopération de style arcade où deux adolescents utilisent une arme scientifico-musicale pour repousser une invasion de monstres dans leur sous-sol. Les joueurs doivent collaborer pour réparer des stations via des mini-jeux et alterner stratégiquement entre les styles de musique pour éliminer les vagues de créatures et obtenir le meilleur score possible.",
    startDate: "2025-10-31",
    endDate: "2026-04-07",
    imageUrl: "/blog/concours_ubisoft_2026/cover.png",
    languages: ["UNREAL ENGINE 5", "C++"],
    status: "completed",
    featured: true,
    link: "blog/concours_ubisoft_2026",
  },
  {
    title: "Kubot",
    description:
      "Premier SaaS personnel : plateforme no-code pour créer des bots Discord modulaires. Système pay-as-you-go par module, déploiement automatique via Docker (Dockerode) et dashboard de configuration intuitif.",
    startDate: "2025-01-01",
    imageUrl: "/kubot-banner.png",
    languages: ["AdonisJS 6", "React 19", "React Router 7", "PostgreSQL", "Docker", "Stripe", "Redis"],
    link: "https://kubot.cloud",
    status: "active",
    featured: true,
  },
  {
    title: "Nexus",
    description:
      "Plateforme de gestion centralisée multi-boutiques Shopify (commande freelance). Système d'authentification RBAC, intégration webhooks Shopify, dashboard analytique consolidé, notifications multi-canaux (Discord, Telegram) et page publique de recherche de commandes.",
    startDate: "2025-10-01",
    endDate: "2025-11-30",
    imageUrl: "/nexus-banner.png",
    languages: ["React 19", "Vite", "React Router 7", "AdonisJS 6", "PostgreSQL", "Tailwind CSS 4"],
    status: "completed",
  },
  {
    title: "Minecraft-Stats",
    description:
      "Plateforme open-source d'analyse de serveurs Minecraft. 9 000+ visiteurs/mois, 8M données/an, 300+ serveurs suivis. API REST publique avec documentation Swagger, collecte automatisée toutes les 10 minutes, monitoring Prometheus/Grafana.",
    startDate: "2024-05-01",
    imageUrl: "/minecraft-stats-banner.png",
    languages: ["Next.js 16", "AdonisJS 6", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    link: "https://minecraft-stats.fr",
    github: "https://github.com/Sportek/minecraft-stats",
    status: "active",
    featured: true,
  },
  {
    title: "Dynasty-Discord",
    description:
      "Framework commercial de bot Discord modulaire, vendu et supporté activement. 21 repositories en architecture micro-services, 15+ modules (modération, tickets, invitations, giveaways, statistiques, suggestions, logger...), CLI de gestion, backend de distribution avec système de licences et plugin Minecraft Java.",
    startDate: "2023-12-01",
    imageUrl: "/dynasty-banner.png",
    languages: ["Discord.js", "TypeScript", "AdonisJS", "Node.js"],
    status: "active",
  },
  {
    title: "Hadaly",
    description:
      "Plateforme SaaS pour fusions-acquisitions. Refonte complète du frontend Next.js, data room (explorateur fichiers, permissions, partage), prévisualisation documents (PDF, DOCX, XLSX), notifications temps réel, workspaces multi-équipe. Leadership front-end et mentorat de stagiaires en méthodologie Agile/Scrum.",
    startDate: "2024-05-01",
    endDate: "2025-08-31",
    imageUrl: "/hadaly-banner.png",
    languages: ["Next.js", "TypeScript", "Python", "AWS Cognito", "AWS Lambda"],
    link: "https://hadaly.ca",
    status: "completed",
    featured: false,
  },
  {
    title: "Oracles",
    description:
      "Plateforme de jeux-questionnaires temps réel - projet d'équipe de 6 personnes sur 2 ans à Polytechnique Montréal. Rôle : Chef Client Léger (Lead Mobile). Application mobile Android Flutter/Dart, client web Angular, 98% code coverage (Jest, Jasmine).",
    startDate: "2024-01-01",
    endDate: "2025-04-30",
    imageUrl: "/oracles-banner.png",
    languages: ["Flutter", "Dart", "Angular", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Sportek/oracles",
    status: "completed",
  },
  {
    title: "VPSM",
    description:
      "Site vitrine pour hébergeur VPS (première commande web freelance officielle). VPS Linux, Windows RDP, serveurs de jeux avec design responsive et interface de sélection des systèmes d'exploitation.",
    startDate: "2024-03-01",
    endDate: "2024-04-30",
    imageUrl: "/vpsm-banner.png",
    languages: ["Vue.js", "Nuxt.js 3", "TypeScript", "Tailwind CSS", "Nuxt UI"],
    status: "completed",
  },
  {
    title: "BlacklistMC",
    description:
      "Plateforme de gestion de blacklists pour la communauté Minecraft. Projet collaboratif en équipe de 3 (Designer UI/UX + Dev Bot + Dev Web). API REST avec Swagger, panel admin, OAuth Discord. Développé à 90%, abandonné avant production.",
    startDate: "2023-01-01",
    endDate: "2024-01-31",
    imageUrl: "/blacklistmc-banner.png",
    languages: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Azure Blob"],
    link: "https://blacklistmc.com",
    github: "https://github.com/Sportek/blacklistmc",
    status: "abandoned",
  },
  {
    title: "Hyperion",
    description:
      "Administrateur d'un serveur Minecraft à succès. 600 joueurs simultanés au pic, 2 500+ joueurs inscrits. Développement de bots Discord, intégration Discord-Minecraft (Rich Presence Java), création de textures et assets visuels, gestion de builds et support joueurs.",
    startDate: "2020-01-01",
    endDate: "2021-12-31",
    imageUrl: "/hyperion-banner.png",
    languages: ["Java", "Discord.js", "Photoshop", "Minecraft"],
    status: "completed",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getDateRange = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const startStr = start.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });

  if (!endDate) {
    return `${startStr} - Présent`;
  }

  const end = new Date(endDate);
  const endStr = end.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  return `${startStr} - ${endStr}`;
};
