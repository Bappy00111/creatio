'use client';

import { useEffect, useState } from 'react';

const logoSlides = [
  { name: 'Sony', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-aussie-logo.png' },
  { name: 'Wex', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-sony-logo.png' },
  { name: 'Dell', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-dell-logo.png' },
  { name: 'Caltex', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-vic-state-govnt-logo.png' },
  { name: 'Corteva', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-ymca-logo.png' },
  { name: 'Sony 2', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-nsw-health.png' },
  { name: 'Wex 2', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-aurora-logo.png' },
  { name: 'Dell 2', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-canterbury-logo.png' },
  { name: 'Caltex 2', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-eljannah-logo.png' },
  { name: 'Corteva 2', src: 'https://www.creatio.com.au/static/images/img/clients_logo/home-wollongong-logo.png' },
];

const VISIBLE_SLIDES = 5; // ek shathe koyta dekhabo

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = logoSlides.length;
  const maxIndex = Math.max(totalSlides - VISIBLE_SLIDES, 0);
  const itemWidth = 100 / VISIBLE_SLIDES; // protita “box” er width %

  // auto slide every 2s
  useEffect(() => {
    if (totalSlides <= VISIBLE_SLIDES) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [maxIndex, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}%)`,
          }}
        >
          {logoSlides.map((logo, index) => (
            <div
              key={index}
              className="flex-none flex items-center justify-center py-4 px-4" // same padding => same gap
              style={{ width: `${itemWidth}%` }} // sob box er width same
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-16 w-auto max-w-full object-contain"
                // ❌ kono opacity / grayscale nai
              />
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all ${
              currentIndex === index ? 'w-6 bg-sky-500' : 'w-4 bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
