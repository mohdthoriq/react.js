import { useEffect } from "react"
import { useState } from "react"

export default function FilterUser() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) throw new Error('Network Error')
                const data = await response.json()

                // manipulation data before displaying
                const filtered = data   
                    .filter((user)=> user.name[0].toUpperCase() >= "C")
                    .slice(0.5)

                setUsers(filtered)
            } catch (error) {
                setError(Error)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">Error: {error.message}</p>


    return(
        <>
        <div className="w-100 border rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Filter User ( Tugas 5 )</h2>
            <ul>
                {users.map((user) => (
                    <li 
                        key={user.id}
                        className="p-3 shadow-md rounded-lg border mb-2">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}