// app/page.tsx
import Image from "next/image";
import love from "../../public/home-image/love.svg";

export default function AppDevelopmentHome() {
  const services = [
    'iPhone apps',
    'Android apps',
    'iPad apps',
    'Swift and SwiftUI',
    'Kotlin development',
    'Progressive web apps',
  ];
  return (
    <div>
      <main className=" flex items-center">
        {/* background e love.svg, left theke dekhabe */}
        <section
          className="relative flex w-full  items-center bg-no-repeat bg-left bg-contain"
          style={{ backgroundImage: `url(${love.src})` }}
        >
          {/* app-container er moddhe sob content */}
          <div className="app-container flex flex-col gap-12 py-10 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT CONTENT */}
            <div className="w-full">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-[50px]">
                App Developers
              </h1>

              <p className="mt-6 text-base font-normal leading-relaxed text-[#4c4c4c]">
                Creatio have been building award winning mobile apps since the very first smartphones. We design & develop native apps for the iPhone, Android devices, iPad, iOS and macOS. Speak to us about your app project.
              </p>

              <button
                className="mt-8 inline-flex items-center rounded-full bg-[#0DBFEF] px-8 py-3 text-sm font-semibold text-white shadow-md transition
                         hover:bg-[#09A9D4] focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-[#0DBFEF] focus-visible:ring-offset-2"
              >
                Request a quote
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://www.creatio.com.au/static/images/img/work-mobile-apps.svg"
                  alt="Team working at computers"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <main className="">
        <section className="relative isolate overflow-hidden py-14">
          {/* Soft background circles */}


          <div className="relative mx-auto max-w-6xl px-4">
            <h1 className="text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-[40px]">
              App development services
            </h1>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service}
                  className="flex items-center gap-4 rounded-md bg-white/95 px-8 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 transition transform hover:-translate-y-1"
                >
                  {/* Green check icon */}
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime-500">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                    >
                      <path
                        d="M16.704 5.29a1 1 0 0 0-1.408-1.42L8 11.171 4.704 7.874a1 1 0 0 0-1.408 1.42l4 4a1 1 0 0 0 1.408 0z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">Included</span>
                  </span>

                  <p className="text-lg font-medium text-slate-900">
                    {service}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
