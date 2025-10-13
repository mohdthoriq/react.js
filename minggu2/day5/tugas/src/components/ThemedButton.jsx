import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTheme } from "../context/ThemeContext";


export default function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#333' : '#eee',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px'
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode 🌗
    </button>
  );
}