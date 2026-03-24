import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    let raf
    let t = 0
    const animate = () => {
      t += 0.003
      grid.style.setProperty('--t', t)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__grid" ref={gridRef} />
      <div className="hero__noise" />
      <div className="hero__glow" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>meow =(^._.^)=</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Europe's</span>
          <span className="hero__title-line hero__title-line--accent">Finest</span>
          <span className="hero__title-line">Conglomerate.</span>
        </h1>

        <p className="hero__sub">
          We make intricate, intuitive, scalable, fault-tolerant, event-driven, idempotent, low-latency, cloud-native, zero-downtime, asynchronous, observable, deterministic, composable, immutable, self-healing, distributed, stateless, containerised, edge-optimised, schema-agnostic, eventually-consistent, infrastructure-as-code software.
        </p>

        <div className="hero__actions">
          <a href="#products" className="btn btn--primary" onClick={e => { e.preventDefault(); document.getElementById('products').scrollIntoView({behavior:'smooth'}) }}>
            View Our Work
          </a>
          <a href="#contact" className="btn btn--ghost" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'}) }}>
            Go Fuck Yourself
          </a>
        </div>

        <div className="hero__stats">
          {[['6-7','Years Active'],['200+','Monsters chugged'],['1','Team Members']].map(([n,l]) => (
            <div key={l} className="hero__stat">
              <span className="hero__stat-num">{n}</span>
              <span className="hero__stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
