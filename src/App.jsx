import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import CartDrawer from './components/layout/CartDrawer'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
