import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSent(true)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__left">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Shout, shout</h2>
            <p className="contact__blurb">
              These are the things I can do without<br></br>Come on<br></br>I'm talking to you, come on
            </p>

            <div className="contact__info">
              {[
                ['Location', 'Munich'],
                ['Response time', '6-7 hours'],
                ['Preferred channel', 'X'],
              ].map(([k, v]) => (
                <div key={k} className="contact__info-row">
                  <span className="contact__info-key">{k}</span>
                  <span className="contact__info-val">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__right">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message received.</h3>
                <p>We'll be in touch within 24–48 hours.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="jeevacation@gmail.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us what you need." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn--primary contact__submit">
                  Fuck Off →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
