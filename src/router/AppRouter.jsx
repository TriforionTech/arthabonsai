import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import AboutUsPage from "../pages/AboutUsPage";
import CollectionPage from "../pages/CollectionPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </Router>
  );
}
