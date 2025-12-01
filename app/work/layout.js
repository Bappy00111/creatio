'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const tabs = [
  { slug: '', label: 'All projects', path: '/work' },
  { slug: 'apps', label: 'Apps', path: '/work/apps' },
  { slug: 'websites', label: 'Websites', path: '/work/websites' },
  { slug: 'ux-ui', label: 'UX / UI', path: '/work/ux-ui' },
  { slug: 'brand-design', label: 'Branding', path: '/work/brand-design' },
  { slug: 'startups', label: 'Startups', path: '/work/startups' },
  { slug: 'print', label: 'Print', path: '/work/print' },
]

// prottek route er jonno header + bottom text
const pageTexts = {
  '/work': {
    heading: 'Work we’ve done',
    description:
      'Creatio has designed & built solutions for a range of clients, from startups to multinational corporations. Check out some of our recent projects below.',
    bottom: 'Showing all projects across every category.',
    image: 'https://www.creatio.com.au/media/work-all.svg',
  },
  '/work/apps': {
    heading: 'Mobile apps',
    description:
      'Creatio have been building mobile apps since the very first smartphones. We make native apps for iPhone, Android, iPad, iOS, WatchOS and tvOS to name a few.',
    bottom: 'Only app projects are displayed below.',
     image: 'https://www.creatio.com.au/media/work-mobile-apps.svg',
  },
  '/work/websites': {
    heading: 'Websites & apps',
    description: 'We design and develop websites and scalable web applications using modern frameworks & technology. Check out some of our website projects below.',
    bottom: 'Only website projects are displayed below.',
    image: 'https://www.creatio.com.au/media/work-websites.svg',
  },
  '/work/ux-ui': {
    heading: 'UX & UI',
    description: 'User experience (UX) and user interface design (UI) are a major part of every project that we work on. Check out some of our UX/UI work below.',
    bottom: 'Only UX / UI projects are displayed below.',
    image: 'https://www.creatio.com.au/media/work-ui-ux.svg',
  },
  '/work/brand-design': {
    heading: 'Brand design',
    description: 'We design custom logos and full brand identity design that includes style guides, business cards & stationery. Check out some of our branding work below.',
    bottom: 'Only branding projects are displayed below.',
    image: 'https://www.creatio.com.au/media/work-branding.svg',
  },
  '/work/startups': {
    heading: 'Startup projects',
    description: "Creatio has helped many startups turn their big ideas into a reality. We've designed, developed and launched dozens of startup projects. Check out some below.",
    bottom: 'Only startup focused work is displayed below.',
    image: 'https://www.creatio.com.au/media/work-startup.svg',
  },
  '/work/print': {
    heading: 'Print & Events Design',
    description: 'We cover all your print design needs including company decals, signage, events, promotional and exhibition conceptual design.',
    bottom: 'Only print projects are displayed below.',
    image: 'https://www.creatio.com.au/media/work-print_b8SjVH3.svg',
  },
}

export default function WorkLayout({ children }) {
  const pathname = usePathname()
  const currentText = pageTexts[pathname] || pageTexts['/work']

  return (
    <div className="app-container">
      {/* ==== HEADER: screenshot moto layout ==== */}
      <header className="md:h-[70vh] flex flex-col-reverse md:flex-row items-center md:items-center md:gap-14 py-10">
        {/* left side text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-[50px] font-semibold text-slate-900 leading-tight">
            {currentText.heading}
          </h1>

          <p className="mt-6 text-sm lg:text-base font-normal  text-[#4c4c4c]">
            {currentText.description}
          </p>
        </div>

        {/* right side illustration image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={currentText.image} // nijer image path
            alt="Work illustration"
            width={560}
            height={320}
            className="w-full max-w-xl h-auto"
            priority
          />
        </div>
      </header>

      {/* ==== NAV TABS – always center ==== */}
      <nav className="mt-2 mb-4 flex flex-wrap items-center justify-between gap-3 max-w-5xl mx-auto">
        {tabs.map((tab) => {
          const href = tab.slug ? `/work/${tab.slug}` : '/work'
          const isActive = pathname === href

          const base =
            'px-5 py-2 lg:py-3 lg:px-6 rounded-full text-sm md:text-base font-medium transition'
          const active = 'bg-[#0dbfef] text-white shadow-md'
          const inactive = 'text-sky-500 hover:bg-[#0dbfef] hover:text-white'

          return (
            <Link key={tab.label} href={href} className={`${base} ${isActive ? active : inactive}`}>
              {tab.label}
            </Link>
          )
        })}
      </nav>

      {/* nav er nich-er small text (route onujai change) */}
      {/* <p className="mb-8 text-center text-xs md:text-sm text-slate-400">{currentText.bottom}</p> */}

      {/* main content (grid etc.) */}
      {children}
    </div>
  )
}
