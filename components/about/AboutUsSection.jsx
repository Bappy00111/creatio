// components/AboutUsSection.jsx
import Image from "next/image";

// এই illustrationটা তুমি নিজের ফাইল অনুযায়ী path change করে নেবে
import aboutIllustration from "../../public/home-image/aboutIllustration.svg";
import one from '../../public/home-image/one.svg'
import two from '../../public/home-image/two.svg'
import three from '../../public/home-image/three.svg'
import four from '../../public/home-image/four.svg'
import five from '../../public/home-image/five.svg'
import six from '../../public/home-image/six.svg'
import seven from '../../public/home-image/seven.svg'
import eight from '../../public/home-image/eight.svg'
import nine from '../../public/home-image/nine.svg'
import ten from '../../public/home-image/ten.svg'
import eleven from '../../public/home-image/eleven.svg'
import twelve from '../../public/home-image/twelve.svg'
import therten from '../../public/home-image/threten.svg'

const teamMembers = [
  {
    id: "member-1",
    name: "Team member 1",
    avatarSrc:one ,
    bgColor: "#ffe26f",
  },
  {
    id: "member-2",
    name: "Team member 2",
    avatarSrc: two,
    bgColor: "#ff6f7d",
  },
  {
    id: "member-3",
    name: "Team member 3",
    avatarSrc: three,
    bgColor: "#a6d671",
  },
  {
    id: "member-4",
    name: "Team member 4",
    avatarSrc: four,
    bgColor: "#57b5ff",
  },
  {
    id: "member-5",
    name: "Team member 5",
    avatarSrc: five,
    bgColor: "#ff708f",
  },
  {
    id: "member-6",
    name: "Team member 6",
    avatarSrc: six,
    bgColor: "#a6d671",
  },
  {
    id: "member-7",
    name: "Team member 7",
    avatarSrc: seven,
    bgColor: "#72d0ff",
  },
  {
    id: "member-8",
    name: "Team member 8",
    avatarSrc: eight,
    bgColor: "#ff6f6f",
  },
  {
    id: "member-9",
    name: "Team member 9",
    avatarSrc: nine,
    bgColor: "#ffd36b",
  },
  {
    id: "member-10",
    name: "Team member 10",
    avatarSrc: ten,
    bgColor: "#b2e17c",
  },
  {
    id: "member-11",
    name: "Team member 11",
    avatarSrc: eleven,
    bgColor: "#ff9f6b",
  },
  {
    id: "member-12",
    name: "Team member 12",
    avatarSrc: twelve,
    bgColor: "#72d0ff",
  },
  {
    id: "member-13",
    name: "Team member 13",
    avatarSrc: therten,
    bgColor: "#ffe26f",
  },
  {
    id: "member-14",
    name: "Team member 14",
    avatarSrc: ten,
    bgColor: "#57b5ff",
  },
  {
    id: "hiring",
    name: one,
    isHiring: true,
    bgColor: "#0dbfef",
  },
];

export default function AboutUsSection() {
  return (
    <section className="bg-white py-20">
      <div className="app-container flex flex-col items-center gap-12 md:flex-row md:items-start">
        {/* LEFT ILLUSTRATION */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src={aboutIllustration}
            alt="Team working illustration"
            className="h-auto max-w-xl w-full"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-xl md:w-1/2 md:ml-auto">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            About us
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            For over 17 years Creatio have been building, launching &amp;
            supporting digital projects for clients around Australia and the
            world (even Arnhem Land). We&apos;re experienced, dedicated and
            always passionate about our work.{" "}
            <a href="/about" className="font-medium text-[#0dbfef]">
              Find out more
            </a>
          </p>

          {/* AVATAR GRID */}
          <div className="mt-10 grid grid-cols-4 gap-4 md:grid-cols-5">
            {teamMembers.map((member) =>
              member.isHiring ? (
                <div
                  key={member.id}
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full text-xs font-semibold text-white shadow-md md:h-20 md:w-20"
                  style={{ backgroundColor: member.bgColor }}
                >
                  <span className="text-xl leading-none">+</span>
                  <span className="mt-1">Hiring</span>
                </div>
              ) : (
                <div
                  key={member.id}
                  className="flex h-16 w-16 items-center justify-center rounded-full shadow-md md:h-20 md:w-20"
                  style={{ backgroundColor: member.bgColor }}
                >
                  <Image
                    src={member.avatarSrc}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="h-10 w-10 md:h-12 md:w-12 object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
