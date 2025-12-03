// components/ServicesAndCTASection.jsx
import Image from "next/image";
import love from "../../public/home-image/love.svg";
import Link from "next/link";

const services = [
  {
    id: "app-development",
    title: "App Development",
    iconSrc: "https://www.creatio.com.au/media/app_XrWfQqL.svg",
    link: "/app-development/",
  },
  {
    id: "web-development",
    title: "Web Development",
    iconSrc: "https://www.creatio.com.au/media/web-dev_U8j7UvJ.svg",
    link: "/web-development/",
  },
  {
    id: "ux-ui-design",
    title: "UX / UI Design",
    iconSrc: "https://www.creatio.com.au/media/ui-design_VMSlQDu.svg",
    link: "/ux-ui-design/",
  },
  {
    id: "brand-identity",
    title: "Brand & Identity",
    iconSrc: "https://www.creatio.com.au/media/branding_g7hS2Z5.svg",
    link: "/brand-identity-design/",
  },
  {
    id: "startup-development",
    title: "Startup Development",
    iconSrc: "https://www.creatio.com.au/media/startup_PsD7U8p.svg",
    link: "/startup-development/",
  },
  {
    id: "print-events",
    title: "Print & Events Design",
    iconSrc: "https://www.creatio.com.au/media/print.svg",
    link: "/print-events-design/",
  },
  {
    id: "python-django",
    title: "Python / Django",
    iconSrc: "https://www.creatio.com.au/media/django-python-new.svg",
    link: "/python-django/",
  },
  {
    id: "shopify-hydrogen",
    title: "Shopify / Hydrogen",
    iconSrc: "https://www.creatio.com.au/media/shopify-new.svg",
    link: "/shopify-hydrogen/",
  },
  {
    id: "aws-development",
    title: "AWS Development",
    iconSrc: "https://www.creatio.com.au/media/aws-new.svg",
    link: "/aws-amazon-web-services/",
  },
];


const ctaButtons = [
  {
    id: "request-quote",
    label: "Request a quote",
    href: "/quote",
    variant: "primary",
  },
  {
    id: "get-in-touch",
    label: "Get in touch",
    href: "/contact",
    variant: "outline",
  },
];

export default function ServicesAndCTASection() {
  return (
    <section className="bg-white py-20">
      <div className="app-container text-center">
        {/* Heading */}
        <h2 className="text-2xl font-medium text-slate-900 md:text-3xl xl:text-[40px]">
          Australian mobile app and web developers ready to help you with...
        </h2>

        {/* Services grid */}
        <div className="mt-12 grid gap-10 grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <Link href={service.link} key={service.id} className="flex flex-col items-center text-center group" >
              <div

              >
                {/* image wrapper */}
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
                      src={service.iconSrc}
                      alt={service.title}
                      width={150}
                      height={150}
                      className="object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base xl:text-[18px] font-normal text-slate-800 transition-colors duration-300 group-hover:text-[#0dbfef]">
                  {service.title}
                </p>
              </div>
            </Link>
          ))}
        </div>


        {/* CTA section */}
        <div className="mt-16">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-medium text-slate-900">
            Have you got a project or idea?
          </p>

          <div className="mt-6 lg:mt-10 flex flex-wrap items-center justify-center gap-4">
            {ctaButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.href}
                className={`rounded-full border px-6 lg:px-10 py-4 text-sm font-semibold transition
                ${btn.variant === "primary"
                    ? " bg-[#0dbfef] text-white hover:bg-[#2E2E2E]"
                    : "border-[#0dbfef] text-[#0dbfef] hover:bg-sky-50"
                  }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
