import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Data koleksi bonsai (ini bisa nanti diintegrasikan dengan database)
  const bonsaiCollection = [
    {
      id: 1,
      name: "Ficus Benjamina Classic",
      category: "ficus",
      age: "15 tahun",
      height: "45 cm",
      price: "Rp 2.500.000",
      image: "/api/placeholder/300/300",
      description:
        "Bonsai ficus klasik dengan batang yang kokoh dan daun hijau mengkilap",
      style: "Informal Upright",
      difficulty: "Pemula",
    },
    {
      id: 2,
      name: "Juniper Cascade",
      category: "juniper",
      age: "20 tahun",
      height: "35 cm",
      price: "Rp 4.200.000",
      image: "/api/placeholder/300/300",
      description:
        "Juniper dengan gaya cascade yang memukau, hasil karya bertahun-tahun",
      style: "Cascade",
      difficulty: "Menengah",
    },
    {
      id: 3,
      name: "Maple Momiji Autumn",
      category: "maple",
      age: "12 tahun",
      height: "38 cm",
      price: "Rp 3.800.000",
      image: "/api/placeholder/300/300",
      description:
        "Maple Jepang dengan warna daun merah mempesona di musim gugur",
      style: "Informal Upright",
      difficulty: "Lanjutan",
    },
    {
      id: 4,
      name: "Pine Mountain Spirit",
      category: "pine",
      age: "25 tahun",
      height: "55 cm",
      price: "Rp 6.500.000",
      image: "/api/placeholder/300/300",
      description:
        "Pine tua dengan karakter kuat, mencerminkan ketahanan gunung",
      style: "Windswept",
      difficulty: "Lanjutan",
    },
    {
      id: 5,
      name: "Serissa Snowflake",
      category: "flowering",
      age: "8 tahun",
      height: "25 cm",
      price: "Rp 1.800.000",
      image: "/api/placeholder/300/300",
      description: "Bonsai berbunga putih kecil yang cantik sepanjang tahun",
      style: "Informal Upright",
      difficulty: "Menengah",
    },
    {
      id: 6,
      name: "Bougainvillea Rainbow",
      category: "flowering",
      age: "10 tahun",
      height: "40 cm",
      price: "Rp 2.200.000",
      image: "/api/placeholder/300/300",
      description: "Bougainvillea dengan bunga warna-warni yang memukau",
      style: "Informal Upright",
      difficulty: "Pemula",
    },
  ];

  const categories = [
    { id: "all", name: "Semua", icon: "🌿" },
    { id: "ficus", name: "Ficus", icon: "🌳" },
    { id: "juniper", name: "Juniper", icon: "🌲" },
    { id: "maple", name: "Maple", icon: "🍁" },
    { id: "pine", name: "Pine", icon: "🌲" },
    { id: "flowering", name: "Berbunga", icon: "🌸" },
  ];

  // Filter bonsai berdasarkan kategori dan pencarian
  const filteredBonsai = bonsaiCollection.filter((bonsai) => {
    const matchesCategory =
      selectedCategory === "all" || bonsai.category === selectedCategory;
    const matchesSearch =
      bonsai.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bonsai.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Pemula":
        return "bg-green-100 text-green-800";
      case "Menengah":
        return "bg-yellow-100 text-yellow-800";
      case "Lanjutan":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Koleksi Bonsai Kami
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Temukan keindahan dan ketenangan dalam setiap karya seni hidup
              yang telah dipelihara dengan penuh cinta dan dedikasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
                <span>🏆</span>
                <span>Juara Kontes Internasional</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
                <span>🌱</span>
                <span>30+ Tahun Pengalaman</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
                <span>⭐</span>
                <span>100+ Koleksi Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari bonsai impian Anda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Kategori Bonsai
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-300"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Menampilkan{" "}
            <span className="font-bold text-green-600">
              {filteredBonsai.length}
            </span>{" "}
            bonsai
            {selectedCategory !== "all" && (
              <span>
                {" "}
                dalam kategori{" "}
                <span className="font-bold">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Bonsai Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBonsai.map((bonsai) => (
            <div
              key={bonsai.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={bonsai.image}
                  alt={bonsai.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                      bonsai.difficulty
                    )}`}
                  >
                    {bonsai.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                  {bonsai.style}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {bonsai.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {bonsai.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Umur</div>
                    <div className="font-semibold text-gray-800">
                      {bonsai.age}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Tinggi</div>
                    <div className="font-semibold text-gray-800">
                      {bonsai.height}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-green-600">
                    {bonsai.price}
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200">
                      Detail
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                      Hubungi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBonsai.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p className="text-gray-600 mb-6">
              Coba ubah kata kunci pencarian atau pilih kategori lain
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tidak Menemukan Bonsai yang Anda Cari?
          </h2>
          <p className="text-xl mb-8">
            Kami dengan senang hati membantu Anda menemukan bonsai yang sempurna
            atau bahkan membuat pesanan khusus sesuai keinginan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Konsultasi Gratis
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-700 transition-colors duration-200">
              Hubungi Pak Arpai
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Pengiriman Aman</h3>
              <p className="text-gray-600">
                Packaging khusus untuk memastikan bonsai sampai dengan selamat
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Panduan Perawatan</h3>
              <p className="text-gray-600">
                Setiap pembelian dilengkapi dengan panduan perawatan detail
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Garansi Kualitas</h3>
              <p className="text-gray-600">
                Garansi kesehatan bonsai dan konsultasi gratis selamanya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
