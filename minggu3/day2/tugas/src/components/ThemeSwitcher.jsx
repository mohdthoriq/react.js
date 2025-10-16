import React from 'react'
import useLocalStorage from '../hook/useLocalStorage'

const ThemeSwitcher = ({ theme, isDark, setIsDark }) => {
  const [name, setName] = useLocalStorage('name', '')
  const knobPosition = isDark ? 'translate-x-6' : 'translate-x-0'
  const bgSwitch = isDark ? 'bg-indigo-600' : 'bg-yellow-400'
  return (
    <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme.cardBg} ${theme.text}`}>
      <h3 className="text-xl font-bold mb-4">Tugas 5 & Kontrol Tema</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold">Ganti Tema</span>
          <div onClick={() => setIsDark(!isDark)} className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${bgSwitch}`}>
            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${knobPosition} flex items-center justify-center text-xs`}>
              {isDark ? '🌙' : '🌞'}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="name-input" className="block text-sm font-medium mb-1">LocalStorage Hook:</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ketik nama Anda..."
            className={`p-2 rounded w-full ${theme.input}`}
          />
          <p className="mt-2 text-sm">Nama tersimpan: <span className="font-bold">{name || '...'}</span></p>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher
