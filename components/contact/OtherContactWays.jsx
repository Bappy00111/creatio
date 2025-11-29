// components/OtherContactWays.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import love from "../../public/home-image/love.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ==== DATA (array of objects) ====
const contactMethods = [
  {
    id: 'phone',
    title: 'By phone',
    imageSrc: 'https://www.creatio.com.au/static/images/img/contact-phone.svg',
    imageAlt: 'Contact us by phone',
    kind: 'button',
    buttonLabel: '1300 730 857',
    href: 'tel:1300730857',
  },
  {
    id: 'in-person',
    title: 'In person',
    imageSrc: 'https://www.creatio.com.au/static/images/img/contact-map.svg',
    imageAlt: 'Visit us in person',
    kind: 'button',
    buttonLabel: 'Visit us',
    href: '/contact#visit-us', // change to your map / location link
  },
  {
    id: 'social',
    title: 'Connect with us',
    imageSrc: 'https://www.creatio.com.au/static/images/img/contact-social.svg',
    imageAlt: 'Connect with us on social media',
    kind: 'social',
    socialLinks: [
      {
        id: 'facebook',
        label: 'Facebook',
        href: 'https://facebook.com/your-page',
        bgClass: 'bg-[#1877F2]',
        text: <FaFacebookF />,
      },
      {
        id: 'x',
        label: 'X',
        href: 'https://x.com/your-handle',
        bgClass: 'bg-black',
        text: <FaXTwitter />,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/your-company',
        bgClass: 'bg-[#0A66C2]',
        text: <FaLinkedinIn />,
      },
      {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://instagram.com/your-handle',
        bgClass: 'bg-[#E1306C]',
        text: <FaInstagram />,
      },
    ],
  },
];

// ==== COMPONENT ====
export default function OtherContactWays() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-medium text-slate-900 md:text-3xl xl:text-[40px]">
          Other ways to contact us
        </h2>

        <div className="mt-16 grid gap-16 md:grid-cols-3">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="flex flex-col items-center"
            >
              <div className="relative h-28 w-28 md:h-32 md:w-32 lg:h-[200px] lg:w-[200px]">
                {/* background love.svg */}
                <Image
                  src={love}
                  alt="Service background"
                  fill
                  className="pointer-events-none object-contain"
                />

                {/* top icon image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={method.imageSrc}
                    alt={method.imageAlt}
                    width={150}
                    height={150}
                    className="object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2"
                  />
                </div>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-slate-900">
                {method.title}
              </h3>

              {method.kind === 'button' ? (
                <Link
                  href={method.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-sky-400 px-10 py-3 text-sm lg:text-base font-normal text-bg-[#0dbfef] hover:text-white shadow-sm transition hover:bg-[#0dbfef]"
                >
                  {method.buttonLabel}
                </Link>
              ) : (
                <div className="mt-6 flex items-center gap-4">
                  {method.socialLinks.map((social) => (
                    <Link
                      key={social.id}
                      href={social.href}
                      aria-label={social.label}
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold text-white shadow-sm transition hover:opacity-90 ${social.bgClass}`}
                    >
                      {social.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
