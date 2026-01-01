import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { IntroOverlay } from '@/components/ui/IntroOverlay';
import Cursor from '@/components/Cursor';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Domains from '@/pages/Domains';
import Ecosystem from '@/pages/Ecosystem';
import Contact from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    // Check if we've already shown the intro in this session
    return !sessionStorage.getItem('rsmk_intro_shown');
  });

  const handleIntroComplete = () => {
    setLoading(false);
    sessionStorage.setItem('rsmk_intro_shown', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
        <Cursor />
        <ScrollToTop />

        {/* Intro Overlay - Only shows on initial load if we want. 
              For now keeping it simple: It overlays everything.
              We can conditionally render the rest of the app or just overlay it.
              The original app rendered it conditionally. 
          */}
        {loading && <IntroOverlay onComplete={handleIntroComplete} />}

        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/domains" element={<Domains />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}