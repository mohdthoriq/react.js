import React from 'react'
import useLocalStorage from '../hook/useLocalStorage'

const ThemeSwitcher = ({ theme, isDark, setIsDark }) => {
    const [name, setName] = useLocalStorage('name', '')
    const currentTheme = isDark ? '🌙' : '🌞'

    return (
        <div className={`p-6 rounded-lg flex justify-between items-center space-x-3 relative ${theme.bg} ${theme.text} ${theme.border}`}>
            <div className='w-full'>
                <h3 className="text-xl font-bold mb-4">Tugas 5</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama..."
                    className={`p-2 rounded w-full ${theme.input}`}
                />
                <p className="mt-2">Nama kamu: <span className="font-bold">{name}</span></p>

            </div>

            <div className='absolute right-8 top-0'>
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="mt-3 px-4 py-2 bg-blue-200 rounded text-white"
                >
                    {currentTheme}
                </button>
            </div>
        </div>
    )
}

export default ThemeSwitcher
