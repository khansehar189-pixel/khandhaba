import React from 'react'
import '../App.css'

export default function Menu({ items, onAdd }) {
  return (
    <div>
      {items.map((section) => (
        <div key={section.id} className="menu-section">
          <h3 className="section-title">{section.title}</h3>
          <div className="menu-grid">
            {section.items.map((it) => (
              <div key={it.id} className="menu-card">
                <div className="menu-card-body">
                  <h4 className="menu-title">{it.name}</h4>
                  <p className="menu-desc">{it.description}</p>
                </div>
                <div className="menu-footer">
                  <strong>₹{it.price}</strong>
                  <button className="btn" onClick={() => onAdd(it)}>
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
