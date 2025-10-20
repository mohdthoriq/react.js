import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import LoginForm from './pages/Login'
import PrivateRoute from './components/PrivateRoute'


function App() {

  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home />} />

      <Route path="/login" element={<LoginForm />} />


      <Route element={<PrivateRoute />}>
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Route>
      <Route path={"*"} element={<h1>404: Halaman Tidak Ditemukan</h1>} />
    </Routes>
     
    </>
  )
}

export default App
