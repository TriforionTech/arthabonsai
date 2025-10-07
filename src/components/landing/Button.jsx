// src/components/Button.jsx

import { Link } from "react-router-dom";

// Komponen ini bisa merender <Link> atau <a> tergantung prop `to`
export default function Button({ to, children, className = "" }) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Gabungkan class dasar dengan class tambahan dari props
  const combinedClasses = `${baseClasses} ${className}`;

  // Jika ada prop `to`, render sebagai Link atau a
  if (to) {
    // Cek apakah ini link internal (React Router) atau eksternal
    if (to.startsWith("/")) {
      return (
        <Link to={to} className={combinedClasses}>
          {children}
        </Link>
      );
    }
    return (
      <a href={to} className={combinedClasses}>
        {children}
      </a>
    );
  }

  // Jika tidak ada `to`, render sebagai button biasa
  return (
    <button type="button" className={combinedClasses}>
      {children}
    </button>
  );
}
