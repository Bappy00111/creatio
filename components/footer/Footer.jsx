'use client';

import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const latestNews = [
  { label: 'Creatio Turns 18', href: '/news/creatio-turns-18' },
  { label: 'Cell Care on The Project', href: '/news/cell-care-on-the-project' },
  { label: 'Creatio wins mobile app award', href: '/news/mobile-app-award' },
  { label: 'See more news >', href: '/news' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Clients', href: '/clients' },
  { label: 'Tech', href: '/tech' },
  { label: 'News', href: '/news' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'Facebook', href: '/facebook', icon: <FaFacebookF /> },
  { label: 'LinkedIn', href: '/linkedin', icon: <FaLinkedinIn /> },
  { label: 'Instagram', href: '/instagram', icon: <FaInstagram /> },
  { label: 'Twitter (X)', href: '/twitter', icon: <FaXTwitter /> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#262626] text-gray-200">
      <div className="app-container">
        {/* top area */}
        <div className="md:grid gap-10 py-12 lg:py-20 md:grid-cols-3 text-center md:text-left">
          {/* logo + hiring */}
          <div className="col-span-1 flex flex-col items-center md:items-start gap-6">
            <Image
              height={50}
              width={170}
              src="https://www.creatio.com.au/static/images/img/logo-white.svg"
              alt="Creatio logo"
              className="block"
            />

            <Link
              href="/careers"
              className="flex items-center justify-center gap-3 rounded-full group bg-white hover:bg-[#0dbfef] px-6 py-2 text-sm font-medium hover:text-gray-100 transition text-gray-900"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-black text-base">
                +
              </span>
              <span>We&apos;re hiring</span>
            </Link>
          </div>

          {/* 3 column area (news / contact / social) */}
          <div className="col-span-2 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between pt-8 md:pt-0">
            {/* latest news */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-base lg:text-[20px] font-semibold tracking-wide">
                Latest news
              </h3>
              <ul className="mt-4 space-y-2 lg:space-y-4 text-sm font-normal">
                {latestNews.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-300 transition hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-base lg:text-[20px] font-semibold tracking-wide">
                Contact
              </h3>
              <ul className="mt-4 space-y-2 lg:space-y-4 text-sm font-normal">
                <li>
                  <Link
                    href="mailto:hello@creatio.com.au"
                    className="transition hover:text-white hover:underline"
                  >
                    hello@creatio.com.au
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:1300730857"
                    className="transition hover:text-white hover:underline"
                  >
                    Call 1300 730 857
                  </Link>
                </li>
                <li className="text-gray-300">North Sydney, NSW</li>
                <li className="text-gray-300">Hobart, TAS</li>
              </ul>
            </div>

            {/* follow us */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-base lg:text-[20px] font-semibold tracking-wide">
                Follow us
              </h3>
              <ul className="mt-4 space-y-3 lg:space-y-5 text-sm font-normal">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-center md:justify-start gap-2 transition ${item.label === "Instagram"
                          ? "hover:text-[#e1306c]"
                          : "hover:text-[#0dbfef]"
                        }`}
                    >
                      <span className="text-lg">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-gray-700 py-4 md:py-10">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white text-center sm:flex-row sm:text-sm sm:text-left">
            <p>© Creatio Pty Ltd 2007 - {currentYear}</p>

            <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-gray-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
