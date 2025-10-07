import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
        <p className="max-w-2xl text-center text-gray-600 leading-relaxed">
          From apple orchards to the international bonsai stage, Pak Arpai
          proves that bonsai is more than just art — it’s a legacy. Artha Bonsai
          was born to nurture beauty, shape patience, and grow a new generation
          of nature lovers.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
          Read More
        </button>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
