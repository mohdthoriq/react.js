// src/components/UserInfoDisplay.jsx
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

const UserDefault = () => {
  const { user, login, logout, Update } = useContext(UserContext);
  const { theme }  = useContext(ThemeContext);

  const bg = theme === "🌞" ? "#eee" : '#333'
  const bgButtonLog = theme === "🌞" ? "bg-[#0e1de9ff]" : 'bg-[#f7f30bff]'
  const textLog = theme === "🌞" ? "text-[#ffff]" : 'text-[#250]'
  const textColor = theme === "🌞" ? "#333" : '#eee'


  return (
    <div style={{ border: "1px solid gray", padding: "20px", borderRadius: "10px", textAlign: "left", backgroundColor: bg, color: textColor}}>
      <h2 className="text-2xl font-semibold">Tugas 1</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email || "-"}</p>
      <p><b>Status:</b> {user.isLoggedIn ? "Logged In ✅" : "Guest ❌"}</p>

      {!user.isLoggedIn ? (
        <button className={`${bgButtonLog} ${textLog} order px-4 py-1 mt-4 rounded-md font-bold `} onClick={() => login("Thoriq", "thoriq@email.com")}>
          Login
        </button>
      ) : (
        <>
          <button className="border px-4 py-1 mt-4 rounded-md bg-red-500 text-white font-bold"onClick={logout}>Logout</button>
          <button className="border px-4 py-1 rounded-md bg-green-500 text-white font-bold" onClick={() => Update("Rick", "rick@email.com")}>
            Update Profile
          </button>
        </>
      )}
    </div>
  );
};

export default UserDefault;
