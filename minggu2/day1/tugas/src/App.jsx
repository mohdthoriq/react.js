import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClicker from './components/ButtonClicker'
import SyntheticEvent from './components/SyntheticEvent'
import Form from './components/Controlled'
import Focus from './components/UnControlled'
import RegisterForm from './components/Formulir'



function App() {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        {/* tugas1 */}
        <ButtonClicker/>
        {/* tugas2 */}
        <SyntheticEvent/>
        {/* tugas3 */}
        <Form/>
        {/* tugas4 */}
        <Focus/>
        {/* tugas5 */}
        <RegisterForm/>
      </div>
    </>
  )
}

export default App
