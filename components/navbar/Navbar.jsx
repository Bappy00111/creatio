"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="app-container lg:pt-14 lg:pb-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo + mobile menu button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex items-center">
              <Image
                src="https://www.creatio.com.au/static/images/img/logo-black.svg"
                alt="creatio logo"
                width={140}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* mobile menu button */}
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center gap-1 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="block h-0.5 w-6 bg-slate-800" />
              <span className="block h-0.5 w-6 bg-slate-800" />
              <span className="block h-0.5 w-6 bg-slate-800" />
            </button>
          </div>

          {/* Nav links */}
          <nav
            className={`${menuOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
          >
            <ul className="mt-4 flex flex-col items-start gap-2 md:mt-0 md:flex-row md:items-center md:gap-6 lg:space-x-6">
              <li>
                <Link
                  href="/"
                  className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"

                >
                  Home
                </Link>
              </li>

              {/* Services dropdown */}
              <li className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"
                >
                  <span>Services</span>
                  <span className="inline-flex h-4 w-4">
                    <IoIosArrowDown />

                </span>
              </button>

              <ul
                className={`mt-2 space-y-1 rounded-md border border-slate-100 bg-white py-2 shadow-lg
                md:absolute md:left-0 md:mt-3 md:w-56
                ${servicesOpen ? "block" : "hidden"}`}
              >
                <li>
                  <Link
                    href="/app-development/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-development/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ux-ui-design/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    UX / UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brand-identity-design/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    Brand &amp; Identity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/startup-development/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    Startup Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/print-events-design/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    Print &amp; Events Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-django/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    Python / Django
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shopify-hydrogen/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    Shopify / Hydrogen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aws-amazon-web-services/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    AWS Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/"
                    className="block px-4 py-1 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  >
                    + All Services
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/about/"
                className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"

              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/clients/"
                className="text-sm lg:text-base font-normal  hover:text-[#0DBFEF] border-b-3 border-transparent hover:border-[#0DBFEF]" className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                href="/work/"
                className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"

              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"

              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </section >
  );
}
