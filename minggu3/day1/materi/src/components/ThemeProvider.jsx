import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme => theme === "light" ? "dark" : "light");
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