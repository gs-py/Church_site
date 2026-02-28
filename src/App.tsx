
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import WeeklyActivities from './components/WeeklyActivities';
import Media from './components/Media';
import Location from './components/Location';
import Footer from './components/Footer';
import Songbook from './components/Songbook';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WeeklyActivities />
      <Media />
      <Location />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songbook" element={<Songbook />} />
      </Routes>
    </Router>
  );
}

export default App;
