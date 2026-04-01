import './News.css'

const news = [
  {
    date: '2026-04-01',
    cat: 'EX3 Corporation',
    title: 'EX3 Corporation to focus on AI, cryptocurrency, and NFTs',
    body: 'MELBOURNE - 1st APRIL - EX3 Corporation is proud to announce that we will be heavily, relentlessly focusing on cryptocurrency and NFTs in the foreseeable future. We will be releasing our own memecoin, and we will invest heavily in all the markets. <a href="https://twitter.com/ex3corp/status/2039151608945361232">Read more on Twitter.</a>'
  },
  {
    date: '2026-03-24',
    cat: 'EX3 Corporation',
    title: 'Website v2 Live',
    body: 'We have launched our new, groundbreaking, intricate, beautiful website.'
  },
  {
    date: '2026-02-26',
    cat: 'Infrastructure',
    title: 'Introducing escope',
    body: 'MELBOURNE - A new service dubbed "escope" has launched. The premise is simple: hand it a link, it hands you back an ephemeral redirecting link. This is groundbreaking technology that paves the way for the Modern Web 2.0.',
  },
  {
    date: '2025-10-13',
    cat: 'Products',
    title: 'Audion to rename to "Voxity"',
    body: 'The name comes from "Vox", Greek for sound, and "ity", the final 3 characters of our founder, "exerinity"',
  },
  {
    date: '2025-08-10',
    cat: 'Products',
    title: 'Music Player to rename to "Audion"',
    body: 'The name comes from "audio on"',
  },
  {
    date: '2025-01-24',
    cat: 'INVESTOR Interests',
    title: 'STEAM - EX3 Corporation Secures $67bn Valuation',
    body: '<a href="https://steamcommunity.com/groups/ex3corp/announcements/detail/509603414731131705">https://steamcommunity.com/groups/ex3corp/announcements/detail/509603414731131705</a>',
  },
  {
    date: '1969-04-20',
    cat: 'MEOW',
    title: 'Meow meow meow meow',
    body: 'meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow',
  },
]

const fmt = d => new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })

export default function News() {
  return (
    <section id="newsroom" className="news section">
      <div className="container">
        <p className="section-label">Newsroom</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>The EX3 Index</h2>

        <div className="news__list">
          {news.map((n, i) => (
            <article key={i} className="news__item">
              <div className="news__meta">
                <span className="news__cat">{n.cat}</span>
                <time className="news__date" dateTime={n.date}>{fmt(n.date)}</time>
              </div>
              <div className="news__body">
                <h3 className="news__title">{n.title}</h3>
                <p className="news__excerpt" dangerouslySetInnerHTML={{ __html: n.body }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
