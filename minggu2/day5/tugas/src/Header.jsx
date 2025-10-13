import { useTheme } from "./context/ThemeContext";

export default function Header() {
    const { theme } = useTheme()

    return (
        <>
            <header className={`p-6 text-center transition-all duration-300 ease-in-out shadow-md ${theme.toLowerCase() === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-900 text-white'}`}>
                <h2>{theme.toLowerCase() === 'light' ? '🌞 Light Theme' : '🌙 Dark Theme'}</h2>
            </header>
        </>
    )
}