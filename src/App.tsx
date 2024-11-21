
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
import TermsOfUse from "./pages/TermsOfUse"
import Disclaimer from "./pages/Disclaimer"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import RefundAndCancellationPolicy from "./pages/RefundAndCancellationPolicy"
import ShippingAndDeliveryPolicy from "./pages/ShippingAndDeliveryPolicy"
import Registration from "./pages/Registration"

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
          <Route path="/registration" element={<Registration />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-and-cancellation-policy" element={<RefundAndCancellationPolicy />} />
          <Route path="/shipping-and-delivery-policy" element={<ShippingAndDeliveryPolicy />} />
        </Routes>
      )}

    </Router>
  )
}