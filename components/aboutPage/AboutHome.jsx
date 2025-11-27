// app/page.tsx
import Image from "next/image";
import love from "../../public/home-image/love.svg";

export default function AboutHome() {
  return (
    <main className="min-h-screen flex items-center">
      {/* background e love.svg, left theke dekhabe */}
      <section
        className="relative flex w-full min-h-screen items-center bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: `url(${love.src})` }}
      >
        {/* app-container er moddhe sob content */}
        <div className="app-container flex flex-col gap-12 py-10 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT CONTENT */}
          <div className="w-full">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Hi, we’re Creatio
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#212121]">
              Established in Sydney Australia, Creatio has been designing &amp;
              coding digital things since 2007.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#212121]">
              We’re an experienced &amp; award-winning team that can be involved
              in all stages of a project, from the earliest concepts all the way
              through to launch. How can we help you?
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
                src="https://www.creatio.com.au/static/images/img/about.svg"
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
  );
}
