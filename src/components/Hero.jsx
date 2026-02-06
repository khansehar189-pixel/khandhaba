import React from 'react'
import '../App.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Authentic Punjabi Flavours</h1>
          <p>Freshly prepared kebabs, curries and homestyle dishes. Order online or visit us.</p>
          <a className="btn primary" href="#menu">View Menu</a>
        </div>
        <div className="hero-image" aria-hidden>
        </div>
      </div>
    </section>
  )
}
