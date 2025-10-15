import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import LanguageContext from "../context/LanguageContext"
import NotifikasiContext from "../context/NotifikasiContext"

const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { notifikasi, addNotification, clearNotification } = useContext(NotifikasiContext)
    const { theme } = useContext(ThemeContext)

    const bgColor = theme === '🌞' ? 'bg-[#E5E1DA]' : 'bg-[#40534C]';
    const textColor = theme === '🌞' ? 'text-[#3A4D39]' : 'text-[#E4E4D0]';
    const buttonPrimaryBg = theme === '🌞' ? 'bg-[#739072]' : 'bg-[#94A684]';
    const buttonPrimaryText = theme === '🌞' ? 'text-white' : 'text-[#1A3636]';
    const buttonSecondaryBg = theme === '🌞' ? 'bg-red-400' : 'bg-red-700'




    return (
        <>
            <header className={`${bgColor} ${textColor} p-4 my-4 flex justify-between items-center rounded-md shadow-md`}>
                <div>
                    🌍 Language: <strong>{language}</strong>{" "}
                    <button onClick={changeLanguage} className={`${buttonPrimaryBg} ${buttonPrimaryText} ml-2 px-4 py-1 rounded-md font-semibold`} >
                        Toggle
                    </button>
                </div>

                <div>
                    🔔 Tugas 3 Notification: <strong>{notifikasi}</strong>{" "}
                    <button className={`${buttonPrimaryBg} ${buttonPrimaryText} ml-2 px-4 py-1 rounded-md font-semibold`} onClick={addNotification}>
                        Add
                    </button>
                    <button onClick={clearNotification}  className={`${buttonSecondaryBg} text-white ml-2 px-4 py-1 rounded-md font-semibold`}>
                        🗑️
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;