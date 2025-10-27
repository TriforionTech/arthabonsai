import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import AboutUsPage from "../pages/AboutUsPage";
import CollectionPage from "../pages/CollectionPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailPage from "../pages/ProductDetailPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
