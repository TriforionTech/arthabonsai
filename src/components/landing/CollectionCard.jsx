import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { generateBonsaiUrl } from "../../data/collections";

export default function CollectionCard({ item, index, priority = false }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title} bonsai details`}
      onClick={() => (window.location.href = generateBonsaiUrl(item))}
    >
      <div className="relative w-full h-80 overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            <div className="w-full h-full bg-gray-300" />
          </div>
        )}

        {/* Main Image */}
        <img
          ref={imgRef}
          src={
            imageError
              ? "/src/assets/images/placeholder-bonsai.webp"
              : item.images.thumbnail
          }
          alt={`${item.title} - ${item.subtitle}`}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleImageLoad}
          onError={handleImageError}
          decoding="async"
        />

        {/* Age Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 right-4 z-20"
        >
          <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full">
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
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              item.category === "premium"
                ? "bg-amber-500 text-white"
                : item.category === "classic"
                ? "bg-blue-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-green-400">
                    ${item.price}
                  </span>
                  <p className="text-xs text-gray-300">
                    {item.specs.care} care
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg text-sm font-medium transition-all shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle detail view
                  }}
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
