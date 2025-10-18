import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetail from "./pages/ProductDetail";
import Dashboard from './pages/Dashboard'
import DashboardProfile from './pages/DashboardProfile'
import DashboardSetting from './pages/DashboardSetting'



function App() {


  return (
    <>
      <div>
        {/* Tugas 2 */}
        <Navbar />
        {/* Tugas 1 */}
        <Routes>
          <Route path="/" element={<Home />} />
          tugas
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<DashboardProfile />} /> {/* Jalur relatif: /dashboard/profile */}
            <Route path="settings" element={<DashboardSetting />} /> {/* Jalur relatif: /dashboard/settings */}
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
