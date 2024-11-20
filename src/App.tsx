
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import CaliGamesPage from "./pages/CaliGamesPage"
import TestimonialsPage from "./pages/TestimonialsPage"
import ContactUsPage from "./pages/ContactUsPage"
import JoinUsPage from "./pages/JoinUsPage"
import { useEffect, useState } from "react"
import Preloader from "./components/Preloader"

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the preloader
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/caliGames" element={<CaliGamesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/joinus" element={<JoinUsPage />} />
        </Routes>
      )}

    </Router>
  )
}