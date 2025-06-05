import ReviewsCarousel from "@/components/ReviewsCarousel";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";

const reviews = [
  {
    user: { name: "Mitsu | Shin", image: "/avatars/avatar2.png" },
    service: "Développement d'un bot discord",
    stars: 5,
    message:
      "Le best des best, qualité incroyable, à l'écoute des demandes et réactifs (moins d'une journée pour me fournir le bot) ! Je recommande fortement, je viendrais assurément reprendre des modules dans le futur !",
    date: "2021-12-21 23:56",
  },
  {
    user: { name: "Oli", image: "/avatars/avatar3.png" },
    service: "Développement d'un bot discord",
    stars: 5,
    message: "Tres bon service hyper rapide et m'a tout expliquer sur le bot, ect.",
    date: "2021-12-30 14:10",
  },
  {
    user: { name: ">S", image: "/avatars/avatar4.png" },
    service: "Développement d'un bot discord",
    stars: 5,
    message: "Vite fait et bien fait! Un vrai travail d'installation et d'explication. Merci, je recommande.",
    date: "2022-01-01 16:30",
  },
  {
    user: { name: "TysMat", image: "/avatars/avatar5.png" },
    service: "Développement d'un bot discord",
    stars: 5,
    message:
      "Nous avons pris un bot avec quand même assez de fonctionnalité et ont nous la livrée dans des délais quand même assez courts. Je vous conseille de passer par ici pour prendre vos bot discord la qualité et au rendez-vous et la facilité d'installation et de configuration est aussi rendez-vous. Encore merci pour ce magnifique BOT. La haute-équipe d'Hexarion",
    date: "2022-04-04 05:11",
  },
  {
    user: { name: "nolog22", image: "/avatars/avatar6.png" },
    service: "Web and Bot",
    stars: 5,
    message:
      "Je trouve que le développement de mon site Internet a été parfait. Il y a certainement des choses que je voudrais encore ajouter mais en généralité, tout était façonné de sortes à ce que le client voient ce qu'on veut lui montrer. Pour la partie bot, simple et éfficace même si j'ai du taper 3 lignes pour traduire certains message dans le fichier config. J'aime beaucoup le travail qui a été éffectué. Je recommanderai à toutes les personnes voulant un travail simple et rapide car il est pratiquement actif sur chacune de mes réponses discord!",
    date: "2024-04-07 20:14",
  },
];

const Reviews = () => {
  return (
    <HorizontalSpacing className="w-full">
      <div className="flex flex-col gap-12 items-end w-full h-full relative my-24">
        <div className="flex flex-row justify-between z-10 w-full">
          <div className="flex-1">{/* Flèche décorative si besoin */}</div>
          <div className="flex flex-col justify-end items-end">
            <div className="text-lg font-bold text-blue-500">- MY CLIENTS</div>
            <div className="text-5xl font-bold">REVIEWS</div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-8 overflow-visible">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </div>
    </HorizontalSpacing>
  );
};

export default Reviews;
