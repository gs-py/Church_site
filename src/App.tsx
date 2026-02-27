
import Hero from './components/Hero';
import About from './components/About';
import WeeklyActivities from './components/WeeklyActivities';
import Media from './components/Media';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
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

export default App;
