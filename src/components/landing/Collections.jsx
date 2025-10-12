import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bonsaiCollections } from "../../data/collections";
import CollectionCard from "./CollectionCard";

export default function Collections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized calculations untuk performa lebih baik
  const totalPages = useMemo(
    () => Math.ceil(bonsaiCollections.length / itemsPerPage),
    [itemsPerPage]
  );

  const currentItems = useMemo(
    () =>
      bonsaiCollections.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
      ),
    [currentIndex, itemsPerPage]
  );

  // Optimized resize handler with debounce
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    let newItemsPerPage;

    if (width < 640) newItemsPerPage = 1;
    else if (width < 1024) newItemsPerPage = 2;
    else if (width < 1280) newItemsPerPage = 3;
    else newItemsPerPage = 4;

    if (newItemsPerPage !== itemsPerPage) {
      setItemsPerPage(newItemsPerPage);
      setCurrentIndex(0); // Reset ke halaman pertama
    }
  }, [itemsPerPage]);

  useEffect(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  const nextSlide = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsLoading(false), 300);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsLoading(false), 300);
  }, [totalPages]);

  const goToPage = useCallback(
    (index) => {
      if (index !== currentIndex) {
        setIsLoading(true);
        setCurrentIndex(index);
        setTimeout(() => setIsLoading(false), 300);
      }
    },
    [currentIndex]
  );

  return (
    <section
      id="collections"
      className="w-full py-20 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-4">
            Our Collections
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Where every tree tells a story of patience, artistry, and natural
            beauty.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows untuk Desktop */}
          <div className="hidden lg:flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-[108%] left-1/2 -translate-x-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              disabled={isLoading}
              className="p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              aria-label="Previous collection"
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
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              disabled={isLoading}
              className="p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              aria-label="Next collection"
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
            </motion.button>
          </div>

          {/* Collections Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`grid gap-6 lg:gap-8 ${
                itemsPerPage === 1
                  ? "grid-cols-1"
                  : itemsPerPage === 2
                  ? "grid-cols-2"
                  : itemsPerPage === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
            >
              {currentItems.map((item, index) => (
                <CollectionCard
                  key={item.id}
                  item={item}
                  index={index}
                  priority={index < 2} // Priority loading untuk 2 item pertama
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center items-center space-x-6 mt-12">
            <button
              onClick={prevSlide}
              disabled={isLoading}
              className="p-3 rounded-full bg-white shadow-md border disabled:opacity-50"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 text-green-700"
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

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-green-700 scale-125"
                      : "bg-green-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isLoading}
              className="p-3 rounded-full bg-white shadow-md border disabled:opacity-50"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 text-green-700"
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
