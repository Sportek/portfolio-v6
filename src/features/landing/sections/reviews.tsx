import ReviewsCarousel from "@/components/ReviewsCarousel";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";

const reviews = [
  {
    user: { name: "Quentin", image: "/avatars/avatar1.png" },
    stars: 4,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est tortor, lobortis vitae blandit et, maximus in tortor. Praesent eu nunc sem. Aenean finibus condimentum viverra. Cras et arcu metus. Nulla a congue eros, a dignissim tortor. Nam non justo sit amet ante tempus facilisis nec non mauris. Maecenas sed dolor vel purus molestie gravida. Mauris eu arcu quis leo lobortis scelerisque. Integer porta turpis mi, vel cursus nisi lacinia in.",
  },
  {
    user: { name: "Alex", image: "/avatars/avatar2.png" },
    stars: 5,
    message:
      "Suspendisse porta ante nec nibh rutrum pretium. Nullam tempor facilisis justo, et consectetur quam interdum in. Suspendisse semper sit amet ante sed aliquet. Vestibulum pharetra magna sed elementum eleifend. Cras nibh ligula, malesuada at ultricies vitae, imperdiet et quam. Mauris id ipsum posuere, lacinia ante aliquet, volutpat quam. Suspendisse ullamcorper efficitur sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    user: { name: "Théo", image: "/avatars/avatar3.png" },
    stars: 2,
    message:
      "Mauris eleifend lacus neque, ac blandit mi finibus eget. Vestibulum molestie risus in arcu ullamcorper, quis venenatis diam interdum. Sed rhoncus, ex pretium mattis tempus, velit ex eleifend urna, et elementum lectus odio eu est. Phasellus pellentesque non enim a euismod. Praesent elit magna, pellentesque quis cursus nec, condimentum a nulla.",
  },
  {
    user: { name: "Théo", image: "/avatars/avatar3.png" },
    stars: 2,
    message:
      "Mauris eleifend lacus neque, ac blandit mi finibus eget. Vestibulum molestie risus in arcu ullamcorper, quis venenatis diam interdum. Sed rhoncus, ex pretium mattis tempus, velit ex eleifend urna, et elementum lectus odio eu est. Phasellus pellentesque non enim a euismod. Praesent elit magna, pellentesque quis cursus nec, condimentum a nulla.",
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
