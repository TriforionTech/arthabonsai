import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Apakah bonsai di Artha Bonsai bisa dikirim ke luar kota?",
      answer:
        "Ya, kami melayani pengiriman ke seluruh Indonesia dengan pengemasan aman agar bonsai tetap sehat dan utuh saat sampai di tujuan.",
    },
    {
      question: "Apakah saya bisa request jenis bonsai tertentu?",
      answer:
        "Tentu! Kami menerima pesanan khusus sesuai jenis pohon, ukuran, maupun gaya bonsai yang Anda inginkan. Hubungi kami untuk konsultasi lebih lanjut.",
    },
    {
      question: "Bagaimana cara merawat bonsai agar tetap sehat?",
      answer:
        "Setiap pembelian bonsai akan disertai panduan perawatan detail. Secara umum, pastikan bonsai mendapat cahaya cukup, disiram secara rutin, dan dipangkas sesuai kebutuhan.",
    },
    {
      question: "Apakah tersedia pelatihan atau workshop bonsai?",
      answer:
        "Ya, kami rutin mengadakan kelas dan workshop bonsai bagi pemula hingga tingkat lanjut. Informasi jadwal akan diumumkan di media sosial kami.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-20 lg:py-24 bg-green-50 border-t border-gray-100"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-green-600 font-semibold mb-2">
            Frequently Asked Questions
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Find Answers to Your Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Berikut beberapa pertanyaan yang sering diajukan pelanggan kami.
            Semoga membantu Anda mengenal Artha Bonsai lebih dekat 🌿
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              // CHANGE: Menggunakan key yang lebih stabil
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                // CHANGE: Padding diseragamkan menjadi p-6
                className="w-full flex justify-between items-center p-6 text-left hover:bg-green-50/50 transition-colors rounded-xl"
              >
                <span className="font-semibold text-green-900 text-lg pr-6 leading-normal">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-green-700 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {/* CHANGE: Padding diseragamkan menjadi p-6 */}
                    <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed border-t border-green-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
          {/* CHANGE: Menggunakan tag <a> dengan styling konsisten */}
          <a
            href="#location" // Mengarah ke section lokasi/kontak
            className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
