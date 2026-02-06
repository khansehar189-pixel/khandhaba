import React from 'react'
import '../App.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Khandhaba</div>
        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
