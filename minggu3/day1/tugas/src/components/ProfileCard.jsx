import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.jsx";
import useAdminContext from "../hooks/useAdminContext.js"
import React from "react"

const ProfileCard = () => {
    
    const { admin, login, logout, update } = useAdminContext()
    const { theme } = useContext(ThemeContext);

    const bg = theme === "🌞" ? "#eee" : '#333'
    const bgButtonLog = theme === "🌞" ? "bg-[#0e1de9ff]" : 'bg-[#f7f30bff]'
    const textLog = theme === "🌞" ? "text-white" : 'text-black'
    const textColor = theme === "🌞" ? "#333" : '#eee'

    if (!admin) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div style={{ border: "1px solid gray", marginTop: "20px",padding: "20px", borderRadius: "10px", textAlign: "left", backgroundColor: bg, color: textColor}}>
                <h2 className="text-2xl font-semibold">Tugas 4</h2>
                <p><b>Name:</b> {admin.isLoggedIn ? admin.name : 'Not Logged In'}</p>
                <p><b>Email:</b> {admin.email}</p>

                {admin.isLoggedIn ? (
                    <>
                        <button className="border px-4 py-1 rounded-md bg-green-500 text-white font-bold" onClick={() => update("newName", "newEmail@email.com")}>Update</button>
                        <button className="border px-4 py-1 mt-4 rounded-md bg-red-500 text-white font-bold" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className={`${bgButtonLog} ${textLog} border px-4 py-1 mt-4 rounded-md font-bold `} onClick={() => login("name", "email@email.com")}>Login</button>
                    </>
                )}

            </div>
        </>
    )


}

export default ProfileCard;