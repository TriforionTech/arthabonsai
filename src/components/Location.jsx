import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="w-full py-20 bg-white border-t border-gray-100"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-widest text-green-600 font-semibold">
              Visit Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-2 mb-4 leading-tight">
              Own Your Dream Bonsai Today
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-prose">
              Kami siap membantu Anda menemukan bonsai impian. Hubungi kami atau
              kunjungi lokasi kami untuk melihat langsung koleksi terbaik Artha
              Bonsai.
            </p>

            {/* CHANGE: Tombol CTA ditambahkan untuk aksi yang lebih jelas */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition shadow-md"
              >
                Hubungi Kami (WhatsApp)
              </a>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.519902930921!2d112.52463787489394!3d-7.940536692086465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd627fa52cbb6cb%3A0x7e08eb0123f0d5c1!2sJl.%20Bukit%20Berbunga%20No.01%2C%20Sidomulyo%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065317!5e0!3m2!1sid!2sid!4v1696600000000!5m2!1sid!2sid"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Lihat Peta
              </a>
            </div>

            {/* Alamat & Sosial Media */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-gray-700">
                <MapPin className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
                <p className="text-base">
                  Jl. Bukit Berbunga No.01, Sidomulyo, Kec. Batu, Kota Batu,
                  Jawa Timur 65317. <br />
                  <span className="font-semibold">Jam Operasional:</span> 06.00
                  – 16.00 WIB
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition"
                  title="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition"
                  title="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Kolom kanan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            // CHANGE: Tinggi peta diperbesar untuk keseimbangan visual
            className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              title="Artha Bonsai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.126830502128!2d112.52220431527878!3d-7.88191298058284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78811812a0289d%3A0x6c75152a5611486!2sJl.%20Bukit%20Berbunga%2C%20Sidomulyo%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065317!5e0!3m2!1sen!2sid!4v1668498877682!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
