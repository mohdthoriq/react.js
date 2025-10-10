import { useState } from 'react'
import './App.css'
import EffectSederhana from './components/EffectSederhana'
import DataPengguna from './components/DataPengguna'
import WindowSize from './components/WindowSize'
import MultipleEffect from './components/MultipleEffect'
import FetchSimulasi from './components/FetchSimulasi'

function App() {
  const [currentUserId, setCurrentUser] = useState(1)
  const [User, setUser] = useState(1)




  return (
    <>
      <div>
        {/* tugas 1 */}
        <EffectSederhana />
        <hr className='line'/>
        <br />
        {/* tugas 2 */}
        <DataPengguna userID={currentUserId}/>
        <button className='mb-4' onClick={() => setCurrentUser((prevId) => prevId + 1)}>Lihat Pengguna Berikutnya</button>
        <hr className='line' />
        <br />
        {/* tugas 3 */}
        <WindowSize />
        <hr className='line' />
        <br />
        {/* tugas 4 */}
        <MultipleEffect />
        <hr className='line' />
        <br />
        {/* tugas 5 */}
        <FetchSimulasi userID={User} />
        <button onClick={() => setUser((prevId) => prevId + 1)}>Lihat Pengguna Berikutnya</button> 
      </div>
    </>
  )
}

export default App
