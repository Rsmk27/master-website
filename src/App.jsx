import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ThemeToggle from '@/components/ui/ThemeToggle';
import CookieConsent from '@/components/ui/CookieConsent';
import { IntroOverlay } from '@/components/ui/IntroOverlay';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Projects = lazy(() => import('@/pages/Projects'));
const Blog = lazy(() => import('@/pages/Blog'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    // Check if intro has been shown this session, default to true if not shown
    return !sessionStorage.getItem('rsmk_intro_shown');
  });

  const handleIntroComplete = () => {
    setLoading(false);
    sessionStorage.setItem('rsmk_intro_shown', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-secondary dark:bg-slate-950 dark:text-white font-sans transition-colors duration-300 flex flex-col">
        <ScrollToTop />

        {loading && <IntroOverlay onComplete={handleIntroComplete} />}

        {!loading && (
          <>
            <Navbar />

            <main className="flex-grow">
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/*" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>

            <Footer />

            <BackToTop />
            <CookieConsent />
            <div className="fixed top-24 right-4 z-50">
              <ThemeToggle />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}