import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import ProductList from './components/layout/ProductList'
import CartDrawer from './components/layout/CartDrawer'

function App() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <ProductList />
      </main>
    </>
  )
}

export default App
