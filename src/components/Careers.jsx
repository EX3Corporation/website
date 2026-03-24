import './Careers.css'

const roles = [
  { id: 'ENG-01', title: 'Developer', dept: 'Engineering', type: 'Remote', note: 'Build shit!!' },
  { id: 'DE-01', title: 'Truck Driver', dept: 'Logistics', type: 'Germany', note: '10 years experience not required.' },
  { id: 'OPS-01', title: 'Infrastructure Specialist', dept: 'Operations', type: 'Remote', note: 'We don\'t use Jira.' },
]

export default function Careers() {
  return (
    <section id="careers" className="careers section">
      <div className="careers__bg" />
      <div className="container">
        <div className="careers__top">
          <div>
            <p className="section-label">Careers</p>
            <h2 className="section-title">Join the cult</h2>
          </div>
          <div className="careers__culture">
            <p>What are you really good at?</p>
          </div>
        </div>

        <div className="careers__roles">
          {roles.map(r => (
            <div key={r.id} className="role-card">
              <div className="role-card__left">
                <span className="role-card__id">{r.id}</span>
                <div>
                  <h3 className="role-card__title">{r.title}</h3>
                  <p className="role-card__note">{r.note}</p>
                </div>
              </div>
              <div className="role-card__right">
                <span className="role-card__dept">{r.dept}</span>
                <span className="role-card__type">{r.type}</span>
                <button className="role-card__btn">Apply →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="careers__footer">
          <p>Don't see a role? Go find a job somewhere else.</p>
          <a href="#contact" className="btn btn--ghost" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'}) }}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
