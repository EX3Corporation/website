import './Products.css'

const products = [
  {
    id: 'com.exerinity.voxity',
    name: 'Voxity',
    tag: 'Music',
    desc: 'The best music player ever.',
    status: 'Production',
    detail: 'voxity.dev'
  },
  {
    id: 'escp.lol',
    name: 'escope',
    tag: 'Tools',
    desc: 'Ephemeral Scoped Control of Persistent Endpoints',
    status: 'Production',
    detail: 'E'
  },
  {
    id: 'com.exerinity.voxity',
    name: 'Voxity',
    tag: 'Music',
    desc: 'The best music player ever.',
    status: 'Production',
    detail: 'voxity.dev'
  },
  {
    id: 'com.exerinity.voxity',
    name: 'Voxity',
    tag: 'Music',
    desc: 'The best music player ever.',
    status: 'Production',
    detail: 'voxity.dev'
  }
]

export default function Products() {
  return (
    <section id="products" className="products section">
      <div className="products__bg" />
      <div className="container">
        <p className="section-label">Core</p>
        <div className="products__header">
          <h2 className="section-title">What we've made</h2>
          <p className="products__sub">Too much.</p>
        </div>

        <div className="products__grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-card__top">
                <span className="product-card__id">{p.id}</span>
                <span className={`product-card__status product-card__status--${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              </div>
              <div className="product-card__tag">{p.tag}</div>
              <h3 className="product-card__name">{p.name}</h3>
              <p className="product-card__desc">{p.desc}</p>
              <div className="product-card__footer">
                <span className="product-card__detail">{p.detail}</span>
                <span className="product-card__arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
