import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetch from './components/DataFetch'
import AxiosData from './components/AxiosData'
import Abort from './components/Abort'
import FilterUser from './components/FilterUser'

function App() {

  return (
    <>
      <div className='flex flex-col gap-4 justify-center items-center'>
        {/* tugas 1 */}
        <DataFetch />
        {/* tugas 2 & 3*/}
        <AxiosData/>
        {/* tugas 4 */}
        <Abort/>
        {/* tugas 5 */}
        <FilterUser/>
      </div>
    </>
  )
}

export default App
