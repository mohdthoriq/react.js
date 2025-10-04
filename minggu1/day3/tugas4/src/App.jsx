import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comment from './component/Comment.jsx'

function App() {
  const user = {
    name: "Muhammad Thoriq",
    avatarURL: "foto-personal.png"
  }
  return (
    <>
    <div>
      <h1>Daftar Komentar</h1>
      <Comment user={user} text="Belajar React" date="29 Oktober 2023"/>
    </div>
     
    </>
  )
}

export default App
