// components/ClientTestimonials.jsx
// import qutaion from '../../public/client/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNzUuOTk5IDc1Ljk5OSIgc3R5bGU9ImV.svg'

export default function ClientTestimonials() {

  // components/testimonialsData.js

const testimonials = [
  {
    name: "Joshua Loulias",
    title: "Kickin' Inn",
    avatar: "https://www.creatio.com.au/media/client-kickininn.jpg",
    quote:
      "We recently had the pleasure of having our new website built by the team at Creatio. The team was professional, creative, and attentive to our needs. They delivered a stunning, user-friendly site that perfectly represents our brand. Communication was excellent, and they were more than happy to make any late changes needed throughout the project. We highly recommend Creatio to anyone looking to upgrade or build a new website!",
  },
  {
    name: "Sarah Prescott",
    title: "EcoBarista",
    avatar: "https://www.creatio.com.au/media/client-ecobarista.jpg",
    quote:
      "Highly recommend Creatio as a web partner. They were professional, efficient and overall great to work with. They went above and beyond to deliver our project on a tight timeframe, and the finished project was even better than we expected.",
  },
  {
    name: "Melissa Clarke",
    title: "The University of Sydney",
    avatar: "https://www.creatio.com.au/media/usyd-client_32yzneT.jpg",
    quote:
      "I would absolutely recommend Creatio, and would not hesitate to work with them again! The team have been fantastic at every step of the process. Their response to brief hit the target, their communication and responsiveness goes above and beyond, and their work is exemplary. We engaged Creatio for a custom event website, requiring complex logic and personalisation. We are thrilled with the result, which is allowing us to achieve our objectives and digital KPIs. It couldn't have gone smoother - they are a dream to work with!",
  },
  {
    name: "Jane Overeem",
    title: "Overeem Whisky",
    avatar: "https://www.creatio.com.au/media/overeem-logo.jpg",
    quote:
      "Creatio have been great to work with so far! With a positive, 'can-do' attitude and attention to detail all the time, we are very pleased with their work on the Overeem Whisky website & online store.",
  },
  {
    name: "Monique Coffey",
    title: "The University of Sydney",
    avatar: "https://www.creatio.com.au/media/usyd-client_32yzneT_Cnr3xIQ.jpg",
    quote:
      "Creatio are excellent to work with. They've produced countless websites for the University of Sydney over the years – our students and stakeholders are always very happy with the results. Highly recommended!",
  },
  {
    name: "Ariane Casareo",
    title: "Ticket To Work",
    avatar: "https://www.creatio.com.au/media/ttw-logo.jpg",
    quote:
      "Creatio produce high quality work and have been attentive to our accessibility requirements and other considerations for every project, and are super responsive for support.",
  },
  {
    name: "Dijanna Mulhearn",
    title: "Sestre The Label",
    avatar: "https://www.creatio.com.au/media/sestre-client.jpg",
    quote:
      "Creatio has been my go-to company for all things IT. I can't thank them enough for their skill, knowledge and generosity. They are always ready to tackle what needs to be done in a quick and efficient manner all the while being genuinely nice guys.",
  },
  {
    name: "Alexi Baker-McLennan",
    title: "Nine Entertainment Co",
    avatar: "https://www.creatio.com.au/media/nine-client.jpg",
    quote:
      "Creatio have strong commercial skills and understand the business objectives behind each piece of creative work. They are responsive, stick to tight deadlines and can work to high level briefs.",
  },
  {
    name: "Steve Purvinas",
    title: "Federal Secretary at ALAEA",
    avatar: "https://www.creatio.com.au/media/alaea-logo.jpg",
    quote:
      "In no time at all our new app was up and running exactly as we envisaged it. I found the team helpful, full of creative ideas and always available when contact was required. Due to the personalised service I highly recommend the use of Creatio for all things digital.",
  },
  {
    name: "John Forrest",
    title: "Ag Communication Solutions",
    avatar: "https://www.creatio.com.au/media/rb-logo.jpg",
    quote:
      "We have worked with Creatio for nearly 7 years now, and have found that in all the projects they have done for us - our expectations have been exceeded every time. Would highly recommend them.",
  },
  {
    name: "Rod Gribble",
    title: "HarvestCalc",
    avatar: "https://www.creatio.com.au/media/harvestcalc-logo.jpg",
    quote:
      "If you want an app done, I can’t recommend Creatio highly enough. Understood our requirements quickly, got the job done quickly, launched & working successfully. You can’t ask for much more!",
  },
  {
    name: "Val Karmazin",
    title: "TeamDesk",
    avatar: "https://www.creatio.com.au/media/teamdesk-logo.jpg",
    quote:
      "Creatio provided us with an amazing and creative web design. It is always a pleasure to work with professionals. All communications was clear and friendly. As a result, we received a great website for our platform. We could not have asked for a better experience! Thank you for such an outstanding job!",
  },
  {
    name: "Kate Alexander",
    title: "White Ribbon Australia",
    avatar: "https://www.creatio.com.au/media/wr-logo.jpg",
    quote:
      "Creatio were fantastic to work with from project inception to completion. They were professional, efficient and innovative throughout the whole process and nothing was ever too difficult for them.",
  },
  {
    name: "Todd Sullivan",
    title: "Co-founder at Flightfox",
    avatar: "https://www.creatio.com.au/media/client-flightfox.jpg",
    quote:
      "Creatio went way above and beyond the call to help produce a website that we're extremely happy with. We were particularly impressed with their technical competence, willingness to help, and flexibility.",
  },
  {
    name: "Kristina Basco",
    title: "Aurora Healthcare",
    avatar: "https://www.creatio.com.au/media/client-aurora.jpg",
    quote:
      "Creatio is more than a service provider; they're true collaborators. Their commitment to our success and their passion for excellence set them apart. They receive my highest recommendation.",
  },
  {
    name: "Linda Patel",
    title: "University of Wollongong",
    avatar: "https://www.creatio.com.au/media/uow-logo.jpg",
    quote:
      "The team at Creatio are great to work with. They have been helpful, friendly, hard-working and professional from the start, and still are now after a year as we are about to launch our project. We look forward to working with Creatio again in future projects. Thank you guys for your fantastic work.",
  },
  {
    name: "Leisa Hart",
    title: "CEO at YMCA NSW",
    avatar: "https://www.creatio.com.au/media/ymca-logo.jpg",
    quote:
      "Creatio demonstrated deep knowledge, solid technical experience and an eye for functional design that works across all devices. They were unfailingly methodical, and solutions focussed. Their documentation was comprehensive, and they took the time to collaborate with us on options that delivered mutually beneficial outcomes. It was a pleasure to work with them.",
  },
  {
    name: "Karthik Krish",
    title: "Canterbury-Bankstown City",
    avatar: "https://www.creatio.com.au/media/cbcity-logo.jpg",
    quote:
      "I am incredibly impressed with Creatio's professionalism and commitment to our projects. They ticked all the boxes in terms of project quality, time and reliability. I highly recommend them!",
  },
  {
    name: "Heather Roberts",
    title: "RedSky Insurance",
    avatar: "https://www.creatio.com.au/media/redsky-logo.jpg",
    quote:
      "Creatio was extremely efficient and accommodating. Communication was excellent and we are very pleased with the result. Ongoing support has been excellent with really quick turnaround times.",
  },
  {
    name: "Chris Stevens",
    title: "National Disability Services",
    avatar: "https://www.creatio.com.au/media/nds-client_sCpBqQm.jpg",
    quote:
      "Easy to deal with and always willing to offer advice on how to get the best user experience for our projects. Creatio take the time to understand and achieve our business requirements.",
  },
  {
    name: "Iona Krefel",
    title: "NSW Government OLGR",
    avatar: "https://www.creatio.com.au/media/nswgov-client_fnI9Shp.jpg",
    quote:
      "It has been great to work with Creatio. Their enthusiasm, knowledge and drive were evident from the start. They really added value to the project and I look forward to working together again.",
  },
  {
    name: "Cath Brennan",
    title: "Wingecarribee Shire Council",
    avatar: "https://www.creatio.com.au/media/wsc-logo.jpg",
    quote:
      "Creatio were patient, they spoke in a language that we could understand, and were very available to assist with our learning along the way. I would highly recommend their services.",
  },
  {
    name: "Jeffrey Williams",
    title: "CEO at Barcats",
    avatar: "https://www.creatio.com.au/media/barcats-logo.jpg",
    quote:
      "Creatio has been an important partner in establishing my new business Barcats. From Day 1 they have always recommended a pragmatic approach that has both saved considerable time and money in achieving the best outcome that not only will deliver short term benefits but will ensure we are creating a sustainable business for the future. I would have no hesitation in recommending Creatio to any other business and I look forward to building a great future with them.",
  },
  {
    name: "Tracey Harris",
    title: "Amovita International",
    avatar: "https://www.creatio.com.au/media/amovita-logo.jpg",
    quote:
      "We have been developing 4 websites and an app with Creatio. They also designed our latest logo. At all stages of our projects, they provide suggestions, are responsive and highly professional. We could not be happier.",
  },
  {
    name: "Muriel Rauch",
    title: "The University of Sydney",
    avatar: "https://www.creatio.com.au/media/usyd-client_gQLpbgF.jpg",
    quote:
      "The team at Creatio have been great to work with. After designing a product that meets the demands of our users, they went out of their way to adapt quickly as the fast changing COVID situation re-shaped our needs. Looking forward to working with Creatio this year again!",
  },
  {
    name: "Matt Bullock",
    title: "CEO & Founder at eWAY",
    avatar: "https://www.creatio.com.au/media/eway-logo.jpg",
    quote:
      "We’ve worked with Creatio several times now, on everything from banner ads to t-shirt designs. They are continually coming up with new and creative ways to showcase our services, often with tight deadlines.",
  },
  {
    name: "Eddy Nobis",
    title: "PAAL Kit Homes",
    avatar: "https://www.creatio.com.au/media/paal-client.jpg",
    quote:
      "The team at Creatio are an absolute pleasure to work with. Excellent advice and suggestions, thoroughly professional development, and highly responsive and reliable support. I heartily recommend Creatio for quality, professionalism and creativeness.",
  },
  {
    name: "Carmen Lau",
    title: "Marketing Officer at USYD",
    avatar: "https://www.creatio.com.au/media/usyd-client_T0CP9Gc.jpg",
    quote:
      "Creatio provided exceptional service and delivered high-quality end products. They were responsive, adapted well to shifting requirements and addressed issues quickly. At a key stage, they were flexible to work around the clock to ensure the project was delivered on-time. It has been great working with them.",
  },
  {
    name: "Tom Johnson",
    title: "Cell Care",
    avatar: "https://www.creatio.com.au/media/client-cellcare_Ovt6rKM.jpg",
    quote:
      "We have been working with Creatio for over 10 years on our website and app development projects. The team is experienced across different frameworks (we use Django Python) and recommend the best solution for the specific situation. They are exceptional at project management and delivering a quality product on time and within budget. I would recommend Creatio for any company looking for assistance on their web/app development projects.",
  },
  {
    name: "Chris Ross",
    title: "The Whisky List",
    avatar: "https://www.creatio.com.au/media/twl-logo.jpg",
    quote:
      "We are thrilled with the work Creatio did on The Whisky List app. The work was high quality, cost-effective and efficient, and they delivered on time and on budget! 11/10 would recommend.",
  },
  {
    name: "Brooke Hayman",
    title: "Whisky + Alement",
    avatar: "https://www.creatio.com.au/media/client-whiskyalement.jpg",
    quote:
      "I can't recommend Creatio enough! All the bugs and issues we've previously encountered with our website have not only been fixed in an efficient manner, but also clearly explained so we understand what's happening and can avoid problems reoccurring. If you're a small business that finds online commerce a headache, give these guys a call! You won't refret it!",
  },
  {
    name: "Tyler Mason",
    title: "Craveable Brands",
    avatar: "https://www.creatio.com.au/media/craveablebrands-logo.jpg",
    quote:
      "We achieved exactly what we wanted, on time and within budget. Great engagement from day 1. Would recommend Creatio to any business or startup needing development.",
  },
  {
    name: "Terry Takouridis",
    title: "Pods Equity",
    avatar: "https://www.creatio.com.au/media/podsequity-logo.jpg",
    quote:
      "We have used Creatio extensively, and we keep going back. That's because the Creatio team meet all of our core requirements. I highly recommend you engage with Creatio.",
  },
  {
    name: "Craig Brokenshire",
    title: "Eclipse Insurance",
    avatar: "https://www.creatio.com.au/media/eclipse-logo_sINWIWe.jpg",
    quote:
      "We really enjoyed working with the team at Creatio on our new website. They listened and understood what we were trying achieve from our first conversation and delivered a fantastic product for us that many of our clients have already positively commented on. Would recommend them and will definitely work with them again.",
  },
  {
    name: "Jamie Do",
    title: "Expo Freight",
    avatar: "https://www.creatio.com.au/media/expofreight-logo.jpg",
    quote:
      "From my first interaction with Creatio I could see the professionalism they were going to bring to my business. I went to them with a business model but very little knowledge on how to execute it technically. Creatio offered me guidance and suggestions based on their abundance of knowledge which really helped me to adapt my business to the market. Very happy with the output I have received and will continue to work with them in the future.",
  },
  {
    name: "Chris Beaumont",
    title: "The University of Sydney",
    avatar: "https://www.creatio.com.au/media/usyd-client.jpg",
    quote:
      "Creatio were an excellent agency to work with. They provided a service that was professional, flexible and prompt – with zero fuss. They delivered a finely developed product that met our requirements and received overwhelmingly positive feedback from our stakeholders and users.",
  },
  {
    name: "Angela Maier",
    title: "NSW Government LLS",
    avatar: "https://www.creatio.com.au/media/nswgov-client.jpg",
    quote:
      "Greater Sydney Local Land Services contracted Creatio to develop the LandSmart app. Although our budget was limited, Creatio followed our brief and delivered an app even better than we had imagined. Throughout all stages of the project Creatio have been prompt in responding to our queries and extremely helpful navigating any issues that arose. We highly recommend Creatio.",
  },
  {
    name: "Eyal Galizer",
    title: "Brick Me",
    avatar: "https://www.creatio.com.au/media/brickme-logo_suxVJBg.jpg",
    quote:
      "The team at Creatio are absolutely great to work with. They built my website from scratch, complete with a custom web-app, and an amazing design including logo and branding. The quality of their work is outstanding, their support is excellent and I'd recommend them to anyone looking for a web/app developer.",
  },
  {
    name: "Mark Quigley",
    title: "Social Venture Consultants",
    avatar: "https://www.creatio.com.au/media/svc-logo.jpg",
    quote:
      "Our professional services company recently engaged Creatio to redevelop our company website. Creatio exceeded expectations. They worked closely with us to develop a website that reflects what we do and who we are. The team at Creatio are skilled, responsive and great to work with.",
  },
  {
    name: "Erin Nichols",
    title: "Association of Women",
    avatar: "https://www.creatio.com.au/media/shaw-logo.jpg",
    quote:
      "Southern Highlands Association of Women were thrilled with the website Creatio crafted for us. The team were very helpful and responsive, and walked us through how to keep things up to date in a way even the least tech savvy amongst us could grasp. They are always happy to answer our questions, and now we have a beautiful and functional website to last our organisation well into the future!",
  },
  {
    name: "Simon Marmot",
    title: "Marketing Manager at Cudo",
    avatar: "https://www.creatio.com.au/media/cudo-client.jpg",
    quote:
      "We worked with Creatio on the Corporate Identity including branding components leading up to our multi-media advertising launch of our start up Cudo.com.au. The work they did for us was second to none, it was contemporary, cool and bold helping us differentiate our brand in a cluttered marketplace. The other thing to mention is that they were always on hand when needed and would go above and beyond to what was needed at the time. We hope to work again with the team at Creatio again in the near future.",
  },
];


  // components/QuoteIcon.jsx
  function QuoteIcon() {
    return (
      <svg
        viewBox="0 0 75.999 75.999"
        aria-hidden="true"
        className="w-6 lg:w-16 h-6 lg:h-10 fill-current text-gray-300"
      >
        <g>
          <g>
            <path d="M14.579,5C6.527,5,0,11.716,0,20c0,8.285,6.527,15,14.579,15C29.157,35,19.438,64,0,64v7
              C34.69,71,48.286,5,14.579,5z M56.579,5C48.527,5,42,11.716,42,20c0,8.285,6.527,15,14.579,15C71.157,35,61.438,64,42,64v7
              C76.69,71,90.286,5,56.579,5z" />
          </g>
        </g>
      </svg>
    );
  }


  return (
    <section className="relative overflow-hidden  py-16 md:py-20">
      {/* background splats (optional) */}

      <div className="app-container relative">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl xl:text-[40px] font-semibold text-slate-900">
          Client testimonials
        </h2>

        {/* 👉 Masonry-style layout: columns instead of grid */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((t, index) => (
            <article
              key={t.name + index}
              className="
                mb-6
                break-inside-avoid
                p-6 lg:p-10 shadow
                flex flex-col
               rounded-sm
               bg-white
              "
            >
              {/* header: avatar + name */}
              <div className="flex items-center gap-4 mx-auto md:mx-0">
                <div className="h-12 lg:h-16 w-12 lg:w-16 overflow-hidden rounded  ">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm lg:text-[18px] font-medium text-[#212121] truncate">
                    {t.name}
                  </p>
                  <p className="text-xs lg:text-sm font-normal text-[#919197] truncate">
                    {t.title}
                  </p>
                </div>
              </div>

              <div className=" mx-auto py-5">
                <QuoteIcon />
              </div>

              {/* quote text */}
              <div className="mt-4 text-center md:text-left">
                {/* <div className="mb-3 mx-auto  sm:hidden">
                  <QuoteIcon />
                </div> */}
                <p className="text-sm lg:text-base font-normal leading-relaxed text-[#38373b]">
                  {t.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
