"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/features/shared/components/ui/carousel";
import FullAvatar from "@/features/shared/components/users/full-avatar";
import { Star } from "lucide-react";

type Review = {
  user: { name: string; image: string };
  stars: number;
  message: string;
  date: string;
};

type ReviewsCarouselProps = {
  reviews: Review[];
};

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {reviews
          .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((review, idx) => (
            <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/70 rounded-lg p-6 border border-zinc-800 w-full h-[270px] flex flex-col gap-2 shadow-md relative">
                <div className="flex items-center gap-2 mb-2">
                  <FullAvatar user={review.user} size="sm" />
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.stars ? "text-yellow-400 fill-yellow-400" : "text-zinc-500"}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-white/40 text-xs">{new Date(review.date).toLocaleDateString()}</div>
                <div className="text-white/80 text-sm overflow-y-auto pr-1" style={{ maxHeight: "150px" }}>
                  {review.message}
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="-right-6 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
};

export default ReviewsCarousel;
