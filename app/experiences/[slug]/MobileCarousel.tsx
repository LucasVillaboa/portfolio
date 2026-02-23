"use client";

import { useState } from "react";
import Image from "next/image";

type MobileCarouselProps = {
  images: string[];
  title: string;
};

export default function MobileCarousel({ images, title }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Celular */}
      <div className="relative w-[260px] bg-black rounded-[2.5rem] p-3 shadow-2xl border border-neutral-700">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full z-10" />

        {/* Imagen */}
        <div className="w-full h-[520px] rounded-[2rem] overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            width={260}
            height={520}
            className="object-cover"
          />
        </div>
      </div>

      {/* Flechas */}
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          ▶
        </button>
      </div>

      {/* Indicador */}
      <div className="flex gap-2 mt-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


