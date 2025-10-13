import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { bonsaiCollections, getCategories } from "../data/collections";

// Import images
import heroBg from "../assets/images/landing/hero-bg.webp";
import gallery1 from "../assets/images/landing/gallery1.webp";
import gallery2 from "../assets/images/landing/gallery2.webp";
import recommend1 from "../assets/images/landing/recommend1.webp";
import recommend2 from "../assets/images/landing/recommend2.webp";
import bonsai1 from "../assets/images/landing/bonsai1.webp";
import bonsai2 from "../assets/images/landing/bonsai2.webp";
import bonsai3 from "../assets/images/landing/bonsai3.webp";
import bonsai4 from "../assets/images/landing/bonsai4.webp";

// Icons
const CheckIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const LeafIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const AwardIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

// Custom Hook untuk Intersection Observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};

// Custom Hook untuk Counter Animation
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isActive, end, duration]);

  return [count, () => setIsActive(true)];
};

// Komponen Counter dengan animasi
const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}) => {
  const [ref, isInView] = useInView(0.3);
  const [count, startCounting] = useCounter(end, duration);

  useEffect(() => {
    if (isInView) {
      startCounting();
    }
  }, [isInView, startCounting]);

  return (
    <span ref={ref} className="text-4xl font-bold text-green-700">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Komponen Timeline Item
const TimelineItem = ({ year, title, description, image, isLeft = false }) => {
  const [ref, isInView] = useInView(0.3);

  return (
    <div
      ref={ref}
      className={`flex items-center mb-12 ${isLeft ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`flex-1 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
      >
        <div
          className={`transform transition-all duration-700 ${
            isInView
              ? "translate-x-0 opacity-100"
              : isLeft
              ? "translate-x-8 opacity-0"
              : "-translate-x-8 opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-3">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {year}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isInView ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-600 shadow-lg"
          />
        </div>
      </div>

      <div className="flex-1"></div>
    </div>
  );
};

// Komponen Team Member Card
const TeamMemberCard = ({ name, position, description, image, expertise }) => {
  const [ref, isInView] = useInView(0.2);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className="relative h-80 w-full perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-700 backface-hidden ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-green-600 font-semibold mb-2">{position}</p>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-700 backface-hidden rotate-y-180 ${
            isFlipped ? "rotate-y-0" : ""
          }`}
        >
          <div className="bg-green-700 rounded-lg shadow-lg h-full p-6 flex flex-col justify-center text-white">
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <p className="text-green-100 mb-4">{position}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Keahlian:</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-800 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Value Card
const ValueCard = ({ icon, title, description, index }) => {
  const [ref, isInView] = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="text-green-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  // State untuk tab switching
  const [activeTab, setActiveTab] = useState("story");

  // Memoized calculations dari data collections
  const statistics = useMemo(() => {
    const totalProducts = bonsaiCollections.length;
    const categories = getCategories().length;
    const avgPrice = Math.round(
      bonsaiCollections.reduce((sum, item) => sum + item.price, 0) /
        totalProducts
    );
    const premiumProducts = bonsaiCollections.filter(
      (item) => item.category === "premium"
    ).length;

    return {
      totalProducts,
      categories,
      avgPrice,
      premiumProducts,
      yearsExperience: 15,
      happyCustomers: 2500,
    };
  }, []);

  // Data team members
  const teamMembers = [
    {
      name: "Budi Santoso",
      position: "Master Bonsai Artist",
      description:
        "Ahli bonsai dengan pengalaman 20+ tahun dalam seni pembentukan dan perawatan bonsai tradisional.",
      image: recommend1,
      expertise: ["Pembentukan", "Styling", "Yamadori", "Tradisional Jepang"],
    },
    {
      name: "Sari Dewi",
      position: "Curator & Designer",
      description:
        "Spesialis dalam kurasi koleksi dan desain display bonsai untuk pameran dan koleksi pribadi.",
      image: gallery1,
      expertise: ["Kurasi", "Display Design", "Fotografi", "Art Direction"],
    },
    {
      name: "Andi Wijaya",
      position: "Horticultural Expert",
      description:
        "Pakar hortikultura yang fokus pada kesehatan tanaman, nutrisi, dan teknik propagasi bonsai.",
      image: recommend2,
      expertise: [
        "Nutrisi Tanaman",
        "Propagasi",
        "Pest Control",
        "Soil Science",
      ],
    },
    {
      name: "Maya Chen",
      position: "Customer Experience Manager",
      description:
        "Memastikan setiap pelanggan mendapat pengalaman terbaik dalam perjalanan bonsai mereka.",
      image: gallery2,
      expertise: [
        "Customer Service",
        "Consultation",
        "After Sales",
        "Community",
      ],
    },
  ];

  // Data company values
  const values = [
    {
      icon: <LeafIcon />,
      title: "Keaslian & Tradisi",
      description:
        "Kami menjaga keaslian seni bonsai tradisional sambil mengadaptasi teknik modern untuk hasil terbaik.",
    },
    {
      icon: <HeartIcon />,
      title: "Passion & Dedikasi",
      description:
        "Setiap bonsai yang kami kerjakan mendapat perhatian penuh dengan cinta dan dedikasi tinggi.",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Kualitas Berkelanjutan",
      description:
        "Komitmen terhadap peningkatan kualitas berkelanjutan dalam setiap aspek layanan kami.",
    },
    {
      icon: <UsersIcon />,
      title: "Community & Education",
      description:
        "Membangun komunitas pecinta bonsai dan edukasi untuk melestarikan seni ini.",
    },
  ];

  // Data timeline
  const timeline = [
    {
      year: "2009",
      title: "Awal Perjalanan",
      description:
        "Memulai dengan passion sederhana terhadap seni bonsai dan koleksi pribadi kecil di halaman rumah.",
      image: bonsai1,
    },
    {
      year: "2012",
      title: "Studio Pertama",
      description:
        "Membuka studio bonsai pertama dan mulai melayani konsultasi serta perawatan bonsai untuk komunitas lokal.",
      image: bonsai2,
    },
    {
      year: "2015",
      title: "Ekspansi Koleksi",
      description:
        "Memperluas koleksi dengan import langsung dari Jepang dan mulai mengembangkan teknik hybrid.",
      image: bonsai3,
    },
    {
      year: "2018",
      title: "Sertifikasi Internasional",
      description:
        "Mendapat sertifikasi dari Japan Bonsai Association dan mulai mengajar workshop internasional.",
      image: bonsai4,
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Meluncurkan platform digital dan e-commerce untuk menjangkau pecinta bonsai di seluruh Indonesia.",
      image: recommend1,
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description:
        "Fokus pada sustainability dan edukasi generasi muda tentang pentingnya melestarikan seni bonsai.",
      image: recommend2,
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[70vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h5 className="text-md font-semibold uppercase tracking-[0.3em] text-gray-300 mb-4">
            Tentang Kami
          </h5>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Artha Bonsai Studio
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Lebih dari sekedar studio, kami adalah komunitas yang berdedikasi
            untuk melestarikan dan mengembangkan seni bonsai dengan passion,
            keahlian, dan inovasi berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("story")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              Pelajari Cerita Kami
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("team")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-colors"
            >
              Kenali Tim Kami
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <AnimatedCounter end={statistics.yearsExperience} suffix="+" />
              <p className="text-gray-600 mt-2">Tahun Pengalaman</p>
            </div>
            <div>
              <AnimatedCounter end={statistics.totalProducts} suffix="+" />
              <p className="text-gray-600 mt-2">Koleksi Bonsai</p>
            </div>
            <div>
              <AnimatedCounter end={statistics.categories} suffix="+" />
              <p className="text-gray-600 mt-2">Kategori</p>
            </div>
            <div>
              <AnimatedCounter end={statistics.happyCustomers} suffix="+" />
              <p className="text-gray-600 mt-2">Pelanggan Puas</p>
            </div>
            <div>
              <AnimatedCounter end={98} suffix="%" />
              <p className="text-gray-600 mt-2">Tingkat Kepuasan</p>
            </div>
            <div>
              <AnimatedCounter end={24} suffix="/7" />
              <p className="text-gray-600 mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content dengan Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "story", label: "Cerita Kami" },
              { id: "values", label: "Nilai & Visi" },
              { id: "timeline", label: "Perjalanan" },
              { id: "team", label: "Tim Kami" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold rounded-full transition-colors ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Story Tab */}
            {activeTab === "story" && (
              <div id="story" className="animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Dari Passion Menjadi Misi
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Artha Bonsai Studio lahir dari kecintaan mendalam
                        terhadap seni bonsai yang telah berusia ribuan tahun.
                        Didirikan oleh Budi Santoso pada tahun 2009, kami
                        memulai perjalanan dengan visi sederhana: berbagi
                        keindahan dan filosofi bonsai kepada masyarakat
                        Indonesia.
                      </p>
                      <p>
                        Apa yang dimulai sebagai hobby pribadi, kini telah
                        berkembang menjadi studio terkemuka yang melayani ribuan
                        pecinta bonsai di seluruh nusantara. Kami tidak hanya
                        menjual bonsai, tetapi juga berbagi pengetahuan,
                        filosofi, dan passion yang terkandung dalam setiap karya
                        seni hidup ini.
                      </p>
                      <p>
                        Setiap bonsai yang kami rawat memiliki cerita dan
                        karakter unik. Kami percaya bahwa dalam merawat bonsai,
                        kita juga belajar tentang kesabaran, ketekunan, dan
                        apresiasi terhadap keindahan alam.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src={recommend1}
                      alt="Workshop bonsai"
                      className="rounded-lg shadow-lg"
                    />
                    <img
                      src={gallery1}
                      alt="Studio bonsai"
                      className="rounded-lg shadow-lg mt-8"
                    />
                    <img
                      src={recommend2}
                      alt="Master bekerja"
                      className="rounded-lg shadow-lg -mt-8"
                    />
                    <img
                      src={gallery2}
                      alt="Koleksi bonsai"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Values Tab */}
            {activeTab === "values" && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Nilai-Nilai & Visi Kami
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Nilai-nilai fundamental yang memandu setiap langkah kami
                    dalam melestarikan dan mengembangkan seni bonsai.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {values.map((value, index) => (
                    <ValueCard key={index} {...value} index={index} />
                  ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-green-600 mb-4">
                      <TrendingUpIcon />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Misi Kami
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckIcon className="text-green-600 mt-1 flex-shrink-0" />
                        <span>
                          Menyediakan bonsai berkualitas tinggi dengan perawatan
                          optimal
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="text-green-600 mt-1 flex-shrink-0" />
                        <span>
                          Mengedukasi masyarakat tentang seni dan filosofi
                          bonsai
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="text-green-600 mt-1 flex-shrink-0" />
                        <span>
                          Membangun komunitas pecinta bonsai yang solid dan
                          suportif
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="text-green-600 mt-1 flex-shrink-0" />
                        <span>
                          Melestarikan teknik tradisional dengan inovasi modern
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-700 text-white rounded-lg shadow-lg p-8">
                    <div className="text-green-200 mb-4">
                      <AwardIcon />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                    <p className="text-green-100 leading-relaxed">
                      Menjadi pusat keunggulan bonsai terdepan di Indonesia yang
                      menginspirasi generasi mendatang untuk mencintai dan
                      melestarikan seni bonsai sebagai warisan budaya yang
                      berharga, sambil terus berinovasi dalam teknik dan
                      pendekatan modern.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Tab */}
            {activeTab === "timeline" && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Perjalanan Kami
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Menelusuri perjalanan panjang kami dari studio kecil hingga
                    menjadi nama terpercaya dalam dunia bonsai Indonesia.
                  </p>
                </div>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>

                  {/* Timeline Items */}
                  {timeline.map((item, index) => (
                    <TimelineItem
                      key={index}
                      {...item}
                      isLeft={index % 2 === 1}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <div id="team" className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Tim Ahli Kami
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Bertemu dengan para master dan expert yang berdedikasi untuk
                    memberikan yang terbaik dalam setiap aspek bonsai.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Penghargaan & Pengakuan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AwardIcon className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Best Bonsai Studio 2023
              </h3>
              <p className="text-gray-600">Indonesian Bonsai Association</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <StarIcon className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Excellence in Teaching
              </h3>
              <p className="text-gray-600">Asia Pacific Bonsai Convention</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community Choice Award
              </h3>
              <p className="text-gray-600">Bonsai Enthusiasts Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Komunitas Kami
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan bonsai Anda bersama kami. Dapatkan konsultasi
            gratis, workshop eksklusif, dan akses ke komunitas pecinta bonsai
            terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/collections"
              className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Jelajahi Koleksi
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS untuk animasi custom */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
}
