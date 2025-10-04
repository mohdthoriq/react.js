import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'
import Button from './component/Button.jsx'


function App() {
 

  return (
    <>
      <h1>Children Props</h1>

      {/* <Card> berisi teks*/}
      <Card>
        <h2>React</h2>
        <p>contoh teks</p>
      </Card>

      {/* <Card> berisi gambar*/}
      <Card>
        <img 
          src="React JS Logo.jpeg" 
          alt="React Logo"
          style={{borderRadius: '15px', width: '100%'}} />
      </Card>

      {/* {card yang berisi tombol} */}
      <Card>
        <Button onClick={() => alert('Tombol diklik')}>Tombol</Button>
      </Card>
    </>
  )
}

export default App
