import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import LanguageContext from "../context/LanguageContext"
import NotifikasiContext from "../context/NotifikasiContext"

const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { notifikasi, addNotification, clearNotification } = useContext(NotifikasiContext)
    const { theme } = useContext(ThemeContext)

    // Perbaikan: Sesuaikan pengecekan tema menjadi "light" atau "dark"
    const bgColor = theme === '🌞' ? 'bg-white' : 'bg-black'
    const textColor = theme === '🌞' ? 'text-black' : 'text-white'
    const bgButtonAdd = theme === "🌞" ? "bg-[#0e1de9ff]" : 'bg-[#f7f30bff]'
    const textAdd = theme === "🌞" ? "text-[#ffff]" : 'text-[#250]'




    return (
        <>
            <header className={`${bgColor} ${textColor} p-10 flex justify-between items-center rounded-md shadow-md`}>
                <div>
                    🌍 Language: <strong>{language}</strong>{" "}
                    <button onClick={changeLanguage} className="border px-4 py-1 rounded-md bg-green-500 text-white" >
                        Toggle
                    </button>
                </div>

                <div>
                    🔔 Tugas 3 Notification: <strong>{notifikasi}</strong>{" "}
                    <button className={`${bgButtonAdd} ${textAdd} px-4 py-1 rounded-md font-bold `} onClick={addNotification}>
                        Add
                    </button>
                    <button onClick={clearNotification}  className="border px-4 py-1 rounded-md bg-red-500 text-black">
                        🗑️
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;