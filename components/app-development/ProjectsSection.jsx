// components/AppProjectsSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection({
  title,
  projects,
  seeMoreHref,
  seeMoreLabel,
  ctaTitle,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className={`${title ? 'pt-20' : 'pt-5'} pb-20  bg-white`}>
      <div className="app-container text-center">
        {/* Heading */}
        {title && <h2 className="text-3xl font-semibold tracking-tight text-[#212121] sm:text-[40px]">
          {title}
        </h2>}

        {/* 3 × 3 grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id || index}
              href={project.href}
              className="group block overflow-hidden rounded shadow-lg shadow-slate-300/50"
            >
              <div className="relative aspect-square">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* "See more projects" button */}
        {seeMoreLabel && <div className="mt-10">
          <Link
            href={seeMoreHref}
            className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm md:text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
          >
            {seeMoreLabel}
          </Link>
        </div>}

        {/* CTA block */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-[40px] font-semibold text-[#212121]">
            {ctaTitle}
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm md:text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-3xl text-[#0dbfef] hover:text-white px-6 py-3 text-sm md:text-sm lg:text-base font-medium shadow-sm hover:bg-[#2E2E2E] transition"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
