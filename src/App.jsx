import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import Materials from './pages/Materials';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Global Background Elements */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <Navbar scrolled={scrolled} />
      
      <main className="min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-mnie" element={<About />} />
          <Route path="/oferta" element={<Offer />} />
          <Route path="/materialy" element={<Materials />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
