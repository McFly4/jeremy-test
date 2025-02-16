"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function VideoTop({ videoUrl }: { videoUrl: any }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (video: HTMLVideoElement) => {
    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative">
      <video
        className="border-4 rounded-2xl shadow-2xl shadow-white max-h-[550px] w-full object-cover"
        src={videoUrl.asset.url}
        muted
        onClick={(e) => handlePlayPause(e.currentTarget)}
      ></video>
      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300"
          onClick={(e) =>
            handlePlayPause(
              e.currentTarget.previousElementSibling as HTMLVideoElement,
            )
          }
        >
          <Image
            src="/icons/playBtn.svg"
            width={52}
            height={52}
            alt="play button"
          />
        </button>
      )}
    </div>
  );
}
