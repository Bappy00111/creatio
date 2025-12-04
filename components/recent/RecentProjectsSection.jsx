"use client";

import { useState } from "react";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";

import love from "../../public/home-image/love.svg";
import imageOne from "../../public/home-image/img-one.png";
import imageTwo from "../../public/home-image/image-two.jpeg";
import imageThree from "../../public/home-image/image-three.png";
import imageFour from "../../public/home-image/image-four.jpeg";

import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: "nsw-farmers",
    name: "NSW Farmers Association",
    year: "2025",
    shortDesc:
      "Creatio were engaged to design & develop a new website for NSW Farmers Association, Australia's largest state farming organisation.",
    longDesc:
      "Creatio were engaged to design & develop a new website for NSW Farmers Association. This included UX research, UI design, content restructure, and a fully responsive build.",
    imageSrc: imageOne,
    popupImages: [
      "https://www.creatio.com.au/media/NSW-Portfolio2.webp",
      "https://www.creatio.com.au/media/US-Design.webp",
      "https://www.creatio.com.au/media/Aerosweep.webp",
      "https://www.creatio.com.au/media/ByLawyers.webp",
    ],
  },
  {
    id: "aerosweep",
    name: "Aerosweep",
    year: "2025",
    shortDesc:
      "Aerosweep have been designing & manufacturing industry leading surface sweeping solutions since 1994. They chose Creatio to design & develop their new website.",
    longDesc:
      "AeroSweep required a modern product-focused website to highlight their aviation technologies for global buyers.",
    imageSrc: imageTwo,
    popupImages: [
      "https://www.creatio.com.au/media/Aerosweep.webp",
      "https://www.creatio.com.au/media/ByLawyers.webp",
      "https://www.creatio.com.au/media/NSW-Portfolio2.webp",
      "https://www.creatio.com.au/media/US-Design.webp"],
  },
  {
    id: "usyd-open-day",
    name: "USYD Open Day",
    year: "2025",
    shortDesc: "Creatio continued their 10+ year partnership with the University of Sydney, creating the website for their annual Open Day event for 2025.",
    longDesc:
      "We helped Sydney Uni refine their user journeys and improve UX layers across multiple research portal touchpoints.",
    imageSrc: imageThree,
    popupImages: [
      "https://www.creatio.com.au/media/US-Design.webp",
      "https://www.creatio.com.au/media/Aerosweep.webp",
      "https://www.creatio.com.au/media/ByLawyers.webp",
      "https://www.creatio.com.au/media/NSW-Portfolio2.webp",]
  },
  {
    id: "by-lawyers",
    name: "By Lawyers UK",
    year: "2025",
    shortDesc:
      "We developed a new web platform for By Lawyers UK, the UK's leading publisher of online practical legal forms, guides and precedents.",
    longDesc:
      "By Lawyers needed an organised content design system and a modern digital reading experience for legal practitioners.",
    imageSrc: imageFour,
    popupImages: [
      "https://www.creatio.com.au/media/Aerosweep.webp",
      "https://www.creatio.com.au/media/US-Design.webp",
      "https://www.creatio.com.au/media/ByLawyers.webp",
      "https://www.creatio.com.au/media/NSW-Portfolio2.webp",]
  },
];

export default function RecentProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative xl:h-screen overflow-hidden">

      {/* BG IMAGE */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start">
        <Image
          src={love}
          alt=""
          priority
          className="h-full w-auto object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative app-container flex h-full flex-col gap-10 xl:py-20 xl:flex-row xl:items-center">

        {/* LEFT TEXT */}
        <div className="xl:w-4/12 text-center xl:text-left">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-[40px]">
            Recent projects
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            We have designed, developed, and delivered projects for hundreds of
            clients, both large and small. Here’s some we completed recently.
          </p>

          <a
            href="/work"
            className="mt-8 inline-flex items-center rounded-full bg-[#0dbfef] px-7 lg:px-10 py-2.5 lg:py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#2E2E2E]"
          >
            See our work
          </a>
        </div>

        {/* RIGHT PROJECT GRID */}
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            const hasPadding = index === 0 || index === 2;

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`
          group relative cursor-pointer overflow-hidden rounded
          ${hasPadding ? "xl:pt-5" : ""}
        `}
              >
                {/* CARD IMAGE */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* HOVER OVERLAY */}
                <div
                  className={`
            absolute
            ${hasPadding ? "top-5" : "top-0"}   /* overlay starts after padding */
            left-0 right-0 bottom-0
            bg-[#0DBFEF] bg-opacity-0 group-hover:bg-opacity-90
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            flex flex-col items-center justify-center
            text-white p-4 text-center
          `}
                >
                 <div className="max-w-5/6 space-y-4">
                   <h3 className="text-lg lg:text-[24px] font-medium">{project.name}</h3>
                  <p className="text-base lg:text-lg font-normal mt-2">{project.year}</p>
                  <p className="text-sm font-normal tracking-wide mt-2">{project.shortDesc}</p>
                  <FaSearchPlus className="h-6 w-6 text-center mx-auto"  />
                 </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* POPUP MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
