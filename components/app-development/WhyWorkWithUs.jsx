import Link from "next/link";
import one from '../../public/app-development/icon-one.svg'
import two from '../../public/app-development/icon-two.svg'
import three from '../../public/app-development/icon-three.svg'
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";


export default function WhyWorkWithUs() {
  // data/whyWorkWithUs.ts
  const whyWorkWithUs = [
    {
      id: 'smooth-process',
      title: 'A smooth process',
      description:
        "Lots of companies do what we do, but we think you’ll really like working with us. From the earliest stages of your project all the way through until launch and beyond, you can count on us.",
      linkLabel: 'Take a look at how we work',
      linkHref: '/how-we-work',
      icon: one,
    },
    {
      id: 'happy-clients',
      title: 'Lots of happy clients',
      description:
        "We’ve worked hundreds of clients from all industries – including startups, government, finance, media, ecommerce, education, fashion, nonprofit and agriculture to name a few.",
      linkLabel: 'See what our clients say',
      linkHref: '/clients',
      icon: two,
    },
    {
      id: 'years-of-experience',
      title: 'Years of experience',
      description:
        "For over 17 years we’ve been designing, developing, deploying and supporting digital products for clients around Australia and the world. How can we help you?",
      linkLabel: 'Learn more about us',
      linkHref: '/about',
      icon: three,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden py-20">


      <div className="relative app-container">
        <h2 className="text-center text-4xl font-semibold tracking-wide text-[#212121] sm:text-[40px]">
          Why work with us
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {whyWorkWithUs.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center rounded bg-white/95 px-10 pt-12 pb-10 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
                <span className="text-3xl" aria-hidden="true">
                  <Image height={60} width={60} src={item.icon} alt="" />
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-base tracking-wide leading-6 font-normal text-[#4c4c4c]">
                {item.description}
              </p>

              <Link
                href={item.linkHref}
                className="mt-8 inline-flex items-center text-base font-medium text-[#0dbfef] "
              >
                {item.linkLabel}
                <span aria-hidden="true" className="ml-1 text-lg">
                <MdArrowForwardIos />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
