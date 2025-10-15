import { useState } from "react"
import NotifikasiContext from "./NotifikasiContext"

const NotifikasiProvider = ({ children }) =>  {
    const [notifikasi, setNotifikasi] = useState(2)


    const addNotification = () => setNotifikasi(prev => prev + 1)
    const clearNotification = () => setNotifikasi(0)

    const value = { notifikasi, addNotification, clearNotification }

    return (
        <NotifikasiContext.Provider value={value}>
            {children}
        </NotifikasiContext.Provider>
    )
}

export default NotifikasiProvider;
    