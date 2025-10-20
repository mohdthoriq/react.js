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
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import Login from './pages/Login'
import NotFound from './pages/NotFound'



function App() {


  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        {/* Tugas 2 */}
        <Navbar />
        {/* Tugas 1 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Semua route di bawah ini sekarang menjadi privat */}
          <Route path="/products" element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          } />
          <Route path="/product/:id" element={
            <PrivateRoute>
                <ProductDetail />
            </PrivateRoute>
            } />
          <Route path="/about" element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          } />
          <Route path="/contact" element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>} />
          <Route path="/dashboard" element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }>
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSetting />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
