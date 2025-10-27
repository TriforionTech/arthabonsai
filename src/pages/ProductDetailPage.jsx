import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { getBonsaiById, bonsaiCollections } from "../data/collections";

// Icons (Tetap sama)
const ArrowLeftIcon = () => (
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
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const CheckIcon = () => (
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
);

const TruckIcon = () => (
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
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  </svg>
);

const ShieldIcon = () => (
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
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const LeafIcon = () => (
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
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const bonsai = getBonsaiById(parseInt(id));

    if (bonsai) {
      setProduct(bonsai);
      setSelectedImage(0);

      // Get related products from same category
      const related = bonsaiCollections
        .filter(
          (item) => item.category === bonsai.category && item.id !== bonsai.id
        )
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  // Fungsi Badge Perawatan (Versi Light Mode)
  const getCareColor = (care) => {
    switch (care) {
      case "Beginner":
        return "text-green-800 bg-green-100";
      case "Intermediate":
        return "text-yellow-800 bg-yellow-100";
      case "Advanced":
        return "text-red-800 bg-red-100";
      default:
        return "text-gray-800 bg-gray-100";
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-24">
          {" "}
          {/* Tambahkan padding di sini juga */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Produk tidak ditemukan
          </h2>
          <button
            onClick={() => navigate("/collections")}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Kembali ke Koleksi
          </button>
        </div>
      </div>
    );
  }

  const allImages = [product.images.thumbnail, ...product.images.gallery];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* =================================
        PERBAIKAN DI SINI:
        Menambahkan 'pt-24' (6rem) untuk memberi ruang bagi navbar fixed.
        Menghapus 'py-4' dari div dalam dan menambah 'pb-4' di sini.
        =================================
      */}
      <div className="bg-green-600 shadow-sm border-b border-gray-200 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-white">
            <Link to="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/collections"
              className="hover:text-green-600 transition-colors"
            >
              Collections
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors mb-8"
          >
            <ArrowLeftIcon />
            <span>Kembali</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <img
                  src={allImages[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-green-600 ring-2 ring-green-200"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600">{product.subtitle}</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-5xl font-bold text-green-700">
                  Rp {product.price.toLocaleString()}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getCareColor(
                    product.specs.care
                  )}`}
                >
                  {product.specs.care}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Spesifikasi
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Tinggi</p>
                    <p className="text-gray-900 font-semibold">
                      {product.specs.height}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Ukuran Pot</p>
                    <p className="text-gray-900 font-semibold">
                      {product.specs.potSize}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Umur</p>
                    <p className="text-gray-900 font-semibold">{product.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Musim</p>
                    <p className="text-gray-900 font-semibold">
                      {product.specs.season}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 font-semibold">Jumlah:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg text-gray-900 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center text-gray-900 font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg text-gray-900 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-green-300">
                  Tambah ke Keranjang
                </button>
                <button className="w-full py-4 bg-transparent hover:bg-green-50 border border-green-600 text-green-700 font-bold rounded-lg transition-colors">
                  Beli Sekarang
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-start space-x-3">
                  <TruckIcon className="text-green-600" />
                  <div>
                    <p className="text-gray-900 font-semibold">Gratis Ongkir</p>
                    <p className="text-gray-600 text-sm">
                      Untuk pembelian di atas Rp 1.000.000
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldIcon className="text-green-600" />
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Garansi Kualitas
                    </p>
                    <p className="text-gray-600 text-sm">100% original</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <LeafIcon className="text-green-600" />
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Perawatan Gratis
                    </p>
                    <p className="text-gray-600 text-sm">
                      Konsultasi selamanya
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckIcon className="text-green-600" />
                  <div>
                    <p className="text-gray-900 font-semibold">Certified</p>
                    <p className="text-gray-600 text-sm">Premium quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Panduan Perawatan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-700">Penyiraman</h3>
                <p className="text-gray-700">
                  Siram ketika permukaan tanah mulai mengering. Sesuaikan dengan
                  musim dan kondisi lingkungan.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-700">Cahaya</h3>
                <p className="text-gray-700">
                  Letakkan di tempat yang mendapat cahaya matahari tidak
                  langsung selama 4-6 jam per hari.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-700">
                  Pemangkasan
                </h3>
                <p className="text-gray-700">
                  Lakukan pemangkasan rutin untuk menjaga bentuk dan mendorong
                  pertumbuhan cabang baru.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Produk Terkait
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-green-400 transition-all"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.images.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-gray-900 font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-green-700 font-bold text-lg">
                        Rp {item.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
