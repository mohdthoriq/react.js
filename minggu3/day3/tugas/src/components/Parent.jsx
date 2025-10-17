import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('🌞')

  console.log('🧠 Parent rendered')

  return (
    <div className="p-6 bg-slate-800 rounded-2xl shadow-lg flex flex-col gap-4 w-full text-center flex-grow border border-slate-700">
      <h1 className="text-xl font-bold mb-2 text-white">Tugas 1: React.memo</h1>

      <p className="text-slate-300">Count: <span className="text-yellow-400 font-mono">{count}</span></p>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all"
      >
        Increment
      </button>

      <p className="text-slate-300">Theme: <span className="text-yellow-400 font-mono text-2xl">{theme}</span></p>
      <button
        onClick={() => setTheme(prev => (prev === '🌞' ? '🌙' : '🌞'))}
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all"
      >
        Toggle Theme
      </button>

      <Child theme={theme} />
    </div>
  )
}
