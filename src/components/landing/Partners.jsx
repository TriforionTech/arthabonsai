import { useState } from "react";
import partner1 from "/src/assets/images/landing/partner1.png";
import partner2 from "/src/assets/images/landing/partner2.png";

export default function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    {
      id: 1,
      logo: partner1,
      name: "Botaniflora",
      url: "https://www.naturegrow.com",
    },
    {
      id: 2,
      logo: partner2,
      name: "ExoticBonsaiIndonesia",
      url: "https://www.bonsaiworld.com",
    },
  ];

  return (
    <section id="partners" className="w-full py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Our Valued Partners
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-prose mx-auto">
          Collaborating with trusted names to grow beauty together.
        </p>

        {/* Partner logos dengan tooltip */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-32 h-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                loading="lazy"
              />

              {/* Tooltip on hover */}
              {hoveredPartner === partner.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap">
                  {partner.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
