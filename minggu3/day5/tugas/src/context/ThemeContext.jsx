import { createContext, useState, useEffect, useMemo } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Ambil tema dari localStorage atau default ke 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Terapkan tema ke elemen <html> dan simpan di localStorage
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}