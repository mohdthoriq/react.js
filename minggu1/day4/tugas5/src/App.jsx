import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/style.css'


function useWindowWidth() {
  const [width, setWidth] = useState(
   window.innerWidth
  )


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  })

  return width;
}


function App() {
  const width=useWindowWidth()
  const isMobile = width < 768;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'grey',
      padding: '20px',
      borderRadius: '10px',
    }}>
      <h1>Ukuran Layar anda: {width} px</h1>
      {isMobile? (
        <p className='mt-6'>anda sedang di perangkat mobile.</p>
      ) : (
        <p className='mt-6'>anda sedang di perangkat pc</p>
      )}

      <div style={{
        backgroundColor: isMobile ? "green" : "red",
        color: 'yellow',
        padding: '20px',
        textAlign: 'center',
        marginTop: '6px'
      }}>
        Berubah seiring ukuran layar.
      </div>
    </div>
  )
}

export default App
