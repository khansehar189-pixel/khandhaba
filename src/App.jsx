import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Gallery from './components/Gallery'
import Locations from './components/Locations'
import Footer from './components/Footer'
import menuData from './data/menu'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart((c) => {
      const existing = c.find((ci) => ci.id === item.id)
      if (existing) return c.map((ci) => (ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci))
      return [...c, { ...item, qty: 1 }]
    })
  }

  function increase(id) {
    setCart((c) => c.map((ci) => (ci.id === id ? { ...ci, qty: ci.qty + 1 } : ci)))
  }

  function decrease(id) {
    setCart((c) =>
      c
        .map((ci) => (ci.id === id ? { ...ci, qty: ci.qty - 1 } : ci))
        .filter((ci) => ci.qty > 0)
    )
  }

  function clearCart() {
    setCart([])
  }

  function placeOrder() {
    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }
    const summary = cart.map((c) => `${c.qty} x ${c.name}`).join('\n')
    const total = cart.reduce((s, c) => s + c.qty * c.price, 0)
    alert(`Order placed:\n${summary}\n\nTotal: ₹${total.toFixed(2)}`)
    clearCart()
  }

  return (
    <div id="app-root">
      <Header />
      <Hero />

      <main className="container layout">
        <section className="menu">
          <h2>Menu</h2>
          <Menu items={menuData} onAdd={addToCart} />
        </section>

        <aside className="cart">
          <Cart items={cart} onIncrease={increase} onDecrease={decrease} onPlaceOrder={placeOrder} />
        </aside>
      </main>

      <Gallery />
      <Locations />
      <Footer />
    </div>
  )
}

export default App
