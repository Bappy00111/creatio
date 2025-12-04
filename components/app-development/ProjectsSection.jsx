"use client";

import { useState } from "react";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import ProjectModal from "../recent/ProjectModal";


export default function ProjectsSection({
  title,
  projects,
  seeMoreHref,
  seeMoreLabel,
  ctaTitle,
  primaryCta,
  secondaryCta,
}) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={`${title ? 'pt-20' : 'pt-5'} pb-20 bg-white`}>
      <div className="app-container text-center">

        {/* Heading */}
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-[#212121] sm:text-[40px]">
            {title}
          </h2>
        )}

        {/* GRID */}
        <div className="mt-10 grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded overflow-hidden shadow-lg shadow-slate-300/50 h-[300px]"
            >
              {/* IMAGE */}
              <div className="relative aspect-square">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-[#0DBFEF]  opacity-0 group-hover:opacity-100
                  transition duration-300 flex flex-col items-center justify-center
                  text-white p-4 text-center space-y-3
                "
              >
                <div className="max-w-5/6 space-y-4">
                   <h3 className="text-lg lg:text-[24px] font-medium">{project.name}</h3>
                  <p className="text-base lg:text-lg font-normal mt-2">{project.year}</p>
                  <p className="text-sm font-normal tracking-wide mt-2">{project.shortDesc}</p>
                  <FaSearchPlus className="h-6 w-6 text-center mx-auto"  />
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        {seeMoreLabel && (
          <div className="mt-10">
            <a
              href={seeMoreHref}
              className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
            >
              {seeMoreLabel}
            </a>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-[40px] font-semibold text-[#212121]">
            {ctaTitle}
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
            >
              {primaryCta.label}
            </a>

            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-3xl text-[#0dbfef] hover:text-white px-6 py-3 text-sm lg:text-base font-medium shadow-sm hover:bg-[#2E2E2E] transition"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
