import Image from "next/image";
import Link from "next/link";
import one from '../../public/app-development/image-one.png'
import two from '../../public/app-development/image-two.png'
import three from '../../public/app-development/image-three.png'
import four from '../../public/app-development/image-four.jpeg'
import five from '../../public/app-development/image-five.jpeg'
import six from '../../public/app-development/image-six.jpeg'
import seven from '../../public/app-development/image-seven.jpeg'
import eight from '../../public/app-development/image-eight.jpeg'
import nine from '../../public/app-development/image-nine.jpeg'


export default function AppProjectsSection() {
  // data/appProjects.ts
  const appProjects = [
    {
      id: "asdtools",
      name: "ASD Tools",
      imageSrc: one,
      href: "#",
    },
    {
      id: "payc",
      name: "Payc",
      imageSrc: two,
      href: "#",
    },
    {
      id: "man-walk",
      name: "The Man Walk",
      imageSrc: three,
      href: "#",
    },
    {
      id: "things-to-do",
      name: "Things To Do",
      imageSrc: four,
      href: "#",
    },
    {
      id: "eat-smart",
      name: "Eat Smart Play Smart",
      imageSrc: five,
      href: "#",
    },
    {
      id: "devolver",
      name: "Devolver",
      imageSrc: six,
      href: "#",
    },
    {
      id: "drops",
      name: "Drops",
      imageSrc: seven,
      href: "#",
    },
    {
      id: "nsw-alerts",
      name: "NSW Incident Alerts",
      imageSrc: eight,
      href: "#",
    },
    {
      id: "my-bio-life",
      name: "My Bio Life",
      imageSrc: nine,
      href: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="app-container text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-[#212121] sm:text-[40px]">
          App development projects
        </h2>

        {/* 3 × 3 grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {appProjects.map((project) => (
            <Link
              key={project.id}
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
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm md:text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
          >
            See more projects
          </Link>
        </div>

        {/* CTA block */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-[40px] font-semibold text-[#212121]">
            Interested in working with us?
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm md:text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
            >
              Request a quote
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-3xl text-[#0dbfef] hover:text-white px-6 py-3 text-sm md:text-sm lg:text-base font-medium  shadow-sm hover:bg-[#2E2E2E] transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
