// src/components/Stats.jsx

import StatCard from "./StatCard"; // Import komponen baru

// Definisikan data di luar komponen untuk keterbacaan
const statsData = [
  { value: "250+", label: "Sales" },
  { value: "10k+", label: "Collections" },
  { value: "30yrs+", label: "Master of Bonsai" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Container ini "terangkat" dari section sebelumnya dengan -mt-32 */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 bg-white rounded-2xl shadow-xl border border-gray-100 relative -mt-32">
        {/* Kiri: Teks */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
            Trusted by <span className="text-green-600 font-bold">1000+</span>{" "}
            customers since 1985
          </h2>
          <p className="text-gray-600 mt-2">
            A growing legacy of beauty, patience, and craftsmanship.
          </p>
        </div>

        {/* Kanan: Kotak statistik (Menggunakan map) */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center w-full">
          {statsData.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
