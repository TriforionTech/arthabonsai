import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useState } from "react";

// Ganti dengan path gambar yang sesuai dari proyek Anda
import contactHeroBg from "/src/assets/images/landing/gallery2.webp";
import founderImg from "/src/assets/images/landing/bonsai2.webp";

// Komponen untuk setiap item kontak (Ikon + Teks)
const ContactInfoBlurb = ({ icon, children }) => (
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-700 rounded-full">
        {icon}
      </div>
    </div>
    <div>
      <h5 className="text-md text-gray-700">{children}</h5>
    </div>
  </div>
);

// Komponen untuk setiap item informasi tambahan
const InfoDetailCard = ({ title, items }) => (
  <div className="border border-gray-200 rounded-lg p-6 h-full">
    <h5 className="text-xl font-bold text-green-800 mb-4">{title}</h5>
    <ul className="space-y-2 text-gray-600 list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Terima kasih! Pesan Anda telah terkirim.");
    // Di sini Anda bisa menambahkan logika untuk mengirim form ke backend atau API
    e.target.reset();
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <section
          className="relative flex items-center justify-center h-[50vh] md:h-[60vh] bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center px-4">
            <h5 className="text-md md:text-lg font-semibold uppercase tracking-[0.3em] text-gray-300 mb-2">
              Get in Touch
            </h5>
            <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          </div>
        </section>

        {/* 2. Contact Info Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <ContactInfoBlurb
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                Jl. Raya Tlekung No. 1, Junrejo, Kota Batu, Malang
              </ContactInfoBlurb>
              <ContactInfoBlurb
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              >
                (081) 234-567-890
              </ContactInfoBlurb>
              <ContactInfoBlurb
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                info@arthabonsai.com
              </ContactInfoBlurb>
              <div className="text-center md:text-right">
                <a
                  href="/collection"
                  className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
                >
                  Lihat Koleksi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Map Section */}
        <section className="bg-gray-100">
          <div className="w-full h-[500px]">
            {/* PENTING: Ganti `src` di bawah ini dengan link embed Google Maps Anda */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.693039010378!2d112.5744953153449!3d-7.926956694285851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78832de2f21ea3%3A0x10a653244e6f4812!2sTlekung%2C%20Junrejo%2C%20Batu%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1668234567890!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Artha Bonsai"
            ></iframe>
          </div>
        </section>

        {/* 4. Contact Form & Info Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Kolom Kiri: Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your Email Address"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      placeholder="Your Message"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {formStatus && (
                  <p className="mt-4 text-green-600">{formStatus}</p>
                )}
              </div>
              {/* Kolom Kanan: Info & Social Media */}
              <div className="space-y-8">
                <div>
                  <img
                    src={founderImg}
                    alt="Pak Arpai"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h6 className="font-bold text-green-800">
                    Pak Arpai, Founder
                  </h6>
                  <p className="text-gray-600">
                    Silakan hubungi kami untuk pertanyaan, kunjungan, atau
                    pemesanan khusus. Kami siap membantu Anda.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-green-800 mb-3">
                    Follow Us
                  </h5>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-green-700">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-700">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.21.002-3.583.013-4.849.07-2.73.124-4.043 1.43-4.167 4.167-.057 1.266-.069 1.636-.069 4.849s.012 3.583.069 4.849c.124 2.73 1.437 4.043 4.167 4.167 1.266.057 1.639.069 4.849.069s3.583-.012 4.849-.069c2.73-.124 4.043-1.437 4.167-4.167.057-1.266.069-1.636.069-4.849s-.012-3.583-.069-4.849c-.124-2.73-1.437-4.043-4.167-4.167-1.266-.057-1.639-.069-4.849-.069zm0 3.447c-2.932 0-5.306 2.374-5.306 5.306s2.374 5.306 5.306 5.306 5.306-2.374 5.306-5.306-2.374-5.306-5.306-5.306zm0 8.756c-1.905 0-3.449-1.544-3.449-3.45s1.544-3.45 3.449-3.45 3.449 1.544 3.449 3.45-1.544 3.45-3.449 3.45zm5.348-8.832c-.612 0-1.108.496-1.108 1.108s.496 1.108 1.108 1.108 1.108-.496 1.108-1.108-.496-1.108-1.108-1.108z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-700">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.43 0 4.72-.703 6.66-1.957l-1.408-2.61c-1.603.86-3.393 1.367-5.252 1.367-4.41 0-8-3.59-8-8s3.59-8 8-8c4.05 0 7.42 3.03 7.93 6.91l-2.43.01c-.13-2.18-1.96-3.92-4.25-3.92-2.39 0-4.33 1.94-4.33 4.33s1.94 4.33 4.33 4.33c1.1 0 2.1-.41 2.88-1.08L18.4 16.5c-2.29 2.13-5.44 3.5-8.9 3.5-6.07 0-11-4.93-11-11S5.93 1 12 1s11 4.93 11 11c0 2.3-2.31 4.36-2.31 4.36l-1.5-2.79c.14-.3.26-.61.34-.94.27-1.09.43-2.22.43-3.38 0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.33 0 2.58-.33 3.69-.91l1.4 2.6c-1.38.74-2.92 1.16-4.59 1.16z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-left mb-12">
              <h6 className="text-md font-bold uppercase tracking-widest text-green-600 mb-2">
                Information
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                Aturan & Kebijakan
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <InfoDetailCard
                title="Jam Operasional & Kunjungan"
                items={[
                  "Senin - Jumat: 09:00 - 17:00",
                  "Sabtu: 09:00 - 15:00",
                  "Minggu & Hari Libur: Tutup",
                  "Harap buat janji sebelum berkunjung.",
                  "Kunjungan di luar jam operasional dimungkinkan dengan perjanjian.",
                ]}
              />
              <InfoDetailCard
                title="Kebijakan Pembelian"
                items={[
                  "Harga yang tertera sudah final.",
                  "DP minimal 50% untuk pemesanan khusus.",
                  "Pembatalan pesanan khusus akan dikenakan potongan 25% dari DP.",
                  "Bonsai yang sudah dibeli tidak dapat ditukar atau dikembalikan.",
                ]}
              />
              <InfoDetailCard
                title="Aturan Galeri"
                items={[
                  "Dilarang menyentuh bonsai tanpa izin.",
                  "Anak-anak harus dalam pengawasan orang tua.",
                  "Dilarang merokok di area galeri.",
                  "Jaga kebersihan dan ketenangan.",
                  "Parkir di area yang telah disediakan.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="bg-green-800 text-white">
          <div className="max-w-screen-xl mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-6 md:mb-0">
                <h6 className="text-md font-bold uppercase tracking-widest text-gray-300 mb-2">
                  Find Your Perfect Bonsai
                </h6>
                <h2 className="text-3xl md:text-4xl font-bold">
                  We Have Vacancy!
                </h2>
              </div>
              <div>
                <a
                  href="/collection"
                  className="inline-block px-10 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
