import React, { useState, useMemo, useCallback } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import {
  bonsaiCollections,
  getCategories,
  getBonsaiByCategory,
  getBonsaiByPrice,
  searchBonsai,
  categoryDescriptions,
} from "../data/collections";

// Hero background image
import heroBg from "../assets/images/landing/gallery1.webp";

// Icons untuk filter dan search
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

const ListIcon = () => (
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
      d="M4 6h16M4 10h16M4 14h16M4 18h16"
    />
  </svg>
);

// Komponen Filter Sidebar
const FilterSidebar = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  careLevel,
  onCareLevelChange,
}) => {
  const categories = getCategories();
  const careLevels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:shadow-none lg:bg-gray-50`}
    >
      <div className="h-full overflow-y-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h3 className="text-lg font-semibold text-gray-900">Filter</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
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
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Kategori</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value=""
                checked={selectedCategory === ""}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Semua Kategori</span>
            </label>
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-600 capitalize">
                  {category.replace("_", " ")}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Rentang Harga
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Minimum (Rp)
              </label>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  onPriceRangeChange({
                    ...priceRange,
                    min: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Maximum (Rp)
              </label>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  onPriceRangeChange({
                    ...priceRange,
                    max: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="1000"
              />
            </div>
          </div>
        </div>

        {/* Care Level Filter */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Level Perawatan
          </h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="careLevel"
                value=""
                checked={careLevel === ""}
                onChange={(e) => onCareLevelChange(e.target.value)}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Semua Level</span>
            </label>
            {careLevels.map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="radio"
                  name="careLevel"
                  value={level}
                  checked={careLevel === level}
                  onChange={(e) => onCareLevelChange(e.target.value)}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-600">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reset Filter */}
        <button
          onClick={() => {
            onCategoryChange("");
            onPriceRangeChange({ min: 0, max: 1000 });
            onCareLevelChange("");
          }}
          className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

// Komponen Card Bonsai untuk Grid View
const BonsaiCard = ({ bonsai }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-w-4 aspect-h-3">
      <img
        src={bonsai.images.thumbnail}
        alt={bonsai.title}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full capitalize">
          {bonsai.category}
        </span>
        <span className="text-xs text-gray-500">{bonsai.age}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {bonsai.title}
      </h3>
      <p className="text-sm text-gray-600 mb-2">{bonsai.subtitle}</p>
      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
        {bonsai.description}
      </p>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
        <div>
          <span className="font-medium text-gray-700">Tinggi:</span>
          <span className="ml-1 text-gray-600">{bonsai.specs.height}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Perawatan:</span>
          <span className="ml-1 text-gray-600">{bonsai.specs.care}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-green-700">
            Rp {bonsai.price.toLocaleString()}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Detail
          </button>
          <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            Pesan
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Komponen List Item untuk List View
const BonsaiListItem = ({ bonsai }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="flex">
      <div className="w-48 h-32 flex-shrink-0">
        <img
          src={bonsai.images.thumbnail}
          alt={bonsai.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full capitalize">
                {bonsai.category}
              </span>
              <span className="text-xs text-gray-500">{bonsai.age}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {bonsai.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{bonsai.subtitle}</p>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {bonsai.description}
            </p>

            <div className="grid grid-cols-4 gap-4 text-xs">
              <div>
                <span className="font-medium text-gray-700">Tinggi:</span>
                <span className="ml-1 text-gray-600">
                  {bonsai.specs.height}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Pot:</span>
                <span className="ml-1 text-gray-600">
                  {bonsai.specs.potSize}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Perawatan:</span>
                <span className="ml-1 text-gray-600">{bonsai.specs.care}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Musim:</span>
                <span className="ml-1 text-gray-600">
                  {bonsai.specs.season}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right ml-4">
            <div className="mb-4">
              <span className="text-2xl font-bold text-green-700">
                Rp {bonsai.price.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Lihat Detail
              </button>
              <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Komponen Pagination
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sebelumnya
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 text-sm font-medium border ${
            currentPage === page
              ? "bg-green-600 text-white border-green-600"
              : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Selanjutnya
      </button>
    </div>
  );
};

export default function CollectionPage() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [careLevel, setCareLevel] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' atau 'list'
  const [sortBy, setSortBy] = useState("name"); // 'name', 'price', 'age'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' atau 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtered and sorted data
  const filteredAndSortedData = useMemo(() => {
    let filtered = bonsaiCollections;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = searchBonsai(searchTerm.trim());
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Apply price filter
    if (priceRange.min > 0 || priceRange.max < 1000) {
      filtered = filtered.filter(
        (item) => item.price >= priceRange.min && item.price <= priceRange.max
      );
    }

    // Apply care level filter
    if (careLevel) {
      filtered = filtered.filter((item) => item.specs.care === careLevel);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "age":
          aValue = parseInt(a.age);
          bValue = parseInt(b.age);
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, careLevel, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, careLevel]);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[40vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h5 className="text-md font-semibold uppercase tracking-[0.3em] text-gray-300 mb-2">
            Koleksi Eksklusif
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold">Bonsai Collection</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Temukan bonsai impian Anda dari koleksi terlengkap dengan berbagai
            kategori dan tingkat perawatan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              careLevel={careLevel}
              onCareLevelChange={setCareLevel}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Cari bonsai berdasarkan nama, jenis, atau deskripsi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <FilterIcon />
                  Filter
                </button>

                {/* Sort Controls */}
                <div className="flex items-center gap-2">
                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [field, order] = e.target.value.split("-");
                      setSortBy(field);
                      setSortOrder(order);
                    }}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="name-asc">Nama A-Z</option>
                    <option value="name-desc">Nama Z-A</option>
                    <option value="price-asc">Harga Terendah</option>
                    <option value="price-desc">Harga Tertinggi</option>
                    <option value="age-asc">Umur Termuda</option>
                    <option value="age-desc">Umur Tertua</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-md p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <GridIcon />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <ListIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                Menampilkan {paginatedData.length} dari{" "}
                {filteredAndSortedData.length} bonsai
                {selectedCategory && (
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize">
                    {selectedCategory.replace("_", " ")}
                  </span>
                )}
              </p>
            </div>

            {/* Products Grid/List */}
            {paginatedData.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <SearchIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tidak ada bonsai ditemukan
                </h3>
                <p className="text-gray-500">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
              </div>
            ) : (
              <>
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedData.map((bonsai) => (
                      <BonsaiCard key={bonsai.id} bonsai={bonsai} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {paginatedData.map((bonsai) => (
                      <BonsaiListItem key={bonsai.id} bonsai={bonsai} />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Category Info Section */}
      {selectedCategory && categoryDescriptions[selectedCategory] && (
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
              Tentang {selectedCategory.replace("_", " ")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      <section className="bg-green-700 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-3xl font-bold">{bonsaiCollections.length}+</p>
              <p className="text-green-100">Total Koleksi</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{getCategories().length}+</p>
              <p className="text-green-100">Kategori</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-green-100">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-green-100">Garansi Kualitas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tidak Menemukan Yang Anda Cari?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kami juga menerima pesanan custom bonsai sesuai dengan keinginan dan
            budget Anda. Konsultasikan kebutuhan bonsai impian Anda dengan ahli
            kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
            >
              Konsultasi Gratis
            </a>
            <a
              href="/about"
              className="px-8 py-3 bg-gray-200 text-green-800 font-semibold rounded-full hover:bg-gray-300 transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
}
