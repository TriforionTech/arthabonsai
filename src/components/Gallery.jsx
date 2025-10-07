import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // CHANGE: Struktur data diubah untuk memiliki ID unik
  const images = [
    { id: 1, src: "/src/assets/gallery1.webp" },
    { id: 2, src: "/src/assets/gallery2.webp" },
    { id: 3, src: "/src/assets/gallery1.webp" },
    { id: 4, src: "/src/assets/gallery2.webp" },
    { id: 5, src: "/src/assets/gallery1.webp" },
    { id: 6, src: "/src/assets/gallery2.webp" },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // CHANGE: Logika auto-play disempurnakan untuk pause on hover
  const startSlider = () => {
    intervalRef.current = setInterval(nextSlide, 3500);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  const calculateStyle = (index) => {
    const distance = index - currentIndex;
    const adjustedDistance = (distance + images.length) % images.length;
    const effectiveDistance =
      adjustedDistance > images.length / 2
        ? adjustedDistance - images.length
        : adjustedDistance;
    return {
      x: effectiveDistance * 200, // Sedikit menambah jarak
      scale: 1 - Math.abs(effectiveDistance) * 0.25,
      opacity: 1 - Math.abs(effectiveDistance) * 0.4,
      zIndex: 30 - Math.abs(effectiveDistance) * 5,
      filter: `blur(${Math.abs(effectiveDistance) * 1}px)`,
    };
  };

  return (
    <section id="gallery" className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-green-600 font-semibold mb-3">
            Our Gallery
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-4">
            A Glimpse of Our Artistry
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Setiap pohon memiliki kisah dan keindahan tersendiri. Berikut
            beberapa hasil karya terbaik kami.
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto h-[400px] md:h-[600px] lg:h-[700px]"
          // CHANGE: Event listener untuk pause on hover
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <div className="relative flex items-center justify-center h-full">
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  // CHANGE: Menggunakan key dari ID unik
                  key={image.id}
                  className="absolute cursor-pointer rounded-2xl shadow-2xl overflow-hidden"
                  animate={calculateStyle(index)}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  whileHover={{
                    scale: index === currentIndex ? 1.1 : 1.05,
                    zIndex: 50,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: "clamp(280px, 40vw, 600px)",
                    aspectRatio: "4/3",
                  }}
                >
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CHANGE: Padding & aria-label ditambahkan */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8 text-green-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8 text-green-800" />
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-600 scale-125"
                  : "bg-green-300 hover:bg-green-400"
              }`}
              // CHANGE: Aria-label ditambahkan
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          {/* CHANGE: Menggunakan motion.a dengan link yang lebih sesuai */}
          <motion.a
            href="/gallery"
            className="bg-green-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-green-700 transition text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Gallery
          </motion.a>
        </div>
      </div>
    </section>
  );
}
