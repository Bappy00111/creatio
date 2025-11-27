// app/components/WhatWeDoSection.tsx
import Image from "next/image";
import love from "../../public/home-image/love.svg";


const SERVICES = [
  {
    id: "app-dev",
    title: "App development",
    description:
      "We design & develop mobile apps for iPhone, iPad, and Android devices. Our apps have been downloaded over 500,000+ times!",
    icon: "https://www.creatio.com.au/media/app_XrWfQqL.svg",
  },
  {
    id: "web-dev",
    title: "Web development",
    description:
      "We build responsive websites and web applications, from simple sites to online stores and social networks.",
    icon: "https://www.creatio.com.au/media/web-dev_U8j7UvJ.svg",
  },
  {
    id: "ux-ui",
    title: "UX / UI design",
    description:
      "We provide UX & UI design for all our projects, or as a standalone service – wireframes, mockups, prototypes, and more.",
    icon: "https://www.creatio.com.au/media/ui-design_VMSlQDu.svg",
  },
  {
    id: "brand-identity",
    title: "Brand identity design",
    description:
      "We design custom logos and brand identity for companies just starting out or in need of a refresh.",
    icon: "https://www.creatio.com.au/media/branding_g7hS2Z5.svg",
  },
  {
    id: "startups",
    title: "Working with startups",
    description:
      "We love working with startups, helping them turn ideas into reality – whether it’s a new app or a web platform.",
    icon: "https://www.creatio.com.au/media/startup_PsD7U8p.svg",
  },
  {
    id: "games",
    title: "Web & mobile games",
    description:
      "We design & develop games and gamification campaigns for online and mobile audiences.",
    icon: "https://www.creatio.com.au/media/games_iUpkd22.svg",
  },
  {
    id: "print",
    title: "Print & events design",
    description:
      "We cover all your print design needs including signage, events, promotional and exhibition conceptual design.",
    icon: "https://www.creatio.com.au/media/print.svg",
  },
  {
    id: "python-django",
    title: "Python / Django",
    description:
      "We build scalable web apps and backend systems using Python and the Django web framework.",
    icon: "https://www.creatio.com.au/media/django-python-new.svg",
  },
  {
    id: "shopify",
    title: "Shopify / Hydrogen",
    description:
      "We leverage Shopify's Hydrogen framework to build custom storefronts tailored to meet the unique needs of each merchant.",
    icon: "https://www.creatio.com.au/media/shopify-new.svg",
  },
  {
    id: "aws-development",
    title: "AWS development",
    description:
      "We have a wealth of knowledge and experience hosting and maintaining cloud native solutions on Amazon Web Services (AWS).",
    icon: "https://www.creatio.com.au/media/aws-new.svg",
  },
];


export function WhatWeDoSection() {
  return (
    <section className="bg-white py-16">
      <div className="app-container">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#212121] sm:text-[40px]">
          What we do
        </h2>

        {/* Grid */}
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex items-center gap-6"
            >
              {/* Icon */}
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
                    src={service.icon}
                    alt={service.title}
                    width={170}
                    height={170}
                    className="object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#212121]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-[#4c4c4c]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
