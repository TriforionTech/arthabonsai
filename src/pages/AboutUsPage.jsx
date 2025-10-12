import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Impor video (pastikan path ini sesuai dengan struktur proyek Anda)
import aboutVideo from "/src/assets/videos/about-animation.mp4";

// Impor gambar (ganti dengan gambar-gambar relevan dari proyek Anda)
import galleryImg1 from "/src/assets/images/landing/gallery1.webp";
import galleryImg2 from "/src/assets/images/landing/gallery2.webp";
import founderImg from "/src/assets/images/landing/bonsai2.webp"; // Contoh gambar founder

// Komponen Ikon untuk digunakan di dalam Blurbs/Features
const IconWrapper = ({ children }) => (
  <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
    {children}
  </div>
);

// Komponen untuk FAQ (Accordion)
const FaqItem = ({ title, children }) => (
  <details className="w-full bg-white border border-gray-200 rounded-lg cursor-pointer">
    <summary className="p-6 text-lg font-semibold text-green-800">
      {title}
    </summary>
    <div className="px-6 pb-6 text-gray-600">{children}</div>
  </details>
);

export default function AboutUsPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />

      <main>
        {/* 1. Hero Section - Terinspirasi dari Referensi */}
        <section
          className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${galleryImg1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h5 className="text-lg md:text-xl font-bold uppercase tracking-[0.5em] text-gray-200 mb-4">
              About
            </h5>
            <h1 className="text-4xl md:text-6xl font-bold">
              About Us <br />& Our Passion
            </h1>
          </div>
        </section>

        {/* 2. Intro Blurbs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <IconWrapper>
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                </IconWrapper>
                <h5 className="text-xl font-semibold text-green-800">
                  From Malang
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <IconWrapper>
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </IconWrapper>
                <h5 className="text-xl font-semibold text-green-800">
                  20+ Years Experience
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <IconWrapper>
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </IconWrapper>
                <h5 className="text-xl font-semibold text-green-800">
                  100+ Customers
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <IconWrapper>
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
                    />
                  </svg>
                </IconWrapper>
                <h5 className="text-xl font-semibold text-green-800">
                  Starting @1jt/bonsai
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Story Section with Video */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h6 className="text-md font-bold uppercase tracking-widest text-green-600 mb-2">
              History
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Malang, est. 2000s
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
              It all began in a humble apple orchard, where Pak Arpai first
              discovered his passion for nurturing and shaping living art. What
              started as a simple appreciation for nature's beauty evolved into
              a lifelong dedication to the ancient art of bonsai. Through years
              of patient cultivation, Artha Bonsai now stands as a testament to
              the power of patience, dedication, and the profound connection
              between humans and nature.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <video
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* 4. Founder Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-md mx-auto px-6 text-center">
            <img
              src={founderImg}
              alt="Pak Arpai, Founder of Artha Bonsai"
              className="w-40 h-40 mx-auto rounded-full object-cover mb-6 shadow-lg"
            />
            <h6 className="text-md font-bold uppercase tracking-widest text-green-600 mb-2">
              Your Host
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Pak Arpai
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With over two decades of experience, Pak Arpai has transformed
              from a simple orchard keeper into an internationally recognized
              master of the art. His philosophy centers on the belief that
              bonsai is not just about shaping trees, but about cultivating
              patience, mindfulness, and a deep connection with nature.
            </p>
          </div>
        </section>

        {/* 5. Our Values/Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-left">
                <h5 className="text-xl font-bold text-green-800 mb-3">
                  Patience
                </h5>
                <p className="text-gray-600">
                  True artistry takes time. Our creations emerge through mindful
                  cultivation over years.
                </p>
              </div>
              <div className="text-left">
                <h5 className="text-xl font-bold text-green-800 mb-3">
                  Passion
                </h5>
                <p className="text-gray-600">
                  Driven by an unwavering love for the art and a deep respect
                  for the living sculptures we nurture.
                </p>
              </div>
              <div className="text-left">
                <h5 className="text-xl font-bold text-green-800 mb-3">
                  Community
                </h5>
                <p className="text-gray-600">
                  Building bridges between generations of artists and fostering
                  a supportive community.
                </p>
              </div>
              <div className="text-left">
                <h5 className="text-xl font-bold text-green-800 mb-3">
                  Authenticity
                </h5>
                <p className="text-gray-600">
                  Each bonsai has a unique story and character, shaped with
                  genuine care and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ Section - Terinspirasi dari Referensi */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-12">
              <h6 className="text-md font-bold uppercase tracking-widest text-green-600 mb-2">
                Have a Question?
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                Policies & F.A.Q.
              </h2>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <FaqItem title="Bagaimana cara merawat bonsai?">
                  <p>
                    Perawatan bonsai meliputi penyiraman rutin, pemupukan
                    berkala, pemangkasan untuk menjaga bentuk, dan penggantian
                    pot setiap beberapa tahun.
                  </p>
                </FaqItem>
                <FaqItem title="Apakah bonsai bisa dikirim ke luar kota?">
                  <p>
                    Ya, kami menyediakan layanan pengiriman ke seluruh Indonesia
                    dengan packing kayu yang aman untuk memastikan bonsai Anda
                    tiba dalam kondisi sempurna.
                  </p>
                </FaqItem>
              </div>
              <div className="space-y-4">
                <FaqItem title="Berapa lama bonsai bisa hidup?">
                  <p>
                    Dengan perawatan yang tepat, bonsai dapat hidup selama
                    puluhan hingga ratusan tahun, menjadi warisan yang tak
                    ternilai.
                  </p>
                </FaqItem>
                <FaqItem title="Apakah ada garansi?">
                  <p>
                    Kami memberikan garansi pengiriman. Jika bonsai rusak saat
                    tiba, kami akan menggantinya dengan yang baru. Hubungi kami
                    maksimal 1x24 jam setelah barang diterima.
                  </p>
                </FaqItem>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Call to Action Section */}
        <section className="bg-green-700 text-white">
          <div className="max-w-screen-xl mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div>
                <h6 className="text-md font-bold uppercase tracking-widest mb-2">
                  Visit Malang in Style
                </h6>
                <h2 className="text-3xl md:text-4xl font-bold">
                  We Have a Bonsai for You!
                </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <a
                  href="/collection"
                  className="inline-block px-10 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-200 transition"
                >
                  Book a Bonsai
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
