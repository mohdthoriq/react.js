import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/calculator'
import CounterWithReducer from './components/CounterWithReducer'
import { ThemeProvider } from './context/ThemeContext'
import ThemedButton from './components/ThemedButton'
import ThemedParagraph from './components/ThemedParagraph'

function App() {
  

  return (
    <>
      <div>
        <Calculator />
        <CounterWithReducer />
        <ThemeProvider>
          <ThemedButton />
          <ThemedParagraph />
        </ThemeProvider>
      </div>    
    </>
  )
}

export default App
