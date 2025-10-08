import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClicker from './components/ButtonClicker'
import LinkPreventer from './components/LinkPreventer'
import UncontrolledNameForm from './components/UnController'
import RegistrationForm from './components/FormSubmission'
import ValidationForm from './components/ValidationForm'





function App() {
  

  return (
    <>
    <div className='flex flex-col justify-center items-center gap-4'>
      <ButtonClicker/>
      <LinkPreventer/>
      <UncontrolledNameForm/>
      <RegistrationForm/>
      <ValidationForm/>
    </div>
    </>
  )
}

export default App
