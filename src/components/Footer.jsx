import React from 'react'
import '../App.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Khandhaba</div>
        <div>Built with ❤️ — Sample demo</div>
      </div>
    </footer>
  )
}
