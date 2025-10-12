import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Ganti dengan path gambar yang sesuai dari proyek Anda
import heroBg from "/src/assets/images/landing/gallery1.webp";
import bonsaiImg1 from "/src/assets/images/landing/bonsai1.webp";
import bonsaiImg2 from "/src/assets/images/landing/bonsai2.webp";
import bonsaiImg3 from "/src/assets/images/landing/bonsai3.webp";
import bonsaiImg4 from "/src/assets/images/landing/bonsai4.webp";

// --- Data Koleksi Bonsai (Contoh) ---
// Anda bisa menggantinya dengan data dari API atau file JSON.
const bonsaiCollection = [
  {
    id: 1,
    name: "Bonsai Serut Juara",
    description:
      "Sebuah mahakarya yang terbentuk selama lebih dari 15 tahun. Memiliki lekuk batang yang eksotis dan percabangan yang rapat, melambangkan kekuatan dan keindahan alam.",
    price: "5.500.000",
    image: bonsaiImg1,
    gallery: [bonsaiImg2, bonsaiImg3], // Gambar tambahan
  },
  {
    id: 2,
    name: "Bonsai Beringin Elegan",
    description:
      "Dengan akar gantung yang kokoh dan daun yang rimbun, bonsai beringin ini membawa nuansa teduh dan agung. Cocok untuk menjadi pusat perhatian di ruangan Anda.",
    price: "3.200.000",
    image: bonsaiImg2,
    gallery: [bonsaiImg1, bonsaiImg4],
  },
  {
    id: 3,
    name: "Bonsai Cemara Anggun",
    description:
      "Menghadirkan keindahan pegunungan ke dalam rumah Anda. Bonsai cemara ini memiliki postur yang anggun dan daun yang hijau sepanjang tahun, simbol ketahanan.",
    price: "4.800.000",
    image: bonsaiImg3,
    gallery: [bonsaiImg1, bonsaiImg2],
  },
];

// --- Komponen ---

// Komponen untuk setiap item koleksi
const BonsaiCollectionItem = ({ bonsai, reverse = false }) => (
  <div className="max-w-screen-xl mx-auto">
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Kolom Gambar */}
      <div className="w-full lg:w-1/2">
        <div className="space-y-4">
          <img
            src={bonsai.image}
            alt={bonsai.name}
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
          <div className="grid grid-cols-2 gap-4">
            {bonsai.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${bonsai.name} gallery ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Kolom Teks */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-green-800 mb-4">
          {bonsai.name}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {bonsai.description}
        </p>
        <div className="mb-8">
          <h5 className="text-sm font-bold uppercase text-gray-500 tracking-wider">
            Harga
          </h5>
          <p className="text-3xl font-bold text-green-700">Rp {bonsai.price}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/contact"
            className="px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
          >
            Pesan Sekarang
          </a>
          <a
            href="#"
            className="px-8 py-3 bg-gray-200 text-green-800 font-semibold rounded-full hover:bg-gray-300 transition"
          >
            Info Detail
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Komponen untuk setiap fasilitas/layanan
const AmenityItem = ({ title, children }) => (
  <div>
    <h5 className="text-xl font-bold text-green-800 mb-2">{title}</h5>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

export default function CollectionPage() {
  return (
    <div className="font-sans bg-white text-gray-800">
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
              Accomodations
            </h5>
            <h1 className="text-4xl md:text-6xl font-bold">Koleksi & Karya</h1>
          </div>
        </section>

        {/* 2. Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-lg mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Karya Seni Hidup & Akomodasi Alam
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Setiap bonsai dalam koleksi kami adalah hasil dari dedikasi,
              kesabaran, dan cinta terhadap seni. Kami menawarkan berbagai jenis
              bonsai, mulai dari yang cocok untuk pemula hingga koleksi langka
              untuk para kolektor. Temukan karya seni hidup yang akan membawa
              ketenangan dan keindahan ke dalam ruang Anda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-green-700">50+</p>
                <h3 className="font-semibold text-gray-700 mt-2">
                  Koleksi Siap Jual
                </h3>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-green-700">15+</p>
                <h3 className="font-semibold text-gray-700 mt-2">
                  Jenis Pohon
                </h3>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-green-700">20+</p>
                <h3 className="font-semibold text-gray-700 mt-2">
                  Tahun Pengalaman
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Collection Items Section */}
        <section className="py-10 bg-gray-50">
          <div className="px-6 space-y-20">
            {bonsaiCollection.map((bonsai, index) => (
              <BonsaiCollectionItem
                key={bonsai.id}
                bonsai={bonsai}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {/* 4. Included Amenities Section */}
        <section className="py-20 bg-green-700 text-white">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h6 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-2">
              Fasilitas
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Setiap Pembelian Termasuk...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left bg-white text-gray-800 p-10 rounded-lg shadow-xl">
              <AmenityItem title="Pot Premium & Media Tanam">
                Setiap bonsai sudah ditanam dalam pot keramik berkualitas tinggi
                dengan media tanam khusus yang menjamin kesehatan akar.
              </AmenityItem>
              <AmenityItem title="Panduan Perawatan Detail">
                Anda akan mendapatkan buku panduan lengkap cara merawat bonsai
                Anda, mulai dari penyiraman, pemupukan, hingga pemangkasan.
              </AmenityItem>
              <AmenityItem title="Konsultasi Gratis Seumur Hidup">
                Kami menyediakan layanan konsultasi gratis via WhatsApp untuk
                membantu Anda merawat bonsai agar tetap tumbuh sehat dan indah.
              </AmenityItem>
              <AmenityItem title="Garansi Pengiriman">
                Kami menjamin bonsai tiba di tempat Anda dalam kondisi aman.
                Jika ada kerusakan saat pengiriman, kami akan menggantinya.
              </AmenityItem>
              <AmenityItem title="Bonus Pupuk Organik">
                Setiap pembelian disertai dengan paket perdana pupuk organik
                racikan khusus untuk menutrisi bonsai Anda selama 3 bulan
                pertama.
              </AmenityItem>
              <AmenityItem title="Video Tutorial Eksklusif">
                Dapatkan akses ke video tutorial cara melakukan pemangkasan
                dasar dan perawatan lanjutan yang dipandu langsung oleh Pak
                Arpai.
              </AmenityItem>
            </div>
          </div>
        </section>

        {/* 5. Call to Action Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h6 className="text-md font-bold uppercase tracking-widest text-green-600 mb-2">
              Ada Pertanyaan?
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Hubungi Pemilik
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-8">
              Jika Anda memiliki pertanyaan lebih lanjut tentang koleksi kami,
              ingin memesan bonsai custom, atau menjadwalkan kunjungan, jangan
              ragu untuk menghubungi kami.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
