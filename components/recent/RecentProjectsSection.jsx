// components/RecentProjectsSection.jsx
import Image from "next/image";
import love from "../../public/home-image/love.svg";
import imageOne from '../../public/home-image/img-one.png'
import imagetwo from '../../public/home-image/image-two.jpeg'
import imagethree from '../../public/home-image/image-three.png'
import imageFour from '../../public/home-image/image-four.jpeg'

const projects = [
  {
    id: "nsw-farmers",
    name: "NSW Farmers",
    imageSrc: imageOne,
  },
  {
    id: "aerosweep",
    name: "Aerosweep",
    imageSrc: imagetwo,
  },
  {
    id: "sydney-uni",
    name: "The University of Sydney",
    imageSrc: imagethree,
  },
  {
    id: "by-lawyers",
    name: "By Lawyers",
    imageSrc: imageFour,
  },
];

export default function RecentProjectsSection() {
  return (
    <section className="relative xl:h-screen overflow-hidden">
      {/* FULL LOVE IMAGE AS BACKGROUND, CENTERED VERTICALLY, STARTING LEFT */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start">
        <Image
          src={love}
          alt=""
          priority
          className="h-full w-auto object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative app-container flex h-full flex-col gap-10 py:py-10 xl:py-20 md:flex-row md:items-center">
        {/* LEFT CONTENT */}
        <div className="md:w-5/12 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-[40px]">
            Recent projects
          </h2>

          <p className="mt-4 text-sm leading-relaxed font-normal text-slate-600 md:text-base">
            We have designed, developed, and delivered projects for hundreds of
            clients, both large and small. Here&apos;s some we completed
            recently.
          </p>

          <a
            href="/work"
            className="mt-8 inline-flex items-center rounded-full bg-[#0dbfef] px-7 lg:px-10 py-2.5 lg:py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#2E2E2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0dbfef]/70 focus-visible:ring-offset-2"
          >
            See our work
          </a>
        </div>

        {/* RIGHT GRID */}
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
