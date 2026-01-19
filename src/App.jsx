import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { IntroOverlay } from '@/components/ui/IntroOverlay';
import Cursor from '@/components/Cursor';
import BackToTop from '@/components/ui/BackToTop';
import ThemeToggle from '@/components/ui/ThemeToggle';
import CookieConsent from '@/components/ui/CookieConsent';

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const Domains = lazy(() => import('@/pages/Domains'));
const Ecosystem = lazy(() => import('@/pages/Ecosystem'));
const Contact = lazy(() => import('@/pages/Contact'));
const Admin = lazy(() => import('@/pages/Admin'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
        <p className="text-cyan-400 font-mono">Loading...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function GlobalWatermark() {
  const location = useLocation();
  const [showWatermark, setShowWatermark] = useState(false);

  useEffect(() => {
    // Hide watermark on Home page ('/') ONLY IN HERO SECTION
    // Actually user said "except the hero section in home page".
    // Since the Hero is the top of the Home page, and the Home page also has other sections...
    // But the request implies "everywhere ... except hero section".
    // The Hero section has a huge Aurora background. A watermark would look messy there.
    // However, the rest of the Home page (below Hero) might be okay.
    // But implementing "hide only in hero" is tricky since this is global.
    // simpler interpretation: Hide on Home Page entirely OR make it conditional based on scroll?
    // User said "everywhere on the website expect the hero section".
    // If I put it fixed in the background, it will show behind the Hero too.
    // Options:
    // 1. Hide on '/' route completely (safest, cleanest).
    // 2. Hide on '/' route initially, show after scroll? No, that's complex.
    // Use option 1 for now unless user clarifies.
    // Wait, "hero section in home page" implies other sections in home page SHOULD have it?
    // The Hero takes usually 100vh.
    // If I fix it to the background, it stays forever.
    // Let's hide it on the Home route for now, or just hide it if scrollY < 100vh?
    // Let's stick to hiding on Home page fully if that's acceptable, OR
    // Just hide it on the Home page because the Home page is very visual already (Aurora, Warp, etc).

    // Actually, "expect the hero section" might mean "I want it on the Home page too, just not colliding with the Hero".
    // But since it's FIXED, it will collide.
    // Let's try to show it everywhere. On home page, maybe the Hero covers it?
    // The Hero has a background.
    // If I put z-index: 0 on watermark, and z-index: 10 on Hero background...
    // Hero uses WarpBackground or Aurora.
    // Let's check Hero.jsx. It has absolute z-0.
    // If I put this GlobalWatermark at z-[-1] or z-0...
    // Let's make a component that renders the watermark.

    // Decision: Render it on all pages. For Home page, use a scroll listener to fade it in after Hero?
    // Or just render it on all pages EXCEPT Home for now, as Home is visually busy.
    // "appear everywhere ... expect the hero section". This strongly suggests it SHOULD appear on other parts of Home.

    // Let's use a scroll listener. If path === '/' and scrollY < window.innerHeight, hide it.

    const handleScroll = () => {
      if (location.pathname === '/') {
        if (window.scrollY > window.innerHeight * 0.8) {
          setShowWatermark(true);
        } else {
          setShowWatermark(false);
        }
      } else {
        setShowWatermark(true); // Always show on other pages
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center pointer-events-none z-0 transition-opacity duration-1000 ${showWatermark ? 'opacity-100' : 'opacity-0'}`}
    >
      <img
        src="/logo-v2.png"
        alt=""
        className="w-[80vw] md:w-[50vw] opacity-[0.05] animate-pulse"
        style={{ animationDuration: '4s' }}
      />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('rsmk_intro_shown');
  });

  const handleIntroComplete = () => {
    setLoading(false);
    sessionStorage.setItem('rsmk_intro_shown', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 relative">
        <Cursor />
        <ScrollToTop />

        {loading && <IntroOverlay onComplete={handleIntroComplete} />}

        {!loading && (
          <>
            <GlobalWatermark />
            <Navbar />
            <div className="relative z-10">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/domains" element={<Domains />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </>
        )}

        {/* Global UI Components */}
        {!loading && (
          <>
            <BackToTop />
            <CookieConsent />
            <div className="fixed top-24 right-8 z-50">
              <ThemeToggle />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}