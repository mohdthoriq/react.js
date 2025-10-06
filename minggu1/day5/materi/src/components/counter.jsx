import {useState} from 'react'

export default function Counter() {
    // struktur getter, setter
  const [count, setCount] = useState(0);
 return (
    <>
    <h1>aplikasi counter sederhana</h1>

        <p>jumlah: {count}</p>

        <div className="flex flex-row gap-4">
          <button className="border-2 border-black p-0.25 rounded-md" onClick={() => setCount(count + 1)}>+</button>
          <input
            className="border-2 border-black p-0.25 rounded-md"
            type="text"
            value={count}
            onChange={(event) => {
              setCount(event.target.value)
            }}
          />
          <button className="border-2 border-black p-1 rounded-md" onClick={() => setCount(count - 1)}>-</button>

        </div>
    </>
 )
}