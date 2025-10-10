import { useState, useEffect } from "react"
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'

export default function FetchSimulasi(props) {
    const { userID } = props
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    useEffect(() => {
        setLoading(true) // Selalu set loading ke true saat effect dimulai
        console.log(`Memulai simulasi fetch untuk userID: ${userID}`);

        // Simulasi penundaan fetch data menggunakan setTimeout
        const simulationTimer = setTimeout(() => {
            console.log(`Melakukan fetch data API untuk userID: ${userID}`);
            fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
                .then(response => response.json())
                .then(data => {
                    setUser(data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("Error saat fetch:", error);
                    setLoading(false)
                })
        }, 1500); // Menambahkan delay 1.5 detik

        // Cleanup function untuk membersihkan timer jika komponen di-unmount
        // atau jika userID berubah sebelum timeout selesai.
        return () => clearTimeout(simulationTimer);

    }, [userID])




    if (loading) return <div>
        <Waveform size="35" stroke="3.5" speed="1" color="white"/>
        <p>Loading...</p>
    </div>
    if (!user) return <p>User tidak ditemukan</p>

    return (
        <>
        <div className="border p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold mb-4">Fetch Simulasi( Tugas 5 )</h2>
            <div className="max-w-sm mx-auto p-4 rounded-lg grid grid-cols-[auto_auto_1fr] gap-x-2">
                <p className="font-semibold text-left">ID</p><p>:</p><p className="text-left"> {user.id}</p>
                <p className="font-semibold text-left">Nama</p><p>:</p><p className="text-left"> {user.name}</p>
                <p className="font-semibold text-left">City</p><p>:</p><p className="text-left">{user.address.city}</p>
            </div>
        </div>

        </>
    )
}