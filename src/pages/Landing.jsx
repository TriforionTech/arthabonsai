import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Collections from "../components/landing/Collections";
import Recommendation from "../components/landing/Recommendation";
import AboutUs from "../components/landing/AboutUs";
import Partners from "../components/landing/Partners";
import Testimonials from "../components/landing/Testimonials";
import Gallery from "../components/landing/Gallery";
import HowToOrder from "../components/landing/HowToOrder";
import Location from "../components/landing/Location";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/common/Footer";

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
