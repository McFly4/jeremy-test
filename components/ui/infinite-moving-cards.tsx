"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    videoLink: string;
    name: string;
    job: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  const [playingStates, setPlayingStates] = useState<{
    [key: string]: boolean;
  }>({});

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const handlePlayPause = (video: HTMLVideoElement, key: string) => {
    if (video.paused) {
      video.muted = false;
      video.play();
      setPlayingStates((prev) => ({ ...prev, [key]: true }));
    } else {
      video.pause();
      setPlayingStates((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="shadow-[#ffffff50] shadow w-[280px] overflow-hidden relative rounded-2xl"
            key={item.name}
          >
            <video
              className="w-full h-full rounded-2xl"
              src={item.videoLink}
              muted
              loop
              onClick={(e) => handlePlayPause(e.currentTarget, item.name)}
            ></video>
            {!playingStates[item.name] && (
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/30transition duration-300"
                onClick={(e) =>
                  handlePlayPause(
                    e.currentTarget.previousSibling as HTMLVideoElement,
                    item.name,
                  )
                }
              >
                <Image
                  src="/icons/playBtn.svg"
                  width={52}
                  height={52}
                  alt={"play button"}
                />
              </button>
            )}
            <div className="flex flex-col gap-2 text-white absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <p className="text-center text-2xl">{item.name}</p>
              <p className="text-center text-[18px]">{item.job}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
