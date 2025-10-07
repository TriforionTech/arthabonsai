// Import gambar
import recommend1 from "/src/assets/recommend1.webp";
import recommend2 from "/src/assets/recommend2.webp";

export default function Recommendation() {
  const recommendations = [
    {
      id: 1,
      image: recommend1,
      title: "Premium Bonsai Collection",
      subtitle: "Expertly curated for beginners",
      price: "$199 - $499",
    },
    {
      id: 2,
      image: recommend2,
      title: "Advanced Masterpieces",
      subtitle: "For seasoned collectors",
      price: "$599 - $1,299",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title & subtitle */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl text-green-800 font-bold mb-3">
            Looking for the Perfect Bonsai?
          </h2>
          <p className="text-gray-600 text-lg">
            Here are our top recommendations just for you.
          </p>
        </div>

        {/* Konten dua kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer"
            >
              {/* Bagian Gambar */}
              <div className="w-full h-[350px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bagian Konten Teks (Selalu Terlihat) */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.subtitle}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-semibold text-green-600">
                    {item.price}
                  </span>
                  <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-sm">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
