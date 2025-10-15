import { useState } from "react"
import LanguageContext from "./LanguageContext"

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('English')

    const changeLanguage = () => {
        setLanguage(language === 'English' ? 'Indonesia' : 'English')
    }

    const value = { language, changeLanguage }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
    
}

export default LanguageProvider;