import React from 'react'
import ToggleDemo from './components/ToggleDemo'
import FormExample from './components/FormExample'
import useLocalStorage from './hook/useLocalStorage'
import { lightTheme, darkTheme } from './theme/themeConfig'
import ThemeSwitcher from './components/ThemeSwitcher'
import PostCard from './components/PostCard'
import CounterCard from './components/CounterCard'
import './App.css'

export default function App() {
  const [isDark, setIsDark] = useLocalStorage('theme', false)
  const theme = isDark ? darkTheme : lightTheme

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className={`min-h-screen p-4 sm:p-8 transition-colors duration-300 ${theme.bg} ${theme.text}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">React Custom Hooks Showcase</h1>
        <div className="flex flex-col gap-6">
          <ThemeSwitcher theme={theme} isDark={isDark} setIsDark={setIsDark} />
          <ToggleDemo theme={theme} />
          <PostCard theme={theme} />
          <CounterCard theme={theme} />
          <FormExample theme={theme} />
        </div>
      </div>
    </div>
  )
}
