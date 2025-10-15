import { useState } from "react"
import AdminContext from "./AdminContext"

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState({
        name: 'Guest',
        email: 'guest@example.com',
        isLoggedIn: false,
    })

    const login = (name, email) => {
        setAdmin({
            name,
            email,
            isLoggedIn: true,
        })
    }

    const logout = () => {
        setAdmin({ name: 'Guest', email: 'guest@example.com', isLoggedIn: false })
    }

    const update = (newName, newEmail) => {
        setAdmin(prev => ({
            ...prev,
            name: newName,
            email: newEmail,
        }))
    }

    const value = { admin, login, logout, update }

    return (
        <>
            <AdminContext.Provider value={value}>
                {children}
            </AdminContext.Provider>
        </>
    )
} 

export default AdminProvider;