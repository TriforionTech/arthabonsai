import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import AboutUsPage from "../pages/AboutUsPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}
