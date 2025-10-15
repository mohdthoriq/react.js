import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.jsx";
import useAdminContext from "../hooks/useAdminContext.js"
import React from "react"

const ProfileCard = () => {
    
    const { admin, login, logout, update } = useAdminContext()
    const { theme } = useContext(ThemeContext);

    const bg = theme === '🌞' ? '#E5E1DA' : '#40534C';
    const textColor = theme === '🌞' ? '#3A4D39' : '#E4E4D0';
    const buttonPrimaryBg = theme === '🌞' ? 'bg-[#739072]' : 'bg-[#94A684]';
    const buttonPrimaryText = theme === '🌞' ? 'text-white' : 'text-[#1A3636]';

    if (!admin) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div style={{ marginTop: "20px",padding: "20px", borderRadius: "10px", textAlign: "left", backgroundColor: bg, color: textColor}}>
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
                        <button className={`${buttonPrimaryBg} ${buttonPrimaryText} px-4 py-1 mt-4 rounded-md font-bold`} onClick={() => login("name", "email@email.com")}>Login</button>
                    </>
                )}

            </div>
        </>
    )


}

export default ProfileCard;