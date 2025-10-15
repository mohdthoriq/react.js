import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './context/UserProvider'
import UserDefault from './components/UserDefault'
import ThemeProvider from './context/ThemeProvider'
import ThemedButton from './components/ThemedButton'
import Header from './components/Header'
import LanguageProvider from './context/LanguageProvider'
import NotifikasiProvider from './context/NotifikasiProvider'
import AdminProvider from './context/AdminProvider'
import ProfileCard from './components/ProfileCard'
import CartProvider from './context/CartProvider'
import ProductList from './components/ProductList'
import CartDisplay from './components/CartDisplay'


function App() {

  return (
    <>
      <div className=''>
        {/* Perbaikan: Bungkus komponen dengan ThemeProvider agar context bisa diakses */}
        <ThemeProvider>

          <LanguageProvider>
            <NotifikasiProvider>

                 <ThemedButton  />
                 <Header/>

            </NotifikasiProvider>
          </LanguageProvider>

          <AdminProvider>
            <div>
              <ProfileCard />
            </div>
          </AdminProvider>
         
          <UserProvider>
            <UserDefault />
          </UserProvider>

            <CartProvider>
               <h1 className="text-3xl font-bold text-center my-6">Tugas 5 🛒 My Shopping App</h1>
              <ProductList />
              <CartDisplay />
            </CartProvider>
            
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
