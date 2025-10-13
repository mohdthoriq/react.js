import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import { ThemeProvider } from './context/ThemeContext'
import ThemedButton from './components/ThemedButton'
import ThemedParagraph from './components/ThemedParagraph'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import Header from './Header'
import Footer from './Footer'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <div className='p-4'>
          {/* tugas1 */}
          <Calculator />
          {/* tugas2 & 5 digabung */}
          <div className='border rounded-lg mb-4 p-4'>
          <h1 className="mb-4 mt-4">( Tugas 2 & 5 )</h1>
          <ThemedButton />
          <ThemedParagraph />
          </div>
          {/* tugas3 */}
          <ParentComponent />
          {/* tugas4 */}
          <Counter />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
