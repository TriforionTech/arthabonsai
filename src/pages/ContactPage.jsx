import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { bonsaiCollections, getCategories } from "../data/collections";

// Import gambar
import contactHeroBg from "../assets/images/landing/gallery2.webp";
import founderImg from "../assets/images/landing/recommend1.webp";
import studioImg from "../assets/images/landing/gallery1.webp";
import workshopImg from "../assets/images/landing/recommend2.webp";
import bonsaiImg1 from "../assets/images/landing/bonsai1.webp";
import bonsaiImg2 from "../assets/images/landing/bonsai2.webp";

// Icons
const LocationIcon = () => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = () => (
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
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = () => (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.21.002-3.583.013-4.849.07-2.73.124-4.043 1.43-4.167 4.167-.057 1.266-.069 1.636-.069 4.849s.012 3.583.069 4.849c.124 2.73 1.437 4.043 4.167 4.167 1.266.057 1.639.069 4.849.069s3.583-.012 4.849-.069c2.73-.124 4.043-1.437 4.167-4.167.057-1.266.069-1.636.069-4.849s-.012-3.583-.069-4.849c-.124-2.73-1.437-4.043-4.167-4.167-1.266-.057-1.639-.069-4.849-.069zm0 3.447c-2.932 0-5.306 2.374-5.306 5.306s2.374 5.306 5.306 5.306 5.306-2.374 5.306-5.306-2.374-5.306-5.306-5.306zm0 8.756c-1.905 0-3.449-1.544-3.449-3.45s1.544-3.45 3.449-3.45 3.449 1.544 3.449 3.45-1.544 3.45-3.449 3.45zm5.348-8.832c-.612 0-1.108.496-1.108 1.108s.496 1.108 1.108 1.108 1.108-.496 1.108-1.108-.496-1.108-1.108-1.108z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" />
  </svg>
);

const SendIcon = () => (
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
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// Custom Hooks
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "50px", ...options }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isIntersecting];
};

const useFormValidation = () => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateField = useCallback((name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Nama wajib diisi";
        else if (value.length < 2) error = "Nama minimal 2 karakter";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email wajib diisi";
        else if (!emailRegex.test(value)) error = "Format email tidak valid";
        break;
      case "phone":
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (value && !phoneRegex.test(value))
          error = "Format nomor telepon tidak valid";
        break;
      case "subject":
        if (!value.trim()) error = "Subjek wajib diisi";
        break;
      case "message":
        if (!value.trim()) error = "Pesan wajib diisi";
        else if (value.length < 10) error = "Pesan minimal 10 karakter";
        break;
      default:
        break;
    }

    return error;
  }, []);

  const validate = useCallback(
    (formData) => {
      const newErrors = {};
      let formIsValid = true;

      Object.keys(formData).forEach((key) => {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          formIsValid = false;
        }
      });

      setErrors(newErrors);
      setIsValid(formIsValid);
      return formIsValid;
    },
    [validateField]
  );

  return { errors, isValid, validate, validateField };
};

// Components
const ContactInfoCard = ({ icon, title, children, isVisible, delay = 0 }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-700 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ title, items, icon, isVisible, delay = 0 }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-500 transform ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="text-green-600">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2 text-gray-600">
          <CheckIcon className="text-green-600 mt-1 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TeamMember = ({ image, name, role, description, contact }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-green-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {contact && (
          <a
            href={`https://wa.me/${contact.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Hubungi via WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};

const FAQ = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <span className="font-semibold text-gray-900">{question}</span>
      <svg
        className={`w-5 h-5 text-gray-500 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && <div className="px-6 pb-4 text-gray-600">{answer}</div>}
  </div>
);

export default function ContactPage() {
  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [openFAQ, setOpenFAQ] = useState(null);

  // Custom hooks
  const { errors, validate, validateField } = useFormValidation();

  // Statistics dari collections
  const statistics = useMemo(
    () => ({
      totalProducts: bonsaiCollections.length,
      categories: getCategories().length,
      avgPrice: Math.round(
        bonsaiCollections.reduce((sum, item) => sum + item.price, 0) /
          bonsaiCollections.length
      ),
      happyCustomers: 2500,
    }),
    []
  );

  // Form handlers
  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Real-time validation
      if (errors[name]) {
        const error = validateField(name, value);
        if (!error) {
          const newErrors = { ...errors };
          delete newErrors[name];
          // setErrors(newErrors);
        }
      }
    },
    [errors, validateField]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      if (!validate(formData)) {
        setIsSubmitting(false);
        return;
      }

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });

        // Auto hide success message
        setTimeout(() => setFormStatus(""), 5000);
      } catch (error) {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 5000);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate]
  );

  // FAQ data
  const faqData = [
    {
      question: "Bagaimana cara merawat bonsai untuk pemula?",
      answer:
        "Untuk pemula, mulailah dengan bonsai yang mudah dirawat seperti Ficus atau Juniper. Pastikan mendapat cahaya yang cukup, siram secara teratur namun jangan sampai tergenang, dan lakukan pemangkasan ringan secara berkala.",
    },
    {
      question: "Apakah tersedia konsultasi gratis?",
      answer:
        "Ya, kami menyediakan konsultasi gratis via WhatsApp untuk semua pelanggan. Untuk konsultasi mendalam atau kunjungan langsung, silakan buat janji terlebih dahulu.",
    },
    {
      question: "Berapa lama proses pemesanan khusus?",
      answer:
        "Pemesanan khusus biasanya membutuhkan waktu 2-4 minggu tergantung kompleksitas styling yang diminta. Kami akan memberikan estimasi waktu yang lebih akurat setelah diskusi detail.",
    },
    {
      question: "Apakah ada garansi untuk bonsai yang dibeli?",
      answer:
        "Kami memberikan garansi kualitas bonsai selama 30 hari setelah pembelian. Namun, garansi tidak berlaku untuk kerusakan akibat kesalahan perawatan.",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${contactHeroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-2 bg-green-600 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mari Berkolaborasi
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto">
            Kami siap membantu Anda menemukan bonsai impian, memberikan
            konsultasi perawatan, atau menjawab pertanyaan apapun tentang dunia
            bonsai.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactInfoCard
              icon={<LocationIcon />}
              title="Lokasi Studio"
              isVisible={true}
              delay={0}
            >
              <p>Jl. Raya Tlekung No. 1</p>
              <p>Junrejo, Kota Batu</p>
              <p>Malang, Jawa Timur</p>
            </ContactInfoCard>

            <ContactInfoCard
              icon={<PhoneIcon />}
              title="Telepon & WhatsApp"
              isVisible={true}
              delay={100}
            >
              <p className="font-semibold">(0341) 234-5678</p>
              <p>+62 812-3456-7890</p>
              <a
                href="https://wa.me/6281234567890"
                className="text-green-600 hover:text-green-700 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat via WhatsApp
              </a>
            </ContactInfoCard>

            <ContactInfoCard
              icon={<EmailIcon />}
              title="Email"
              isVisible={true}
              delay={200}
            >
              <p>info@arthabonsai.com</p>
              <p>order@arthabonsai.com</p>
              <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
            </ContactInfoCard>

            <ContactInfoCard
              icon={<ClockIcon />}
              title="Jam Operasional"
              isVisible={true}
              delay={300}
            >
              <p>Senin - Jumat: 09:00 - 17:00</p>
              <p>Sabtu: 09:00 - 15:00</p>
              <p>Minggu: Tutup</p>
            </ContactInfoCard>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-gray-100">
        <div className="w-full h-[500px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.693039010378!2d112.5744953153449!3d-7.926956694285851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78832de2f21ea3%3A0x10a653244e6f4812!2sTlekung%2C%20Junrejo%2C%20Batu%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1668234567890!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Artha Bonsai Studio"
          />

          {/* Floating Info Card */}
          <div className="absolute top-6 left-6 bg-white rounded-lg shadow-xl p-6 max-w-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Artha Bonsai Studio
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Studio bonsai dengan koleksi premium dan layanan konsultasi
              lengkap
            </p>
            <div className="flex gap-4 text-sm">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                {statistics.totalProducts}+ Koleksi
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                15+ Tahun
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "contact", label: "Hubungi Kami" },
              { id: "team", label: "Tim Kami" },
              { id: "services", label: "Layanan" },
              { id: "faq", label: "FAQ" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold rounded-full transition-colors ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Contact Form Tab */}
            {activeTab === "contact" && (
              <div className="animate-fadeIn">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Kirim Pesan
                    </h2>

                    {formStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                        <div className="flex items-center gap-2 text-green-700">
                          <CheckIcon />
                          <span className="font-semibold">
                            Pesan berhasil dikirim!
                          </span>
                        </div>
                        <p className="text-green-600 text-sm mt-1">
                          Terima kasih atas pesan Anda. Kami akan merespons
                          dalam 24 jam.
                        </p>
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                        <span className="text-red-700 font-semibold">
                          Terjadi kesalahan. Silakan coba lagi.
                        </span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenis Pertanyaan
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="general">Pertanyaan Umum</option>
                          <option value="purchase">Pembelian Bonsai</option>
                          <option value="consultation">
                            Konsultasi Perawatan
                          </option>
                          <option value="workshop">Workshop & Kursus</option>
                          <option value="custom">Pemesanan Khusus</option>
                        </select>
                      </div>

                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                            errors.name ? "border-red-300" : "border-gray-300"
                          }`}
                          placeholder="Masukkan nama lengkap Anda"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email & Phone */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.email
                                ? "border-red-300"
                                : "border-gray-300"
                            }`}
                            placeholder="nama@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nomor Telepon
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.phone
                                ? "border-red-300"
                                : "border-gray-300"
                            }`}
                            placeholder="+62 812-3456-7890"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subjek *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                            errors.subject
                              ? "border-red-300"
                              : "border-gray-300"
                          }`}
                          placeholder="Subjek pesan Anda"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pesan *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="5"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                            errors.message
                              ? "border-red-300"
                              : "border-gray-300"
                          }`}
                          placeholder="Tulis pesan detail Anda di sini..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <SendIcon />
                            Kirim Pesan
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Contact Info & Social Media */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Informasi Kontak
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <LocationIcon className="text-green-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Alamat Studio
                            </h4>
                            <p className="text-gray-600">
                              Jl. Raya Tlekung No. 1, Junrejo
                              <br />
                              Kota Batu, Malang 65321
                              <br />
                              Jawa Timur, Indonesia
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <ClockIcon className="text-green-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Jam Buka
                            </h4>
                            <p className="text-gray-600">
                              Senin - Jumat: 09:00 - 17:00
                              <br />
                              Sabtu: 09:00 - 15:00
                              <br />
                              Minggu & Libur: Tutup
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Ikuti Kami
                      </h4>
                      <div className="flex gap-4">
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                        >
                          <WhatsAppIcon className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                          <FacebookIcon className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                        >
                          <InstagramIcon className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">
                        Mengapa Pilih Kami?
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700">
                            {statistics.totalProducts}+
                          </div>
                          <div className="text-sm text-gray-600">
                            Koleksi Bonsai
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700">
                            15+
                          </div>
                          <div className="text-sm text-gray-600">
                            Tahun Pengalaman
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700">
                            {statistics.happyCustomers}+
                          </div>
                          <div className="text-sm text-gray-600">
                            Pelanggan Puas
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700">
                            24/7
                          </div>
                          <div className="text-sm text-gray-600">
                            Konsultasi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Tim Ahli Kami
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Bertemu dengan para expert yang siap membantu perjalanan
                    bonsai Anda
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <TeamMember
                    image={founderImg}
                    name="Budi Santoso"
                    role="Founder & Master Bonsai"
                    description="Master bonsai dengan pengalaman 20+ tahun. Spesialis dalam styling tradisional Jepang dan teknik pembentukan advanced."
                    contact="+62 812-3456-7890"
                  />
                  <TeamMember
                    image={studioImg}
                    name="Sari Dewi"
                    role="Curator & Designer"
                    description="Expert dalam kurasi koleksi dan desain display bonsai. Background seni rupa dengan fokus pada estetika natural."
                    contact="+62 813-4567-8901"
                  />
                  <TeamMember
                    image={workshopImg}
                    name="Andi Wijaya"
                    role="Horticultural Expert"
                    description="Spesialis kesehatan tanaman dan nutrisi bonsai. Berpengalaman dalam diagnosa penyakit dan teknik recovery."
                    contact="+62 814-5678-9012"
                  />
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Layanan Kami
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Layanan lengkap untuk semua kebutuhan bonsai Anda
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ServiceCard
                    title="Penjualan Bonsai"
                    items={[
                      "Koleksi premium dari berbagai kategori",
                      "Bonsai untuk semua level skill",
                      "Garansi kualitas 30 hari",
                      "Konsultasi pemilihan gratis",
                      "Paket lengkap dengan pot dan media",
                    ]}
                    icon={<LocationIcon />}
                    isVisible={true}
                    delay={0}
                  />
                  <ServiceCard
                    title="Konsultasi & Perawatan"
                    items={[
                      "Konsultasi personal via WhatsApp",
                      "Workshop perawatan dasar",
                      "Home visit untuk problem solving",
                      "Program mentoring jangka panjang",
                      "Emergency care 24/7",
                    ]}
                    icon={<ClockIcon />}
                    isVisible={true}
                    delay={100}
                  />
                  <ServiceCard
                    title="Custom Styling"
                    items={[
                      "Styling sesuai preferensi personal",
                      "Re-styling bonsai existing",
                      "Yamadori collection & styling",
                      "Bonsai corporate gift",
                      "Display setup untuk event",
                    ]}
                    icon={<CheckIcon />}
                    isVisible={true}
                    delay={200}
                  />
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Pertanyaan yang sering diajukan seputar bonsai dan layanan
                    kami
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {faqData.map((faq, index) => (
                    <FAQ
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQ === index}
                      onToggle={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Siap Memulai Perjalanan Bonsai Anda?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami kapan saja. Tim expert kami siap
            membantu mewujudkan impian bonsai Anda dengan layanan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat WhatsApp
            </a>
            <a
              href="/collections"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-700 transition-colors"
            >
              Lihat Koleksi
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS untuk animasi custom */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
