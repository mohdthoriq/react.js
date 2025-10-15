import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './context/UserProvider'
import UserDefault from './components/UserDefault'
import ThemeProvider from './context/ThemeProvider'
import ThemedButton from './components/ThemedButton'
import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import LanguageProvider from './context/LanguageProvider'
import NotifikasiProvider from './context/NotifikasiProvider'
import AdminProvider from './context/AdminProvider'
import ProfileCard from './components/ProfileCard'
import CartProvider from './context/CartProvider'
import ProductList from './components/ProductList'
import CartDisplay from './components/CartDisplay'


function AppContent() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === '🌞' ? '#cec89aff' : '#1A3636',
    color: theme === '🌞' ? '#3A4D39' : '#E4E4D0',
    minHeight: '100vh',
    padding: '2rem',
    transition: 'background-color 0.3s, color 0.3s'
  };

  return (
    <div style={appStyle}>
      <LanguageProvider>
        <NotifikasiProvider>
          <ThemedButton />
          <Header />
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
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
