
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

function HomePage() {
  return (
    <>
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
        <Route path="/songbook/english" element={<Songbook />} />
        <Route path="/songbook/song/:number" element={<SongPage />} />
      </Routes>
    </Router>
  );
}

export default App;
