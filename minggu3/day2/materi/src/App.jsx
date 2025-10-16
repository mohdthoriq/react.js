import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FriendsStatus from './components/FriendsStatus'
import UserStatus from './components/UserStatus'
import PostViewer from './components/PostViewer'

function App() {
   const [currentPostId, setCurrentPostId] = useState(1);


  return (
    <>
      <div>
        <h2>Contoh Tanpa Custom Hook (Logika Duplikat)</h2>
        <p>Status Teman 1: <FriendsStatus friendId={1} /></p>
        <p>Status Teman 2: <FriendsStatus friendId={2} /></p>
        <p>Status Anda: <UserStatus /></p>
      </div>
      <br /><br /><br />
      <div>
        <h2>Contoh Hooks Composition (useFetch)</h2>
        <PostViewer postId={currentPostId} />
        <button onClick={() => setCurrentPostId(prevId => prevId + 1)}>
          Lihat Postingan Berikutnya
        </button>
      </div>
    </>
  )
}

export default App
