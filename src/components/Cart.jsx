import React from 'react'
import '../App.css'

export default function Cart({ items, onIncrease, onDecrease, onPlaceOrder }) {
  const total = items.reduce((s, it) => s + it.qty * it.price, 0)

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (   
        <p className="muted">Cart is empty</p>
      ) : (
        <div className="cart-list">
          {items.map((it) => (
            <div key={it.id} className="cart-item">
              <div>
                <div className="cart-name">{it.name}</div>
                <div className="cart-price">₹{it.price} each</div>
              </div>
              <div className="cart-controls">
                <button className="small" onClick={() => onDecrease(it.id)}>-</button>
                <span className="qty">{it.qty}</span>
                <button className="small" onClick={() => onIncrease(it.id)}>+</button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <strong>Total:</strong>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button className="btn primary" onClick={onPlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  )
}
