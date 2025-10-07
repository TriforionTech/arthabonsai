import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        {/* CHANGE: Grid diubah menjadi 5 kolom untuk layout yang lebih fleksibel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-green-700 pb-12">
          {/* Brand Column */}
          {/* CHANGE: Kolom brand mengambil 2/5 ruang di layar besar */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Artha Bonsai</h2>
            <p className="text-green-200 text-base leading-relaxed max-w-sm">
              Bonsai is not just a plant—it's a lifestyle. Artha Bonsai
              menghadirkan keindahan dan ketenangan alam ke rumah Anda.
            </p>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Information</h3>
            <ul className="space-y-3 text-green-200">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition">
                  Collections
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Collections Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Collections</h3>
            <ul className="space-y-3 text-green-200">
              <li>
                <a href="#" className="hover:text-white transition">
                  Bonsai Trees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Stay Connected</h3>
            {/* CHANGE: Ukuran ikon diperbesar menjadi w-6 h-6 */}
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                className="p-3 bg-green-800 rounded-full hover:bg-green-600 transition"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-green-800 rounded-full hover:bg-green-600 transition"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-green-800 rounded-full hover:bg-green-600 transition"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Ikuti kami untuk update terbaru dan promo spesial 🌿
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-green-300 text-base pt-10">
          <p>© {new Date().getFullYear()} Artha Bonsai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
