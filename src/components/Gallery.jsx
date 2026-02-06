import React from 'react'
import '../App.css'

const photos = [
  { id: 1, title: 'Kebab Platter' },
  { id: 2, title: 'Butter Chicken' },
  { id: 3, title: 'Fresh Roti' },
  { id: 4, title: 'Sweet Lassi' }
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {photos.map((p) => (
          <div key={p.id} className="photo-card">
            <div className="photo-placeholder" />
            <div className="photo-caption">{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
