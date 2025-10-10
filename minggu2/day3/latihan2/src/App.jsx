import { useState } from 'react'
import './App.css'
import UserProfile from './components/userProfile'
import WindowSizeTracker from './components/WindowSizeTracker'
import MultipleEffectComponents from './components/MultipleEffectComponent'

function App() {
  const [currentUserId, setCurrentUser] = useState(1)


  return (
    <>
      <div>
        {/* <h1>Profile Pengguna</h1>
        <br />
        <UserProfile userID={currentUserId}/>

        <button onClick={() => setCurrentUser((prevId) => prevId + 1)}>Lihat Pengguna Berikutnya</button> */}


        {/* <WindowSizeTracker/> */}

        <MultipleEffectComponents />
      </div>
    </>
  )
}

export default App
