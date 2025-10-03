import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button.jsx'
import Mailbox from './component/Mailbox.jsx'
import Wrapper from './component/Wrapper.jsx'
import getGreeting from './component/getGretting.jsx'
import Map from './component/map.jsx'




function App() {
  const [todos, setTodos] = useState(["belajar react", "belajar vite"])
  const [input, setInput] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input])
      setInput("")
    }
  }


  return (
   <div className="container">
    {/* {1.JSx & expresi} */}
    <h1>Todo List {new Date().getFullYear()}</h1>

    {/* {2.conditional rendering} */}
    {isLoggedIn ? (
      <p>selamat datang kembali, Thoriq</p>
    ) : (
      <p>anda belum login</p>
    )}

    {/* {3.input dan button} */}
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='tambah todo...' 
        style={{
          height: "30px",
          width: "100%",
          margin: "10px 0",
          padding: "10px",
          borderRadius: "4px",
        }}
    />
    <Button text="tambah" color="blue" onClick={addTodo} />

    {/* {4. render list} */}
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>

    {/* {5. component composition} */}
    <Wrapper color="lightblue">
      <h2>ini di dalam wrapper</h2>
      <p>ini adalah contoh component composition</p>
    </Wrapper>

    <Mailbox unreadMessages={['halo', 'apa kabar']}/>
    <Mailbox unreadMessages={[]}/>

    {getGreeting(isLoggedIn)}


    <Map />
    
    
   </div>
  )
}

export default App
