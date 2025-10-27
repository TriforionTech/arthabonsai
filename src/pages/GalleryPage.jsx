import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import {
  bonsaiCollections,
  getCategories,
  getBonsaiByCategory,
  searchBonsai,
  categoryDescriptions,
} from "../data/collections";

// Hero background image
import heroBg from "../assets/images/landing/gallery2.webp";

// Icons
const SearchIcon = () => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const FilterIcon = () => (
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
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
    />
  </svg>
);

const GridIcon = () => (
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
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const MasonryIcon = () => (
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
      d="M19 11H5m14-7H5m14 14H5M5 15h14"
    />
  </svg>
);

const CloseIcon = () => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronLeftIcon = () => (
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
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon = () => (
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
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const InfoIcon = () => (
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
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ZoomIcon = () => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
    />
  </svg>
);

const HeartIcon = () => (
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
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

// Custom hook untuk Intersection Observer (Lazy Loading)
const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    if (node) observer.current.observe(node);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [node, options]);

  return [setNode, entry];
};

// Komponen Lazy Image dengan fade-in effect
const LazyImage = ({ src, alt, className, onClick, bonsai, imageIndex }) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-gray-200 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${className}`}
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {entry.isIntersecting && !loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Main Image */}
      {entry.isIntersecting && !error && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${error ? "hidden" : ""}`}
        />
      )}

      {/* Error placeholder */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <div className="text-gray-500 text-sm">Failed to load</div>
        </div>
      )}

      {/* Fixed overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        {/* Top Icons */}
        <div className="absolute top-4 right-4 flex gap-2 transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500">
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors">
            <HeartIcon />
          </button>
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors">
            <ZoomIcon />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500">
          <span className="px-3 py-1 bg-green-600/90 text-white text-xs font-bold rounded-full capitalize backdrop-blur-sm">
            {bonsai.category}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-white">
            <h4 className="font-bold text-sm mb-1 line-clamp-1">
              {bonsai.title}
            </h4>
            <p className="text-green-300 text-xs font-medium mb-1">
              {bonsai.subtitle}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-xs">{bonsai.age}</span>
              {bonsai.price && (
                <span className="text-green-400 font-bold text-xs">
                  Rp {(bonsai.price / 1000).toFixed(0)}K
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Center Zoom Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <div className="w-12 h-12 bg-black/30 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center">
            <ZoomIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ FIXED: Responsive Pagination Component
const ResponsivePagination = ({ currentPage, totalPages, onPageChange }) => {
  const [showAllPages, setShowAllPages] = useState(false);

  // Generate visible page numbers for desktop
  const getDesktopPages = () => {
    const visiblePages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          visiblePages.push(i);
        }
        visiblePages.push("...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        visiblePages.push(1, "...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          visiblePages.push(i);
        }
      } else {
        visiblePages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return visiblePages;
  };

  // Generate visible page numbers for mobile
  const getMobilePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (showAllPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set();
    pages.add(1); // Always show first page

    if (currentPage > 1) pages.add(currentPage - 1);
    pages.add(currentPage);
    if (currentPage < totalPages) pages.add(currentPage + 1);

    pages.add(totalPages); // Always show last page

    return Array.from(pages).sort((a, b) => a - b);
  };

  const desktopPages = getDesktopPages();
  const mobilePages = getMobilePages();

  return (
    <div className="mt-12">
      {/* Desktop Pagination */}
      <div className="hidden sm:flex justify-center">
        <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors border-r border-gray-200"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {/* Page Numbers */}
          <div className="flex">
            {desktopPages.map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="flex items-center justify-center px-4 py-3 text-gray-400 text-sm border-r border-gray-200 last:border-r-0"
                  >
                    ⋯
                  </span>
                );
              }

              const isCurrentPage = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`flex items-center justify-center px-4 py-3 text-sm font-medium border-r border-gray-200 last:border-r-0 transition-colors ${
                    isCurrentPage
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={isCurrentPage ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors border-l border-gray-200"
          >
            <span>Selanjutnya</span>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Pagination */}
      <div className="sm:hidden space-y-4">
        {/* Page Info */}
        <div className="text-center">
          <span className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
            Halaman{" "}
            <span className="font-semibold text-green-600">{currentPage}</span>{" "}
            dari <span className="font-semibold">{totalPages}</span>
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
          >
            <span>Selanjutnya</span>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Page Numbers */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1 bg-white rounded-lg p-2 shadow-sm border border-gray-200 max-w-full overflow-x-auto">
            {mobilePages.map((pageNum, index) => {
              const prevPage = mobilePages[index - 1];
              const showEllipsis = prevPage && pageNum - prevPage > 1;

              return (
                <React.Fragment key={pageNum}>
                  {showEllipsis && (
                    <span className="px-2 text-gray-400 text-sm flex-shrink-0">
                      ...
                    </span>
                  )}
                  <button
                    onClick={() => onPageChange(pageNum)}
                    className={`w-8 h-8 text-sm font-medium rounded-md flex-shrink-0 transition-colors ${
                      currentPage === pageNum
                        ? "bg-green-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                </React.Fragment>
              );
            })}

            {!showAllPages && totalPages > 5 && (
              <button
                onClick={() => setShowAllPages(true)}
                className="px-3 py-1 text-xs text-green-600 hover:bg-green-50 rounded-md flex-shrink-0 transition-colors"
              >
                Semua
              </button>
            )}
          </div>
        </div>

        {/* Jump to Page for large pagination */}
        {totalPages > 10 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-sm text-gray-600">Lompat ke:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                className="w-14 px-2 py-1 text-sm border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= totalPages) {
                      onPageChange(page);
                      e.target.value = "";
                    }
                  }
                }}
                placeholder={currentPage.toString()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Komponen Lightbox Modal
const Lightbox = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-4 z-10">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <InfoIcon />
            <div>
              <h3 className="font-semibold">{currentImage.bonsai.title}</h3>
              <p className="text-sm opacity-75">
                {currentImage.bonsai.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-75">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all z-10"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all z-10"
          >
            <ChevronRightIcon />
          </button>
        </>
      )}

      {/* Image */}
      <div className="max-w-[90vw] max-h-[80vh] relative">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          onClick={() => setIsZoomed(!isZoomed)}
          className={`max-w-full max-h-full object-contain cursor-zoom-${
            isZoomed ? "out" : "in"
          } transition-transform duration-300 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="text-white text-center">
          <div className="flex justify-center items-center gap-6 text-sm flex-wrap">
            <span className="px-3 py-1 bg-green-600 rounded-full capitalize">
              {currentImage.bonsai.category}
            </span>
            <span>Umur: {currentImage.bonsai.age}</span>
            <span>Tinggi: {currentImage.bonsai.specs.height}</span>
            <span>Perawatan: {currentImage.bonsai.specs.care}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Filter Categories
const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors lg:hidden"
      >
        <FilterIcon />
        <span>Kategori</span>
      </button>

      {/* Desktop Filter */}
      <div className="hidden lg:flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            selectedCategory === ""
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Semua
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Mobile Filter Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-20 lg:hidden">
          <div className="p-2">
            <button
              onClick={() => {
                onCategoryChange("");
                onToggle();
              }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md ${
                selectedCategory === ""
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Semua Kategori
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  onToggle();
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-md capitalize ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function GalleryPage() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [layoutMode, setLayoutMode] = useState("masonry");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(false);
  const [imagesPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  // Data preparation
  const allImages = useMemo(() => {
    let images = [];

    bonsaiCollections.forEach((bonsai) => {
      images.push({
        src: bonsai.images.thumbnail,
        alt: `${bonsai.title} - Thumbnail`,
        bonsai: bonsai,
        type: "thumbnail",
      });

      bonsai.images.gallery.forEach((imageSrc, index) => {
        images.push({
          src: imageSrc,
          alt: `${bonsai.title} - Gallery ${index + 1}`,
          bonsai: bonsai,
          type: "gallery",
        });
      });
    });

    return images;
  }, []);

  // Filter and search logic
  const filteredImages = useMemo(() => {
    let filtered = allImages;

    if (searchTerm.trim()) {
      const searchResults = searchBonsai(searchTerm.trim());
      const searchIds = new Set(searchResults.map((b) => b.id));
      filtered = filtered.filter((img) => searchIds.has(img.bonsai.id));
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (img) => img.bonsai.category === selectedCategory
      );
    }

    return filtered;
  }, [allImages, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Lightbox handlers
  const openLightbox = useCallback(
    (index) => {
      const globalIndex = (currentPage - 1) * imagesPerPage + index;
      setCurrentImageIndex(globalIndex);
      setLightboxOpen(true);
    },
    [currentPage, imagesPerPage]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  }, [filteredImages.length]);

  const categories = getCategories();

  // Generate consistent heights for masonry layout
  const getImageHeight = useCallback((index) => {
    const heights = ["h-48", "h-56", "h-64", "h-52", "h-60"];
    return heights[index % heights.length];
  }, []);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[50vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h5 className="text-md font-semibold uppercase tracking-[0.3em] text-gray-300 mb-2">
            Visual Journey
          </h5>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bonsai Gallery
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Jelajahi keindahan setiap detail dari koleksi bonsai terbaik kami
            melalui galeri foto berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Cari bonsai berdasarkan nama atau kategori..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              isOpen={categoryFilterOpen}
              onToggle={() => setCategoryFilterOpen(!categoryFilterOpen)}
            />

            {/* Layout Toggle */}
            <div className="flex bg-gray-100 rounded-md p-1">
              <button
                onClick={() => setLayoutMode("masonry")}
                className={`p-2 rounded ${
                  layoutMode === "masonry" ? "bg-white shadow-sm" : ""
                }`}
                title="Masonry Layout"
              >
                <MasonryIcon />
              </button>
              <button
                onClick={() => setLayoutMode("grid")}
                className={`p-2 rounded ${
                  layoutMode === "grid" ? "bg-white shadow-sm" : ""
                }`}
                title="Grid Layout"
              >
                <GridIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span>
              Menampilkan {paginatedImages.length} dari {filteredImages.length}{" "}
              foto
            </span>
            {selectedCategory && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full capitalize">
                {selectedCategory.replace("_", " ")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {paginatedImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <SearchIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada foto ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        ) : (
          <>
            {layoutMode === "masonry" ? (
              // Masonry Layout
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {paginatedImages.map((image, index) => (
                  <div
                    key={`${image.bonsai.id}-${image.type}-${index}`}
                    className="break-inside-avoid"
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      className={`w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${getImageHeight(
                        index
                      )}`}
                      onClick={() => openLightbox(index)}
                      bonsai={image.bonsai}
                      imageIndex={index}
                    />
                  </div>
                ))}
              </div>
            ) : (
              // Grid Layout
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedImages.map((image, index) => (
                  <LazyImage
                    key={`${image.bonsai.id}-${image.type}-${index}`}
                    src={image.src}
                    alt={image.alt}
                    className="aspect-square rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    onClick={() => openLightbox(index)}
                    bonsai={image.bonsai}
                    imageIndex={index}
                  />
                ))}
              </div>
            )}

            {/* ✅ FIXED: Responsive Pagination */}
            {totalPages > 1 && (
              <ResponsivePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>

      {/* Category Info Section */}
      {selectedCategory && categoryDescriptions[selectedCategory] && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 capitalize">
              Galeri {selectedCategory.replace("_", " ")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Koleksi Dalam Angka
            </h2>
            <p className="text-green-100">
              Statistik lengkap galeri bonsai kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-2">{allImages.length}+</p>
              <p className="text-green-100">Total Foto</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">
                {bonsaiCollections.length}+
              </p>
              <p className="text-green-100">Koleksi Bonsai</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">{categories.length}+</p>
              <p className="text-green-100">Kategori</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">HD</p>
              <p className="text-green-100">Kualitas Foto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tertarik dengan Koleksi Kami?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Lihat detail lengkap setiap bonsai, spesifikasi, dan cara
            perawatannya di halaman koleksi kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/collections"
              className="px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
            >
              Lihat Koleksi Lengkap
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-gray-200 text-green-800 font-semibold rounded-full hover:bg-gray-300 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />

      {/* Mobile filter overlay */}
      {categoryFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-10 lg:hidden"
          onClick={() => setCategoryFilterOpen(false)}
        />
      )}

      {/* Custom CSS */}
      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hide scrollbar but allow scrolling */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
