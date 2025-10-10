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
        <hr />
        <br />
        {/* tugas 2 */}
        <DataPengguna userID={currentUserId}/>
        <button onClick={() => setCurrentUser((prevId) => prevId + 1)}>Lihat Pengguna Berikutnya</button>
        <hr />
        <br />
        {/* tugas 3 */}
        <WindowSize />
        <hr />
        <br />
        {/* tugas 4 */}
        <MultipleEffect />
        <hr />
        <br />
        {/* tugas 5 */}
        <FetchSimulasi userID={User} />
        <button onClick={() => setUser((prevId) => prevId + 1)}>Lihat Pengguna Berikutnya</button> 
      </div>
    </>
  )
}

export default App





