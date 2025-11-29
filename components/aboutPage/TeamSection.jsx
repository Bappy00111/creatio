// app/components/TeamSection.jsx
import Image from "next/image";

const TEAM_MEMBERS = [
  { id: "mitchell", name: "Mitchell", role: "Director", avatar: "https://www.creatio.com.au/static/images/img/mitchell.svg" },
  { id: "davis", name: "Davis", role: "App Developer", avatar: "https://www.creatio.com.au/static/images/img/davis.svg" },
  { id: "matt", name: "Matt", role: "Project Manager", avatar: "https://www.creatio.com.au/static/images/img/matt.svg" },
  { id: "ashraf", name: "Ashraf", role: "Web Developer", avatar: "https://www.creatio.com.au/static/images/img/ashraf.svg" },
  { id: "daniel", name: "Daniel", role: "Technical Manager", avatar: "https://www.creatio.com.au/static/images/img/daniel.svg" },

  { id: "sandeep", name: "Sandeep", role: "App Developer", avatar: "https://www.creatio.com.au/static/images/img/sandeep.svg" },
  { id: "mina", name: "Mina", role: "Backend Developer", avatar: "https://www.creatio.com.au/static/images/img/mina.svg" },
  { id: "nat", name: "Nat", role: "Web Developer", avatar: "https://www.creatio.com.au/static/images/img/nat.svg" },
  { id: "ameer", name: "Ameer", role: "Software Engineer", avatar: "https://www.creatio.com.au/static/images/img/ameer.svg" },
  { id: "juan", name: "Juan", role: "UX/UI Designer", avatar: "https://www.creatio.com.au/static/images/img/juan.svg" },

  { id: "ahmed", name: "Ahmed", role: "Backend Developer", avatar: "https://www.creatio.com.au/static/images/img/ahmed.svg" },
  { id: "stefan", name: "Stefan", role: "Frontend Developer", avatar: "https://www.creatio.com.au/static/images/img/stefan.svg" },
  { id: "hans", name: "Hans", role: "Web Designer", avatar: "https://www.creatio.com.au/static/images/img/hans.svg" },

  // last “We’re Hiring” card
  { id: "hiring", name: "We’re Hiring", role: "View Roles", isHiring: true },
];

export default function TeamSection() {
  return (
    <section className=" py-16">
      <div className="app-container">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[40px]">
            Meet the team
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base font-normal">
            Creatio is an experienced team of coders &amp; creatives that you&apos;ll love working with.
          </p>
        </header>

        {/* Team grid */}
        <div className="mt-12 grid gap-x-10 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              {/* Avatar / Hiring circle */}
              {member.isHiring ? (
                <button className="flex h-[100px]  lg:h-[200px] w-[100px] lg:w-[200px] items-center justify-center rounded-full bg-[#0DBFEF] text-4xl font-light text-white shadow-md transition hover:bg-[#09A9D4]">
                  +
                </button>
              ) : (
                <div className="relative h-[100px]  lg:h-[200px] w-[100px] lg:w-[200px] overflow-hidden rounded-full">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h3 className="mt-4 text-base lg:text-[20px] font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm md:text-base text-[#7b7b7b]">{member.role}</p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl lg:text-[40px] font-semibold text-slate-900">
            Interested in working with us?
          </h3>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 ">
            <button className="inline-flex items-center rounded-full bg-[#0DBFEF] px-8 py-2.5 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-[#38373B] cursor-pointer">
              Request a quote
            </button>
            <button className="inline-flex items-center rounded-full border border-[#0DBFEF] hover:border-0 px-8 py-2.5 text-sm font-semibold text-[#0DBFEF] hover:text-white hover:bg-[#38373B] cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
