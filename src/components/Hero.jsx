// src/components/Hero.jsx

import heroBg from "/src/assets/hero-bg.webp"; // 1. Import gambar
import Button from "./Button"; // 2. Import komponen Button

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Gambar latar dengan path dari import dan alt text yang lebih baik */}
      <img
        src={heroBg}
        alt="" // alt kosong untuk gambar dekoratif
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gelap tipis biar teks lebih kontras */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Konten utama */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-semibold text-white drop-shadow-md">
          Artha Bonsai
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          A quiet beauty, a living tradition,
          <br className="hidden sm:block" /> a touch of nature within your home.
        </p>
        <div className="mt-8 flex justify-center">
          {/* 3. Menggunakan komponen Button yang reusable */}
          <Button to="/about" className="bg-primary text-black hover:bg-white">
            View Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
