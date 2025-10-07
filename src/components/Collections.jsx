import { useState, useEffect } from "react";

// Import semua gambar
import bonsai1 from "/src/assets/bonsai1.webp";
import bonsai2 from "/src/assets/bonsai2.webp";
import bonsai3 from "/src/assets/bonsai3.webp";
import bonsai4 from "/src/assets/bonsai4.webp";

export default function Collections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const items = [
    {
      id: 1,
      image: bonsai1,
      title: "Japanese Maple",
      subtitle: "Elegant & Serene",
      price: "$299",
      age: "15 Years",
    },
    {
      id: 2,
      image: bonsai2,
      title: "Pine Bonsai",
      subtitle: "Ancient Wisdom",
      price: "$459",
      age: "25 Years",
    },
    {
      id: 3,
      image: bonsai3,
      title: "Juniper Classic",
      subtitle: "Timeless Beauty",
      price: "$389",
      age: "12 Years",
    },
    {
      id: 4,
      image: bonsai4,
      title: "Flowering Cherry",
      subtitle: "Spring Delight",
      price: "$529",
      age: "18 Years",
    },
    {
      id: 5,
      image: bonsai1,
      title: "Zen Garden",
      subtitle: "Peaceful Harmony",
      price: "$649",
      age: "30 Years",
    },
    {
      id: 6,
      image: bonsai2,
      title: "Dragon Willow",
      subtitle: "Mystical Charm",
      price: "$429",
      age: "8 Years",
    },
    {
      id: 7,
      image: bonsai3,
      title: "Imperial Oak",
      subtitle: "Majestic Presence",
      price: "$799",
      age: "35 Years",
    },
    {
      id: 8,
      image: bonsai4,
      title: "Miniature Forest",
      subtitle: "Nature in Small",
      price: "$699",
      age: "22 Years",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  const currentItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section
      id="collections"
      className="w-full py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Our Collections</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Where every tree tells a story.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-[105%] left-1/2 -translate-x-1/2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Next"
            >
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`grid gap-8 ${
              itemsPerPage === 1
                ? "grid-cols-1"
                : itemsPerPage === 2
                ? "grid-cols-2"
                : "lg:grid-cols-4"
            }`}
          >
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
              >
                <div className="w-full h-[400px] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Age Badge */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center space-x-2 bg-black/70 text-white px-3 py-2 rounded-full">
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm font-semibold">{item.age}</span>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Konten Hover */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-6 transform opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {item.subtitle}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-semibold text-green-400">
                            {item.price}
                          </span>
                          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md border"
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-green-700" : "bg-green-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md border"
              aria-label="Next"
            >
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
