// app/components/ContactSection.tsx  (or wherever you keep components)
'use client';

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* splat-left image */}
      {/* <Image
        src="/static/images/img/splat.svg"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-10 -top-10 -z-10"
      /> */}

      <div className="app-container">
        {/* heading */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="mb-4 text-3xl lg:text-[50px] font-semibold text-gray-900">
            Contact us
          </h1>

        <div className='text-sm lg:text-[17px] font-normal text-[#4c4c4c]'>
            <p className="mb-2 text-gray-600">
            Are you looking for an experienced team to design &amp; develop your
            web or mobile project, or just looking for a quote?
          </p>

          <p className="text-gray-600">
            Please fill out the form below and we&apos;ll get back to you within
            24 hours. If your enquiry is urgent, please{' '}
             <button
            type="button"
            className="font-medium text-sky-500 underline-offset-2 hover:underline"
          // onClick={() => scrollToOtherContact()}  // handle like original "go-to"
          >
            call us
          </button>
            .
          </p>

        </div>

        </div>

        {/* form wrapper (original col-md-8 col-md-push-2) */}
        <div className="mx-auto max-w-4xl">
          <form
            id="contact-form"
            method="post"
            className="space-y-6"
          >
            {/* hidden csrf if you need it */}
            {/* <input type="hidden" name="csrfmiddlewaretoken" value="..." /> */}

            {/* name + company */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  type="text"
                  name="company_name"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* email + phone */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  type="email"
                  name="email"
                  placeholder="E-mail address"
                />
              </div>
              <div>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  type="text"
                  name="contact_number"
                  placeholder="Contact number"
                />
              </div>
            </div>

            {/* message */}
            <div>
              <textarea
                className="min-h-[140px] w-full rounded border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                rows={5}
                name="message"
                placeholder="Briefly explain your project"
              />
            </div>

            {/* reCAPTCHA placeholder / container */}
            <div
              id="id_captcha"
              className="g-recaptcha"
            // data-sitekey="6LfklFAUAAAAAFM6dXAyWrGOzZxuioD-7hXRqExS"
            // data-size="invisible"
            // data-badge="inline"
            />

            {/* submit button */}
            <div className='flex justify-center'>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-[#0dbfef] px-6 py-3 text-sm md:text-sm lg:text-base font-medium text-white shadow-sm hover:bg-[#2E2E2E] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
