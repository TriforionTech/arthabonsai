import Button from "./Button"; // Gunakan komponen Button yang sudah ada

export default function CollectionCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative cursor-pointer border-2 border-transparent hover:border-green-500">
      <div className="w-full h-[350px] md:h-[400px] relative">
        <img
          src={item.image}
          alt={item.title} // Gunakan judul sebagai alt text
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Age Badge */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-1 bg-black/80 text-white px-3 py-2 rounded-full">
            <svg
              className="w-4 h-4 text-green-400"
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
            <span className="text-sm font-semibold">{item.age}</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end">
          <div className="w-full p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{item.subtitle}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold text-green-400">
                  {item.price}
                </span>
                {/* Menggunakan komponen Button untuk konsistensi */}
                <Button
                  to={`/collections/${item.id}`}
                  className="bg-green-600 !py-2 !px-4 text-sm text-white hover:bg-green-700"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
