"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Image from "next/image";

const words = [
  "create",
  "build",
  "scale",
  "code",
  "design",
  "develop",
  "launch",
  "support",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // simple rotation: every 2s word change
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];

  return (
    <div className="py-16 md:py-24">
      <div className="app-container md:text-center">
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
          We{" "}
          <ReactTyped
            strings={["Developer", "Designer", "Freelancer"]}
            typeSpeed={150}
            backSpeed={150}
            className="text-[#0dbfef]"
            loop
          />
          <span>apps &amp; websites</span>
        </h1>

        {/* Paragraph */}
        <p className="mt-4 text-sm md:text-base lg:text-[18px] text-[#212121]  font-medium md:max-w-5xl mx-auto tracking-wide leading-normal hidden md:block">
          Creatio is a multi-award winning design &amp; development studio based
          in Sydney and Hobart. We specialise in building high-quality mobile
          apps, websites, and software.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/quote-request/"
            className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm md:text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
          >
            Request a quote
          </Link>
        </div>
      </div>

      {/* <Image src="" alt="" /> */}
    </div>
  );
}
