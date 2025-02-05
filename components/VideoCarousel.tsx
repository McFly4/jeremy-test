"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function VideoCarousel() {
  return (
    <div className="h-[34rem] lg:h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    videoLink: "/video.mp4",
    name: "Thomas",
    job: "SEO Local",
  },
  {
    videoLink: "/video.mp4",
    name: "Thomas2",
    job: "SEO Local",
  },
  {
    videoLink: "/video.mp4",
    name: "Thomas3",
    job: "SEO Local",
  },
  {
    videoLink: "/video.mp4",
    name: "Thomas4",
    job: "SEO Local",
  },
  {
    videoLink: "/video.mp4",
    name: "Thomas5",
    job: "SEO Local",
  },
];
