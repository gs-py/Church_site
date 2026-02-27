function Footer() {
  const year = new Date().getFullYear();
  const scroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/joskins-logo.png" alt="Joskins" className="footer__logo" />
            <p>
              Bringing the authentic taste of India to the world — premium whole
              spices under the Joskins brand, sourced with care and delivered
              with excellence.
            </p>
            <a href="https://joskins.com" className="footer__url" target="_blank" rel="noopener noreferrer">
              joskins.com
            </a>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => scroll(e, 'about')}>About Us</a></li>
              <li><a href="#products" onClick={(e) => scroll(e, 'products')}>Our Spices</a></li>
              <li><a href="#why-us" onClick={(e) => scroll(e, 'why-us')}>Why Joskins</a></li>
              <li><a href="#contact" onClick={(e) => scroll(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Top Spices</h4>
            <ul>
              <li><a href="#products">Black Pepper</a></li>
              <li><a href="#products">Cardamom</a></li>
              <li><a href="#products">Turmeric</a></li>
              <li><a href="#products">Cinnamon & Cloves</a></li>
              <li><a href="#products">Cumin & Coriander</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Reach Us</h4>
            <ul>
              <li>Mysuru, Karnataka, India</li>
              <li>+91 98765 43210</li>
              <li>info@joskins.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {year} Joskins Agro Production. All rights reserved.</p>
          <p>Farm Fresh. Globally Trusted. Purely Natural.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
