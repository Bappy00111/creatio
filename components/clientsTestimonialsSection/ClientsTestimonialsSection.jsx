// components/ClientsTestimonialsSection.jsx
import Image from "next/image";

// নিজের ইমেজ গুলো public ফোল্ডার থেকে ইমপোর্ট করো
import podsLogo from "../../public/home-image/client-one.jpg";
import expoLogo from "../../public/home-image/client-two.jpg";
import twlLogo from "../../public/home-image/client-three.jpg";

const testimonials = [
  {
    id: "terry",
    name: "Terry Takouridis",
    company: "Pods Equity",
    logo: podsLogo,
    quote:
      "We have used Creatio extensively, and we keep going back. The team meet all of our core requirements. I highly recommend working with them.",
  },
  {
    id: "jamie",
    name: "Jamie Do",
    company: "Expo Freight",
    logo: expoLogo,
    quote:
      "Creatio offered guidance and suggestions based on their abundance of knowledge, which helped me adapt my business to the market.",
  },
  {
    id: "chris",
    name: "Chris Ross",
    company: "The Whisky List",
    logo: twlLogo,
    quote:
      "We are thrilled with the work Creatio did on our app. High quality, cost-effective and efficient, delivered on time and on budget.",
  },
];

export default function ClientsTestimonialsSection() {
  return (
    <section className="relative bg-white py-10 lg:py-20">
      {/* হালকা ব্যাকগ্রাউন্ড শেপ (ঐচ্ছিক) */}
      {/* <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#f3fbff]" />
      <div className="pointer-events-none absolute -right-40 top-24 h-72 w-72 rounded-full bg-[#f3fbff]" /> */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Our clients
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            We&apos;re an experienced team who you will love working with. But
            don&apos;t just take our word for it. See what some of our clients
            have to say.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center rounded bg-white p-8 text-center shadow"
            >
              {/* top: logo + name */}
              <div className="flex w-full items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <div className="text-left">
                  <p className="text-base lg:text-[18px] font-medium text-[#212121]">
                    {item.name}
                  </p>
                  <p className="text-xs lg:text-sm text-[#919197]">{item.company}</p>
                </div>
              </div>

              {/* quote icon */}
              <div className="mt-6 text-4xl leading-none text-slate-200">
                &ldquo;&rdquo;
              </div>

              {/* quote text */}
              <p className="mt-4 text-sm lg:text-base font-normal leading-relaxed text-[#38373b]">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center">
          <button className="mt-8 inline-flex items-center rounded-full cursor-pointer bg-[#0dbfef] px-7 lg:px-10 py-2.5 lg:py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#2E2E2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0dbfef]/70 focus-visible:ring-offset-2">see our clients</button>
        </div>
      </div>
    </section>
  );
}
