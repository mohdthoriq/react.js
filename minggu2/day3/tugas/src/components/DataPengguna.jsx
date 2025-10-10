import { useState } from "react"
import { useEffect } from "react"

export default function DataPengguna(props) {
    const {userID} = props
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        console.log(`fetching user data for ${userID}`);

       fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
            setLoading(false)
        })
        .catch(error => {
            console.error("fetch error" ,error)
            setLoading(false)
        })
        
    }, [userID])


    if (loading) return <p>Loading...</p>
    if (!user) return <p>User tidak ditemukan</p>

    return (
        <>
            <div className="border p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">Profile Pengguna( Tugas 2 )</h2>
                <p>ID: {user.id}</p>
                <p>Nama: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>

        </>
    )
}