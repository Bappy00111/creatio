// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import love from "../../public/home-image/love.svg";

export default function ClientsHome() {
  return (
    <main className="md:min-h-screen">
      {/* background e love.svg, left theke dekhabe */}
      <section
        className="relative w-full bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: `url(${love.src})` }}
      >
        {/* app-container er moddhe sob content */}
        <div className="app-container flex  flex-col gap-16 py-5 lg:flex-row lg:items-center lg:justify-around">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-[50px]">
              Our clients
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#212121]">
              We&apos;ve worked with hundreds of clients from a range of
              industries – including startups, government, finance, media,
              retail, nonprofit and agriculture to name a few.
            </p>
          </div>

          {/* RIGHT IMAGE – sob device e visible */}
          <div className="w-full lg:w-1/2  flex justify-center lg:justify-end">
            <div className="relative w-full h-[300px] lg:h-[500px]">
              <Image
                src="https://www.creatio.com.au/static/images/img/clients.svg"
                alt="Team collaborating on digital projects"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* নিচের heading + link অংশ */}
        <div className="max-w-5xl mx-auto px-4  pb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-wide text-slate-900">
            We have created websites &amp; apps for some of{" "}
            <span className="block sm:inline">
              Australia&apos;s most trusted brands
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            See what some of our clients{" "}
            <Link
              href="#"
              className="text-[#0DBFEF] underline-offset-4 hover:underline"
            >
              have to say
            </Link>{" "}
            about working with us
          </p>
        </div>
      </section>
    </main>
  );
}
