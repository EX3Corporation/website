import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__layout">
          <div className="about__left">
            <p className="section-label">About</p>
            <h2 className="section-title">Europe's<br></br>Finest<br></br>Conglomeration.</h2>
          </div>
          <div className="about__right">
            <p className="about__body">
              The EX3 Corporation is a prominent multinational conglomerate deeply rooted in Europe. Its flagship division is EX3 Logistics Corporation, a high-quality logistics service offering freight transport all across Europe and the United States. Another division is EX3 Software Corporation, which is the developer of many pioneering cross-platform utility apps like Voxity, Scholia, pigeon, or escope. The founder, while based in Australia, has deep connections in Europe and the United States.
            </p>
            <div className="about__pillars">
              {[
                ['01', 'Precision'],
                ['02', 'Longevity'],
                ['03', 'Transparency'],
              ].map(([n, t, d]) => (
                <div key={n} className="about__pillar">
                  <span className="about__pillar-num">{n}</span>
                  <div>
                    <strong>{t}</strong>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
