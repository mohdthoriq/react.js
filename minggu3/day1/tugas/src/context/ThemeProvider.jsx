import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
    // Perbaikan: useState mengembalikan array [value, setValue], bukan objek.
    const [theme, setTheme] = useState("🌞");

    const toggleTheme = () => {
        setTheme(theme => theme === "🌞" ? "🌙" : "🌞");
    }

    const contextValue = { theme, toggleTheme }

    return (
        <>
            <ThemeContext.Provider value={contextValue}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}