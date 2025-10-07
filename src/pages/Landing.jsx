import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Collections from "../components/Collections";
import Recommendation from "../components/Recommendation";
import AboutUs from "../components/AboutUs";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import HowToOrder from "../components/HowToOrder";
import Location from "../components/Location";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
      <Recommendation />
      <AboutUs />
      <Partners />
      <Testimonials />
      <Gallery />
      <HowToOrder />
      <Location />
      <FAQ />
      <Footer />
    </div>
  );
}
