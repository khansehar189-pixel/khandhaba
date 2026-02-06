import React from 'react'
import '../App.css'

const locations = [
  { id: 'l1', name: 'Model Town', address: '123 Main Road, City' },
  { id: 'l2', name: 'Downtown', address: '45 Central Ave, City' }
]

export default function Locations() {
  return (
    <section id="locations" className="locations container">
      <h2>Locations</h2>
      <div className="locations-grid">
        {locations.map((l) => (
          <div key={l.id} className="location-card">
            <h3>{l.name}</h3>
            <p>{l.address}</p>
          </div>
        ))}
      </div>

      <div id="contact" className="contact container">
        <h3>Contact</h3>
        <p>Email: hello@khandhaba.example | Phone: +91 99999 99999</p>
      </div>
    </section>
  )
}
