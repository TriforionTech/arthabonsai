export default function Partners() {
  // CHANGE: Menambahkan properti "url" pada data partner
  const partners = [
    {
      id: 1,
      logo: "/src/assets/partner1.png",
      name: "NatureGrow",
      url: "https://www.naturegrow.com",
    },
    {
      id: 2,
      logo: "/src/assets/partner2.png",
      name: "BonsaiWorld",
      url: "https://www.bonsaiworld.com",
    },
  ];

  return (
    <section id="partners" className="w-full py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Title */}
        {/* CHANGE: Ukuran judul dibuat responsif */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Our Valued Partners
        </h2>
        {/* CHANGE: Ukuran teks subjudul dibuat eksplisit dan lebarnya dibatasi */}
        <p className="text-gray-600 text-lg mb-12 max-w-prose mx-auto">
          Collaborating with trusted names to grow beauty together.
        </p>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            // CHANGE: Membungkus logo dengan tag <a> agar bisa diklik
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-32 h-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
