import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Komponen NavItem dengan warna hover yang sudah disesuaikan
const NavItem = ({ path, label, onClick }) => {
  // CHANGE: Mengganti text-secondary dengan warna brand
  const commonClasses = "hover:text-green-600 transition duration-300";

  if (path.startsWith("#")) {
    return (
      <a href={path} className={commonClasses} onClick={onClick}>
        {label}
      </a>
    );
  }
  return (
    <Link to={path} className={commonClasses} onClick={onClick}>
      {label}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "About Us", path: "/about" },
    { label: "Collection", path: "/collections" },
    { label: "Gallery", path: "#gallery" },
    { label: "Contact Us", path: "#location" }, // Menyesuaikan dengan ID section
  ];

  // ... (useEffect hooks Anda tetap sama)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // CHANGE: Variabel textColorClass dihapus untuk penerapan yang lebih spesifik
  const navBackgroundClass = isScrolled
    ? "bg-white shadow-md"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          // CHANGE: Warna logo disesuaikan dengan state scroll
          className={`text-2xl font-bold transition duration-300 hover:text-green-600 ${
            isScrolled ? "text-green-900" : "text-white"
          }`}
        >
          Artha Bonsai
        </Link>

        {/* Desktop Menu */}
        <div
          // CHANGE: Warna link disesuaikan dengan state scroll
          className={`hidden md:flex space-x-8 font-semibold transition duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <NavItem key={item.label} path={item.path} label={item.label} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          // CHANGE: Warna ikon hamburger disesuaikan dengan state scroll
          className={`md:hidden focus:outline-none transition duration-300 ${
            isScrolled ? "text-green-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-5 px-6 py-5 text-gray-800 font-medium">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  path={item.path}
                  label={item.label}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
