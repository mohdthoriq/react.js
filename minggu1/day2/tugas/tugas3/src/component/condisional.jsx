import { useState } from "react"

function conditional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [messages, setMessages] = useState(["Halo!", "selamat datang kembali!"])

    return (
        <div style={{ fontFamily: "Arial", margin: "20px" }}>
            <h2>Conditional Rendering</h2>

        {/* {contoh ternary operator} */}
        <p>
            {isLoggedIn ? "anda sudah login" : "anda belum Login"}
        </p>

        {/* {contoh logical AND } */}

        {messages.length > 0 && (
            <p>
                kamu punya <strong>{messages.length}</strong> pesan baru.
            </p>
        )} 

        {/* {tombol untuk ganti state } */}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "logout" : "login"}
        </button>

        </div>
    )
}

export default conditional;