import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle, Truck } from "lucide-react";

export default function HowToOrder() {
  const steps = [
    {
      id: 1,
      icon: <MessageCircle className="w-10 h-10 text-green-700" />,
      title: "Consult & Choose",
      description:
        "Hubungi kami untuk konsultasi dan pilih bonsai yang sesuai dengan keinginan Anda.",
    },
    {
      id: 2,
      icon: <ShoppingCart className="w-10 h-10 text-green-700" />,
      title: "Order & Payment",
      description:
        "Lakukan pemesanan dan pembayaran dengan aman melalui metode yang tersedia.",
    },
    {
      id: 3,
      icon: <Truck className="w-10 h-10 text-green-700" />,
      title: "Delivery & Care",
      description:
        "Kami kirim bonsai Anda dengan aman, lengkap dengan panduan perawatan.",
    },
  ];

  return (
    <section id="how-to-order" className="w-full py-20 bg-green-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-green-600 font-semibold">
            How To Order
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-2">
            Order in 3 Easy Steps
          </h2>
          {/* CHANGE: Margin diubah dari mt-3 menjadi mt-4 */}
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Proses mudah, pelayanan cepat, dan kualitas terjamin. Wujudkan
            keindahan alam di rumah Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* CHANGE: Ikon dibungkus untuk aksen visual */}
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
                {step.icon}
              </div>
              {/* CHANGE: Margin diubah dari mb-3 menjadi mb-2 */}
              <h4 className="text-xl font-semibold text-green-800 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
