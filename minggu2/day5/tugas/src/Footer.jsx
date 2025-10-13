import { useTheme } from "./context/ThemeContext"

export default function Footer() {
    const { theme } = useTheme()

    return (
        <>
            <footer className={`p-10 text-center w-full py-3 ${theme.toLowerCase() === 'light' ? 'bg-white text-gray-800 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                <p>&copy; 2025 My Website. All rights reserved. Theme: {theme}</p>
            </footer>
        </>
    )
}