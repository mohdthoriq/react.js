import { useEffect, useState } from "react";

export default function MultipleEffectComponents() {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)


    // Effect 1: berjalan setiap kali Count berubah
    useEffect(() => {
        console.log(`count telah berubah menjadi ${count}`);
        document.title=`Count: ${count}`
    }, [count])

    // Effect 2: berjalan setiap kali Nama berubah
    useEffect(() => {
        console.log(`Nama telah berubah menjadi ${name}`);  
    },[name])

    // Effect 3: berjalan setiap kali Nama dan Count berubah
    useEffect(() => {
        console.log(`komponen ini telah di muat`);

        const handleKeyDown = (e) => {
            console.log(`Tombol ${e.key} ditekan`);
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            console.log(`komponen ini telah di hapus`);
        }
        
    }, [])

    

    return (
        <>
            <h2>Komponen Multiple Effect</h2>
            <p>count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Tambah Count</button>

            <br />
            <br />

            <input
                placeholder="Masukkan Nama"
                className="border p-2 rounded-md"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <p>Nama: {name}</p>
        </>
    )
}