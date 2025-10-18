import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // Komponen untuk 404
import Dashboard from './pages/DashBoard'; // Import Dashboard
import DashboardProfile from './pages/DashBoardProfile'; // Import DashboardProfile
import DashboardSettings from './pages/DashBoardSettings'; // Import DashboardSettings
import './App.css'
import ProductDetail from './pages/ProductDetail';

function App() {


  return (
    <>
      <div>
        <h1>Aplikasi React Router</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Tentang Kami (NavLink)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal'
                })}
              >
                Kontak (NavLink dengan style)

              </NavLink>
            </li>
            <li><Link to="/products/1">Produk 1</Link></li> {/* Contoh link dengan parameter */}
            <li><Link to="/products/abc">Produk ABC</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li> {/* Link ke dashboard */}
          </ul>
        </nav>



        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> {/* Definisi route parameter */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<DashboardProfile />} /> {/* Jalur relatif: /dashboard/profile */}
            <Route path="settings" element={<DashboardSettings />} /> {/* Jalur relatif: /dashboard/settings */}
            <Route index element={<h3>Pilih salah satu menu di atas.</h3>} /> {/* Default child route */}
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Route untuk 404 (catch-all) */}
        </Routes>
      </div>
    </>
  )
}

export default App
