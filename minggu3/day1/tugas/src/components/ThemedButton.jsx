import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedButton() {
    // Perbaikan: useContext mengembalikan objek, jadi gunakan {} untuk destructuring.
    const { theme, toggleTheme } = useContext(ThemeContext);

    const buttonStyle = {
        backgroundColor: theme === '🌞' ? '#eee' : '#333',
        color: theme === '🌞' ? '#333' : '#eee',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold'
    }

    return (
        <>
            <button style={buttonStyle} onClick={toggleTheme}>
               tugas 2 {theme}
            </button>
        </>
    )
    
}
