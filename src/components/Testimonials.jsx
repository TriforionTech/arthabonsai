import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

// Import video
import testimonialVideo from "/src/assets/testimonial-main.mp4";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Siti Rahmawati",
      rating: 5,
      text: "Artha Bonsai benar-benar membawa ketenangan di rumah saya. Pelayanannya sangat ramah dan kualitas tanamannya luar biasa!",
    },
    {
      id: 2,
      name: "Daniel Santoso",
      rating: 4,
      text: "Setiap bonsai memiliki karakter unik. Saya kagum dengan detail dan keindahan karya Artha Bonsai. Highly recommended!",
    },
    {
      id: 3,
      name: "Maria Wijaya",
      rating: 5,
      text: "Pengiriman cepat dan packaging sangat aman. Bonsai sampai dalam kondisi perfect!",
    },
    {
      id: 4,
      name: "Budi Pratama",
      rating: 5,
      text: "Expert advice yang diberikan sangat membantu merawat bonsai dengan benar. Terima kasih Artha Bonsai!",
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [totalSlides]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentTestimonials = testimonials.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-8 lg:px-12 bg-green-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom kiri: Video lingkaran */}
          <div className="flex justify-center h-full order-2 lg:order-1">
            <div className="relative">
              {/* Video dalam bentuk lingkaran */}
              <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] shadow-2xl border-8 border-white">
                <video
                  src={testimonialVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Optional: Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-300 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-200 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Kolom kanan: Testimonials content */}
          <div
            className="flex flex-col h-full order-1 lg:order-2"
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
          >
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest text-green-600 font-semibold mb-2">
                Testimonial
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-4">
                Words From Our Customers
              </h2>
              <p className="text-gray-600 text-lg max-w-prose">
                Discover what our satisfied customers have to say about their
                experience.
              </p>
            </div>
            <div className="flex-1">
              <div
                className={`grid grid-cols-1 ${
                  itemsPerSlide > 1 ? "sm:grid-cols-2" : ""
                } gap-6 mb-8`}
              >
                {currentTestimonials.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-green-100 h-full flex flex-col"
                  >
                    <div className="flex gap-1 mb-4">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      "{item.text}"
                    </p>
                    <p className="text-green-800 font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-green-600" : "bg-green-300"
                    } hover:bg-green-500`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
