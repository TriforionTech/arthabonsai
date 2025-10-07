// src/components/StatCard.jsx

export default function StatCard({ value, label }) {
  return (
    <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition bg-primary">
      <h3 className="text-5xl font-semibold text-black">{value}</h3>
      <p className="text-gray-700 font-medium mt-1">{label}</p>
    </div>
  );
}
