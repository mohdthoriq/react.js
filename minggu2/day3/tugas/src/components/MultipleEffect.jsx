import { useEffect } from "react"
import { useState } from "react"

export default function MultipleEffect() {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)


    // Effect 1: berjalan setiap kali Count berubah
    useEffect(() => {
        console.log(`count telah berubah menjadi ${count}`);
        document.title=`Count: ${count}`
    },[count])

    // Effect 2: berjalan setiap kali Nama berubah
    useEffect(() => {
        console.log(`Nama telah berubah menjadi ${name}`);  
    },[name])

    



    return (
        <>
            <div className="border p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">Effect Sederhana( Tugas 4 )</h2>
                <p>count: {count}</p>
                <button onClick={() => setCount(prev => prev + 1)}>Tambah Count</button>

                <br />
                <br />
                <input 
                    type="text"
                    placeholder="Masukkan Nama"
                    className="border p-2 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <p className="">Nama: {name}</p>
            </div>
        </>
    )
}