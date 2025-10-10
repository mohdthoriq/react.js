import { useState, useEffect } from "react"

export default function UserProfile(props) {
    const { userID}  = props
    const [ user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)

        console.log(`fetching user data for ${userID}`);

        // simulasi data APi
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => response.json())
        .then (data => {
            setUser(data);
            setLoading(false)
        })
        .catch((error) => {
            console.error(error);
            setLoading(false)
        })
    }, [userID])



    if (loading) return <p>Loading...</p>
    if (!user) return <p>User tidak ditemukan</p>

    return (
        <>
            <div>
                <h2>Profile Pengguna</h2>
                <p>ID: {user.name}</p>
                <p>Nama: {user.email}</p>
            </div>
        </>
    )
}