import { useState } from 'react'
import './Nav.css'

const links = ['Home','About','Products','Newsroom','Careers','Contact']

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false)

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={e => handleNav(e, 'home')}>
          <span className="nav__logo-3">EX3 Corporation</span>
        </a>

        <ul className={`nav__links${open ? ' nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav__link" onClick={e => handleNav(e, l)}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className={`nav__burger${open ? ' nav__burger--open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
