import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchDataComponent from './components/FetchDataComponent'
import AsyncAwaitInEffect from './components/AsyncAwaitInEffect'
import AxiosDataComponent from './components/AxiosDataComponent'
import AbortFetchComponent from './components/AbortFetchComponent'
import UserListManipulated from './components/UserListManipulation'


function App() {


  return (
    <>
      <div className='flex flex-col gap-4'>
        {/* fetch api */}
        <FetchDataComponent />
        {/* Axios data */}
        <AxiosDataComponent />
        {/* Async await in effect */}
        <AsyncAwaitInEffect />
        {/* Abort Controller */}
        <AbortFetchComponent/>
        {/* JSON Data Manipulation */}
        <UserListManipulated/>

      </div>
    </>
  )
}

export default App
