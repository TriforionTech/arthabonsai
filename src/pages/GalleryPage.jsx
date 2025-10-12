import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useState, useMemo } from "react";

// Ganti dengan path gambar yang sesuai dari proyek Anda
// Saya akan menggunakan gambar-gambar yang sudah ada di proyek Anda sebagai contoh
import heroBg from "/src/assets/images/landing/gallery1.webp";
import bonsaiImg1 from "/src/assets/images/landing/bonsai1.webp";
import bonsaiImg2 from "/src/assets/images/landing/bonsai2.webp";
import bonsaiImg3 from "/src/assets/images/landing/bonsai3.webp";
import bonsaiImg4 from "/src/assets/images/landing/bonsai4.webp";
import galleryImg1 from "/src/assets/images/landing/gallery1.webp";
import galleryImg2 from "/src/assets/images/landing/gallery2.webp";
import recommendImg1 from "/src/assets/images/landing/recommend1.webp";
import recommendImg2 from "/src/assets/images/landing/recommend2.webp";

// --- Data Galeri (Contoh) ---
// Anda bisa mengganti ini dengan data dari API atau file JSON
const galleryItems = [
  {
    id: 1,
    src: bonsaiImg1,
    title: "Bonsai Serut",
    category: "Koleksi Unggulan",
  },
  {
    id: 2,
    src: bonsaiImg2,
    title: "Bonsai Beringin",
    category: "Ukuran Medium",
  },
  { id: 3, src: bonsaiImg3, title: "Bonsai Cemara", category: "Ukuran Medium" },
  { id: 4, src: bonsaiImg4, title: "Bonsai Azalea", category: "Ukuran Kecil" },
  {
    id: 5,
    src: galleryImg1,
    title: "Bonsai Sakura",
    category: "Koleksi Unggulan",
  },
  { id: 6, src: galleryImg2, title: "Bonsai Pinus", category: "Ukuran Besar" },
  {
    id: 7,
    src: recommendImg1,
    title: "Bonsai Maple",
    category: "Ukuran Kecil",
  },
  {
    id: 8,
    src: recommendImg2,
    title: "Bonsai Delima",
    category: "Ukuran Besar",
  },
  {
    id: 9,
    src: bonsaiImg1,
    title: "Bonsai Bougenville",
    category: "Koleksi Unggulan",
  },
];

const categories = [
  "Semua",
  "Koleksi Unggulan",
  "Ukuran Besar",
  "Ukuran Medium",
  "Ukuran Kecil",
];

// --- Komponen ---

// Komponen untuk setiap item di galeri
const GalleryItem = ({ src, title, onClick }) => (
  <div
    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <img
      src={src}
      alt={title}
      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h5 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        {title}
      </h5>
    </div>
  </div>
);

// Komponen Modal untuk menampilkan gambar lebih besar
const ImageModal = ({ src, title, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-contain max-h-[80vh]"
        />
        <h3 className="text-center text-xl font-bold mt-4 text-gray-800">
          {title}
        </h3>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [modalImage, setModalImage] = useState({ src: null, title: null });

  const filteredItems = useMemo(() => {
    if (activeCategory === "Semua") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openModal = (item) => {
    setModalImage({ src: item.src, title: item.title });
  };

  const closeModal = () => {
    setModalImage({ src: null, title: null });
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <section
          className="relative flex items-center justify-center h-[50vh] md:h-[60vh] bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h5 className="text-md md:text-lg font-semibold uppercase tracking-[0.3em] text-gray-300 mb-2">
              Our Gallery
            </h5>
            <h1 className="text-4xl md:text-6xl font-bold">Art of Patience</h1>
          </div>
        </section>

        {/* 2. Gallery Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <GalleryItem
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  onClick={() => openModal(item)}
                />
              ))}
            </div>

            {/* Pesan jika tidak ada item */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Tidak ada bonsai dalam kategori ini.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 3. Call to Action Section */}
        <section className="bg-green-50">
          <div className="max-w-screen-xl mx-auto px-6 py-16">
            <div className="text-center">
              <h6 className="text-md font-bold uppercase tracking-widest text-green-600 mb-2">
                Tertarik dengan Koleksi Kami?
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Hubungi Kami untuk Pemesanan
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-8">
                Setiap bonsai adalah karya seni yang unik. Jika Anda tertarik
                untuk memiliki salah satunya atau ingin membuat pesanan khusus,
                jangan ragu untuk menghubungi kami.
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      </main>

      <ImageModal
        src={modalImage.src}
        title={modalImage.title}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}
