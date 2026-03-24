import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>EX3 CORPORATION</span>
          </div>
          <p className="footer__tagline">Europe's Finest Conglomerate</p>
          <p className="footer__copy">© {year} EX3 Software Corporation. All rights reserved.</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {[['home','Home'],['about','About'],['careers','Careers'],['newsroom','Newsroom'],['contact','Contact']].map(([id,l]) => (
                <li key={id}><button onClick={() => scroll(id)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Products</h4>
            <ul>
              {[['Voxity','https://voxity.dev'],['ex3','https://ex3.icu'],['escope','https://escp.lol'],['pigeon','https://exerinity.com/pigeon']].map(([l,h]) => (
                <li key={l}><a href={h} target="_blank" rel="noreferrer">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              {[].map(([id,l]) => (
                <li key={id}><button onClick={() => scroll(id)}>{l}</button></li>
              ))}
              <li><a href="https://github.com/ex3corporation" target="_blank">GitHub</a></li>
              <li><a href="https://steamcommunity.com/groups/ex3corp" target="_blank">Steam Group</a></li>
              <li><a href="https://x.com/ex3corp" target="_blank" rel="noreferrer">X</a></li>
              <li><a href="https://twitter.com/i/communities/1953377414802968826" target="_blank" rel="noreferrer">X Community</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__mono">SHOUTOUT TO CLAUDE 4.6 OPUS FOR THIS WEBSITE</span>
        <span className="footer__mono"><div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div></span>
      </div>
    </footer>
  )
}
