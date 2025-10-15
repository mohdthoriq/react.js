import { useState } from "react"
import UserContext from "./UserContext"

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Guest",
        email: "",
        isLoggedIn: false // Nama properti yang benar adalah isLoggedIn (dengan 'I' besar)
    })

    const login = (name, email) => {
        setUser({ name, email, isLoggedIn: true })
    }

    const logout = () => {
        setUser({ name: "Guest", email: '', isLoggedIn: false })
    }

    // Fungsi Update seharusnya tidak membungkus sisa logika komponen.
    const Update = (name, email) => {
        setUser(prev => ({
            ...prev,
            name,
            email
        }))
    } // Kurung kurawal penutup untuk fungsi Update seharusnya ada di sini.

    const value = { user, login, logout, Update }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
