
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import WeeklyActivities from './components/WeeklyActivities';
import Media from './components/Media';
import Location from './components/Location';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Songbook from './components/Songbook';
import SongPage from './components/SongPage';
import ArticlePage from './components/ArticlePage';
import AdminLogin from './components/AdminLogin';
import Accounting from './components/Accounting';

function HomePage() {
  const [showPoster, setShowPoster] = useState(() => !sessionStorage.getItem('zbc_elders_meeting_2026_10_10_dismissed'));

  const dismissPoster = () => {
    sessionStorage.setItem('zbc_elders_meeting_2026_10_10_dismissed', 'true');
    setShowPoster(false);
  };

  useEffect(() => {
    if (!showPoster) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && dismissPoster();
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [showPoster]);

  return (
    <>
      {showPoster && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={(event) => event.target === event.currentTarget && dismissPoster()}
        >
          <div role="dialog" aria-modal="true" aria-label="Zion Brethren Church Elders Meeting poster" className="relative max-h-[92vh]">
            <button
              type="button"
              onClick={dismissPoster}
              aria-label="Close poster"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-slate-900 shadow-lg"
            >
              ×
            </button>
            <img
              src="/elders-meeting-2026-10-10.jpeg"
              alt="Zion Brethren Church Elders Meeting on October 10, 2026, at 10:00 AM, with speaker Br. N. A. Paul"
              className="max-h-[92vh] w-auto rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
      <SEO
        title="Playing our part in the Kingdom of God"
        description="Zion Brethren Church Mysore - A community of believers committed to playing our part in the Kingdom of God. Join us for worship, fellowship, and spiritual growth in Mysore."
        path="/"
        keywords="Zion Brethren Church, Brethren Church Mysore, church in Mysore, Christian church, worship, fellowship, Kingdom of God"
      />
      <div className="min-h-screen">
        <Hero />
        <About />
        <WeeklyActivities />
        <section className="bg-slate-50 px-4 py-16 text-center" aria-labelledby="upcoming-programs-heading">
          <h2 id="upcoming-programs-heading" className="mb-8 text-3xl font-bold text-slate-900">Upcoming Programs</h2>
          <img
            src="/elders-meeting-2026-10-10.jpeg"
            alt="Zion Brethren Church Elders Meeting on October 10, 2026, at 10:00 AM, with speaker Br. N. A. Paul"
            className="mx-auto max-h-[80vh] w-auto rounded-lg shadow-xl"
          />
        </section>
        <Media />
        <Location />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songbook" element={<Songbook />} />
        <Route path="/songbook/kannada" element={<Songbook />} />
        <Route path="/songbook/kannada-only" element={<Songbook />} />
        <Route path="/songbook/english" element={<Songbook />} />
        <Route path="/songbook/song/:number" element={<SongPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/accounts" element={<Accounting />} />
      </Routes>
    </Router>
  );
}

export default App;
