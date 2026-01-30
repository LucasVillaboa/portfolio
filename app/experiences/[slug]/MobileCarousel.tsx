"use client";

import Image from "next/image";
import { useState } from "react";

type MobileCarouselProps = {
  images: string[];
  title: string;
};

export default function MobileCarousel({ images, title }: MobileCarouselProps) {
  return (
    <div className="flex justify-center mb-14">
      <div className="relative w-[260px] bg-black rounded-[2.5rem] p-3 shadow-2xl border border-neutral-700">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full z-10" />

        {/* Carrusel horizontal */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory h-[520px] mt-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] h-full rounded-[2rem] overflow-hidden snap-center"
            >
              <Image
                src={img}
                alt={`${title} ${i + 1}`}
                width={260}
                height={520}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

