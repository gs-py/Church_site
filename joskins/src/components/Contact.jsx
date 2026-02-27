import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', spice: '', message: '' });
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', company: '', spice: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="label">Contact Us</span>
            <h2 className="heading">Let's Talk <span className="accent">Spices</span></h2>
            <p>
              Have a bulk requirement or need a custom quote? Drop us a line and
              our team will respond within 24 hours.
            </p>
            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Office</strong>
                  <p>Joskins Agro Production<br/>Mysuru, Karnataka, India</p>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>info@joskins.com</p>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <strong>Website</strong>
                  <p>joskins.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            {sent && <div className="contact__ok">Thank you! We'll get back to you shortly.</div>}
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" required placeholder="Your name" value={form.name} onChange={change} />
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={change} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={change} />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" placeholder="Company name" value={form.company} onChange={change} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="spice">Spice of Interest</label>
              <select id="spice" name="spice" value={form.spice} onChange={change}>
                <option value="">Select a spice</option>
                <option>Black Pepper</option>
                <option>Green Cardamom</option>
                <option>Turmeric</option>
                <option>Cinnamon</option>
                <option>Cloves</option>
                <option>Cumin Seeds</option>
                <option>Red Chillies</option>
                <option>Star Anise</option>
                <option>Coriander Seeds</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows="4" placeholder="Tell us about your requirement — quantity, delivery location, timeline..." value={form.message} onChange={change} />
            </div>
            <button type="submit" className="btn btn--primary btn--full">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
