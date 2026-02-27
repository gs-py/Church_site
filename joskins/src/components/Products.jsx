import { useState } from 'react';

const spices = [
  { name: 'Black Pepper', origin: 'Kerala', grade: 'TGEB / FAQ', emoji: '⚫', color: '#2c2c2c',
    desc: 'The "King of Spices" — bold Malabar black pepper with high piperine, perfect aroma, and uniform size.' },
  { name: 'Green Cardamom', origin: 'Kerala & Karnataka', grade: '8mm+ Bold', emoji: '💚', color: '#2d6a4f',
    desc: 'Intensely aromatic whole pods, handpicked for vibrant green color and rich essential oil content.' },
  { name: 'Turmeric Finger', origin: 'Andhra Pradesh', grade: 'Salem / Erode', emoji: '🟡', color: '#b8860b',
    desc: 'High-curcumin golden turmeric fingers, sun-dried for maximum potency and deep natural color.' },
  { name: 'Cinnamon Sticks', origin: 'Kerala', grade: 'C5 Special', emoji: '🟤', color: '#8b4513',
    desc: 'True Ceylon-style cinnamon — delicate, sweet aroma with thin, tightly rolled quills.' },
  { name: 'Whole Cloves', origin: 'Kerala & Tamil Nadu', grade: 'Hand Picked Bold', emoji: '🔴', color: '#6b1d1d',
    desc: 'Premium whole cloves with high eugenol oil content, offering intense warmth and rich fragrance.' },
  { name: 'Cumin Seeds', origin: 'Rajasthan & Gujarat', grade: 'Singapore Quality', emoji: '🟫', color: '#7c5e3c',
    desc: 'Clean, bold cumin seeds with an earthy, warm profile — staple in cuisines worldwide.' },
  { name: 'Star Anise', origin: 'North East India', grade: 'Whole Autumn', emoji: '⭐', color: '#5c4033',
    desc: 'Beautiful star-shaped pods with sweet licorice-like flavor, essential for biryanis and stews.' },
  { name: 'Red Chillies', origin: 'Andhra & Karnataka', grade: 'Byadgi / Guntur', emoji: '🌶️', color: '#c0392b',
    desc: 'Vibrant deep-red whole chillies, prized for rich color, smoky undertones, and medium heat.' },
  { name: 'Coriander Seeds', origin: 'Rajasthan & MP', grade: 'Eagle Quality', emoji: '🫒', color: '#6b8e23',
    desc: 'Round, aromatic seeds with a citrusy, nutty flavor — a cornerstone of every spice blend.' },
];

const cats = ['All', 'Pepper & Seeds', 'Barks & Pods', 'Roots & Chillies'];

function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? spices : spices.filter((s) => {
    if (active === 'Pepper & Seeds') return ['Black Pepper', 'Cumin Seeds', 'Coriander Seeds'].includes(s.name);
    if (active === 'Barks & Pods') return ['Cinnamon Sticks', 'Green Cardamom', 'Whole Cloves', 'Star Anise'].includes(s.name);
    return ['Turmeric Finger', 'Red Chillies'].includes(s.name);
  });

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-center">
          <span className="label">Our Collection</span>
          <h2 className="heading">
            Joskins <span className="accent">Whole Spices</span>
          </h2>
          <p className="sub">
            Every spice is carefully sourced, graded, and packed under the Joskins brand
            to preserve peak freshness and authentic flavor.
          </p>
        </div>

        <div className="products__filters">
          {cats.map((c) => (
            <button key={c} className={`pill ${active === c ? 'pill--active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map((s, i) => (
            <div key={s.name} className="spice" style={{ '--c': s.color, '--d': `${i * 0.06}s` }}>
              <div className="spice__top">
                <span className="spice__emoji">{s.emoji}</span>
                <span className="spice__grade">{s.grade}</span>
              </div>
              <div className="spice__body">
                <h3>{s.name}</h3>
                <p className="spice__origin">Origin: {s.origin}</p>
                <p className="spice__desc">{s.desc}</p>
              </div>
              <div className="spice__foot">
                <a href="#contact">Enquire Now &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
