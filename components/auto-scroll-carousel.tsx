"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function AutoScrollCarousel({
  carouselData,
}: {
  carouselData: { image: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
      }),
    ],
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="mx-auto h-[200px] w-full max-w-6xl md:h-[400px]">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {carouselData.map((slide, i) => (
            <div key={i} className="h-full w-full flex-none px-4">
              <img
                src={slide.image}
                alt="carousel-image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
