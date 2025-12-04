"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) =>
      prev === project.popupImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? project.popupImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition"
      >
        <FaTimes />
      </button>

      {/* LEFT ARROW */}
      {project.popupImages.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-6 text-white text-4xl hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* MAIN CONTENT */}
      <div className="max-w-4xl w-full text-center animate-scaleIn">

        {/* IMAGE */}
        <div className="relative w-full h-[420px] md:h-[500px] mx-auto rounded-lg overflow-hidden">
          <Image
            src={project.popupImages[current]}
            alt={project.name}
            fill
            className="object-contain"
          />
        </div>


        {/* TEXT */}
        <h2 className="text-white text-2xl font-bold mt-6">
          {project.name}
        </h2>

        <p className="text-white/80 mt-3 max-w-2xl mx-auto text-lg">
          {project.shortDesc}
        </p>

      </div>

      {/* RIGHT ARROW */}
      {project.popupImages.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-6 text-white text-4xl hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>
      )}

    </div>
  );
}
