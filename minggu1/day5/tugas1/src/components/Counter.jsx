import {  useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev -1)
    }

  return (
    <>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h1>Aplikasi Counter sederhana</h1>
            <p>Jumlah: {count}</p>

            <div className='flex flex-row gap-4'>
                <button onClick={increment}>+</button>

                <input type="text" value={count} onChange={(e) => {
                    setCount(e.target.value)
                }} 
                />

                <button onClick={decrement}>-</button>
            </div>
        </div>

    </>
  )
}