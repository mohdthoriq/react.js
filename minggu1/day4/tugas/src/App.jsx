import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileBox from './components/ProfileBox'
import './components/tugas2.css'
import Button from './components/Button/MyButton'
import DynamicCard from './components/AlertBox/DynamicCard'



function App() {

  return (
    <>
      <ProfileBox 
        image='Demon slayer.jpeg'
        name='Tanjirou'
        bio='ini menggunakan Inline css'
      />

      <div className='container'>
        <img className='img' src="Demon slayer.jpeg" />
        <h2 className='text'>Tanjirou</h2>
        <p className='bio'>ini menggunakan classname dari CSS</p>
      </div>

      <Button type="primary" onClick={() => alert('telah diklik contoh primary')}>
        klik disini
      </Button>
      <Button onClick={() => alert('telah diklik contoh default')}>
        klik disini
      </Button>


      <DynamicCard title="Sukses" content="Data berhasil diproses." status="success" />
      <DynamicCard title="Peringatan" content="Periksa kembali input Anda." status="warning" />
      <DynamicCard title="Error" content="Terjadi kesalahan." status="error" />

    
    </>
  )
}

export default App
