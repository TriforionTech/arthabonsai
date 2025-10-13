import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Import data
import {
  bonsaiCollections,
  getCategories,
  getBonsaiByCategory,
  categoryDescriptions,
} from "../data/collections";

// Import images
import heroBg from "../assets/images/landing/hero-bg.webp";
import gallery1 from "../assets/images/landing/gallery1.webp";
import gallery2 from "../assets/images/landing/gallery2.webp";
import recommend1 from "../assets/images/landing/recommend1.webp";
import recommend2 from "../assets/images/landing/recommend2.webp";
import partner1 from "../assets/images/landing/partner1.png";
import partner2 from "../assets/images/landing/partner2.png";

// Custom Hooks
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const direction = currentOffset > prevOffset ? "down" : "up";

      if (Math.abs(currentOffset - prevOffset) > 10) {
        setScrollDirection(direction);
        setPrevOffset(currentOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevOffset]);

  return scrollDirection;
};

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "50px", ...options }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isIntersecting];
};

const usePreloadImages = (imageUrls) => {
  useEffect(() => {
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
    };

    imageUrls.forEach(preloadImage);
  }, [imageUrls]);
};

// Hero Section Component
const HeroSection = ({ featuredProducts, onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = useMemo(
    () => [
      {
        src: heroBg,
        title: "Premium Collection",
        subtitle: "Discover Excellence",
        description:
          "Koleksi bonsai premium yang dipilih secara eksklusif untuk para kolektor dan pecinta seni hidup.",
      },
      {
        src: gallery1,
        title: "Master Crafted",
        subtitle: "Artistic Perfection",
        description:
          "Setiap karya dibentuk dengan keahlian master bonsai berpengalaman puluhan tahun.",
      },
      {
        src: gallery2,
        title: "Living Art",
        subtitle: "Nature's Masterpiece",
        description:
          "Seni hidup yang menggabungkan filosofi Zen dengan keindahan alam yang menakjubkan.",
      },
    ],
    []
  );

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Increased to 6 seconds for better reading time

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  // Preload hero images
  usePreloadImages(heroImages.map((img) => img.src));

  const currentHeroData = heroImages[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          </div>
        ))}
      </div>

      {/* Main Content - Centered and Focused */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl">
            {" "}
            {/* Focused content width */}
            {/* Badge with current slide info */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/90 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                {currentHeroData.subtitle}
              </span>
            </div>
            {/* Dynamic Title based on current slide */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              <span className="block transition-all duration-700">
                {currentHeroData.title}
              </span>
              <span className="block text-green-400 text-4xl md:text-5xl mt-2">
                Artha Bonsai Studio
              </span>
            </h1>
            {/* Dynamic description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              {currentHeroData.description}
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onExploreClick}
                className="group px-10 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Jelajahi Koleksi
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("about-preview")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group px-10 py-4 border-2 border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Tentang Kami
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {featuredProducts.length}+
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  Premium Bonsai
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  2.5K+
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  Pelanggan Puas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`relative transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-3 bg-white rounded-full"
                  : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
              }`}
            >
              {/* Progress bar for active slide */}
              {index === currentSlide && (
                <div
                  className="absolute inset-0 bg-green-400 rounded-full origin-left transition-all"
                  style={{
                    animation: isAutoPlaying
                      ? "progressBar 6s linear infinite"
                      : "none",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Quick Action */}
      <div className="absolute bottom-12 right-8 z-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="text-white text-center mb-3">
            <div className="text-2xl font-bold">{featuredProducts.length}</div>
            <div className="text-xs opacity-80">Koleksi Tersedia</div>
          </div>
          <button
            onClick={onExploreClick}
            className="w-full px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Lihat Semua
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <div className="text-xs uppercase tracking-wider">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* CSS Animation for progress bar */}
      <style jsx>{`
        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

// Featured Section Component
const FeaturedSection = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ref, isVisible] = useIntersectionObserver();

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products.slice(0, 8);
    return getBonsaiByCategory(selectedCategory).slice(0, 8);
  }, [products, selectedCategory]);

  const categories = getCategories();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Featured Collection
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Koleksi Pilihan Terbaik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Setiap bonsai dalam koleksi ini telah dipilih secara khusus untuk
            kualitas, keunikan, dan nilai artistiknya yang luar biasa.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === ""
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-100"
              }`}
            >
              Semua
            </button>
            {categories.slice(0, 6).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                {category.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {product.age}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-green-600 font-medium text-sm mb-2">
                  {product.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-500">
                    <div>Tinggi: {product.specs.height}</div>
                    <div>Perawatan: {product.specs.care}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-700">
                      Rp {product.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors">
                    Lihat Detail
                  </button>
                  <button className="px-4 py-2 border border-green-600 text-green-600 text-sm font-semibold rounded-lg hover:bg-green-50 transition-colors">
                    <svg
                      className="w-4 h-4"
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            Lihat Semua Koleksi
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Statistics Section Component
const StatsSection = ({ collections }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const stats = useMemo(() => {
    const categories = getCategories();
    const avgPrice = Math.round(
      collections.reduce((sum, item) => sum + item.price, 0) /
        collections.length
    );
    const premiumCount = collections.filter((item) => item.price > 500).length;

    return [
      { number: collections.length, label: "Premium Bonsai", suffix: "+" },
      { number: categories.length, label: "Kategori Lengkap", suffix: "+" },
      { number: 15, label: "Tahun Pengalaman", suffix: "+" },
      { number: 98, label: "Customer Satisfaction", suffix: "%" },
    ];
  }, [collections]);

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const increment = stat.number / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setAnimatedStats((prev) => {
          const newStats = [...prev];
          newStats[index] = Math.floor(current);
          return newStats;
        });
      }, 50);

      return () => clearInterval(timer);
    });
  }, [isVisible, stats]);

  return (
    <section ref={ref} className="py-20 bg-green-700">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Dipercaya oleh Ribuan Pecinta Bonsai
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Angka-angka yang membuktikan dedikasi kami dalam memberikan yang
            terbaik untuk komunitas bonsai Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl font-bold text-white mb-2">
                {animatedStats[index]}
                {stat.suffix}
              </div>
              <div className="text-green-200 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Preview Component
const AboutPreview = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about-preview" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              Tentang Kami
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Passion Menjadi Keahlian,
              <span className="block text-green-600">
                Keahlian Menjadi Seni
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Sejak 2009, Artha Bonsai telah menjadi rumah bagi para pecinta
              seni hidup. Kami tidak hanya menyediakan bonsai berkualitas
              tinggi, tetapi juga berbagi pengetahuan, passion, dan filosofi
              yang terkandung dalam setiap karya.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Master bonsai bersertifikat internasional",
                "Teknik perawatan tradisional dan modern",
                "Konsultasi personal untuk setiap pelanggan",
                "Komunitas belajar dan berbagi pengalaman",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              Pelajari Lebih Lanjut
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={recommend1}
                  alt="Master working"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src={gallery1}
                  alt="Bonsai collection"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src={recommend2}
                  alt="Workshop"
                  className="rounded-lg shadow-lg -mt-8"
                />
                <img
                  src={gallery2}
                  alt="Studio"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">
                      Years Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Preview Component - FIXED OVERLAY
const GalleryPreview = ({ collections }) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Simple gallery images sesuai pola yang ada
  const galleryImages = useMemo(() => {
    const images = [];
    collections.slice(0, 8).forEach((product) => {
      images.push({
        src: product.images.thumbnail,
        title: product.title,
        category: product.category,
      });
      product.images.gallery.slice(0, 1).forEach((img) => {
        images.push({
          src: img,
          title: product.title,
          category: product.category,
        });
      });
    });
    return images.slice(0, 12).map((image, index) => ({
      ...image,
      height: index % 3 === 0 ? "h-64" : index % 3 === 1 ? "h-48" : "h-56",
    }));
  }, [collections]);

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header sesuai pola website */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-green-600 text-green-100 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Keindahan dalam Setiap Detail
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Jelajahi galeri foto berkualitas tinggi yang menampilkan keindahan
            dan detail setiap bonsai dalam koleksi kami.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`break-inside-avoid transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${image.height}`}
                />

                {/* ✅ PERBAIKAN: Hapus bg-black, gunakan hanya opacity */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm">{image.title}</h4>
                    <p className="text-xs opacity-75 capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA sesuai pola website */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            Lihat Galeri Lengkap
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sutanto Wijaya",
      title: "Kolektor Bonsai Senior",
      content:
        "Artha Bonsai bukan hanya tempat membeli bonsai, tetapi tempat belajar filosofi hidup. Kualitas bonsai dan pelayanan mereka luar biasa.",
      rating: 5,
      image: recommend1,
    },
    {
      name: "Maya Sari",
      title: "Interior Designer",
      content:
        "Bonsai dari Artha telah menjadi centerpiece yang sempurna untuk proyek-proyek desain interior saya. Kualitas dan estetika yang menakjubkan.",
      rating: 5,
      image: gallery1,
    },
    {
      name: "Bambang Kusuma",
      title: "Pengusaha & Pecinta Bonsai",
      content:
        "Investasi terbaik untuk ketenangan jiwa. Tim Artha sangat profesional dalam memberikan konsultasi dan perawatan.",
      rating: 5,
      image: recommend2,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div
          className={`mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman dan kepercayaan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentTestimonial
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-8 absolute inset-0"
              }`}
            >
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section Component
const NewsletterSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic here
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section ref={ref} className="py-20 bg-green-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Jangan Lewatkan Update Terbaru
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Dapatkan tips perawatan bonsai, informasi koleksi terbaru, dan promo
            eksklusif langsung di inbox Anda.
          </p>

          {isSubscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Terima Kasih!
              </h3>
              <p className="text-green-100">
                Anda telah berhasil subscribe newsletter kami.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-8 mt-12 text-green-200">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
              <span className="text-sm">Tips Eksklusif</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
              <span className="text-sm">Update Koleksi</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
              <span className="text-sm">Promo Spesial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
export default function LandingPage() {
  const scrollDirection = useScrollDirection();

  // Memoized data processing
  const { featuredProducts, premiumProducts, statistics } = useMemo(() => {
    const featured = bonsaiCollections.slice(0, 8);
    const premium = bonsaiCollections.filter(
      (item) => item.category === "premium"
    );
    const stats = {
      totalProducts: bonsaiCollections.length,
      categories: getCategories().length,
      avgPrice: Math.round(
        bonsaiCollections.reduce((sum, item) => sum + item.price, 0) /
          bonsaiCollections.length
      ),
    };

    return {
      featuredProducts: featured,
      premiumProducts: premium,
      statistics: stats,
    };
  }, []);

  // Scroll to collections handler
  const handleExploreClick = useCallback(() => {
    const element = document.getElementById("featured-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Preload critical images
  usePreloadImages([
    heroBg,
    gallery1,
    gallery2,
    recommend1,
    recommend2,
    ...featuredProducts.slice(0, 4).map((p) => p.images.thumbnail),
  ]);

  return (
    <div className="font-sans">
      <Navbar scrollDirection={scrollDirection} />

      <main>
        <HeroSection
          featuredProducts={featuredProducts}
          onExploreClick={handleExploreClick}
        />

        <div id="featured-section">
          <FeaturedSection products={bonsaiCollections} />
        </div>

        <StatsSection collections={bonsaiCollections} />

        <AboutPreview />

        <GalleryPreview collections={bonsaiCollections} />

        <TestimonialsSection />

        <NewsletterSection />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-green-700 hover:scale-110 z-50 ${
          scrollDirection === "down"
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
