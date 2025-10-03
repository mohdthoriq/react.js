import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profilecard from './component/profilecard'

function App() {

  return (
   <div style={{ display: "flex", justifyContent: "center", marginTop: "40px"}}>
    <Profilecard 
      nama="Muhammad Thoriq"
      photo="foto-personal.png"
      bio="seorang developer pemula yang sedang belajar react.js"
      skills={["React.js", "JavaScript", "HTML", "CSS"]}
    />
   </div>
  )
}

export default App
