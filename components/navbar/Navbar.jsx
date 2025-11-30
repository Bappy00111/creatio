"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);        // mobile full menu
  const [servicesOpen, setServicesOpen] = useState(false); // mobile services accordion

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* ========= TOP BAR (COMMON) ========= */}
      <div className="app-container lg:pt-14 lg:pb-4 ">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
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

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:space-x-6">
              <li>
                <Link
                  href="/"
                  className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"
                >
                  Home
                </Link>
              </li>

              {/* desktop services dropdown */}
              <li className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"
                >
                  <span>Services</span>
                  <span className="inline-flex h-4 w-4">
                    <IoIosArrowDown />
                  </span>
                </button>

                <ul
                  className="
                    invisible absolute left-0 top-full mt-3 w-64
                    rounded-md border border-slate-100 bg-white py-4 shadow-lg
                    opacity-0 transition-all duration-150 ease-out
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-1
                    space-y-5 z-10
                  "
                >
                  <li>
                    <Link
                      href="/app-development/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/web-development/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ux-ui-design/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      UX / UI Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brand-identity-design/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      Brand &amp; Identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/startup-development/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      Startup Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/print-events-design/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      Print &amp; Events Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/python-django/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      Python / Django
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shopify-hydrogen/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      Shopify / Hydrogen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aws-amazon-web-services/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    >
                      AWS Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-services/"
                      className="block px-4 text-sm lg:text-base text-slate-700 hover:bg-slate-50 hover:text-sky-600"
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
                  className="inline-block text-sm lg:text-base font-normal hover:text-[#0DBFEF] border-b-[3px] border-transparent hover:border-[#0DBFEF] pb-1"
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

          {/* MOBILE HAMBURGER (only icon; full menu নিচে) */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center gap-1 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
          >
            <span className="block h-0.5 w-6 bg-slate-800" />
            <span className="block h-0.5 w-6 bg-slate-800" />
            <span className="block h-0.5 w-6 bg-slate-800" />
          </button>
        </div>
      </div>

      {/* ============ MOBILE FULL-SCREEN MENU ============ */}
      <div
        className={`
          fixed inset-0 z-50 bg-white/95 backdrop-blur
          transition-opacity duration-200 ease-out
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          md:hidden
        `}
      >
        <div className="app-container pt-4">
          {/* overlay er top row: logo + X icon */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Image
                src="https://www.creatio.com.au/static/images/img/logo-black.svg"
                alt="creatio logo"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
              className=""
            >
              <IoMdClose className="h-6 lg:h-14 w-6 lg:w-14 text-slate-900" />
            </button>
          </div>

          {/* menu items */}
          <nav className="mt-6">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="inline-block text-base font-normal"
                >
                  Home
                </Link>
              </li>

              {/* mobile services accordion */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-base font-normal"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <span
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </button>

                <ul
                  className={`
                    mt-2 space-y-2 overflow-hidden text-sm
                    transition-all duration-200 ease-out
                    ${
                      servicesOpen
                        ? "max-h-[700px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <li>
                    <Link
                      href="/app-development/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/web-development/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ux-ui-design/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      UX / UI Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brand-identity-design/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      Brand &amp; Identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/startup-development/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      Startup Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/print-events-design/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      Print &amp; Events Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/python-django/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      Python / Django
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shopify-hydrogen/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      Shopify / Hydrogen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aws-amazon-web-services/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      AWS Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-services/"
                      onClick={closeMenu}
                      className="block py-1 text-slate-700"
                    >
                      + All Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/about/"
                  onClick={closeMenu}
                  className="inline-block text-base font-normal"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/clients/"
                  onClick={closeMenu}
                  className="inline-block text-base font-normal"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/work/"
                  onClick={closeMenu}
                  className="inline-block text-base font-normal"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  onClick={closeMenu}
                  className="inline-block text-base font-normal"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
