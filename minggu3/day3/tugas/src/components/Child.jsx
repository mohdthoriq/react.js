import React from 'react'

function Child({ theme }) {
  console.log('👶 Child rendered')

  const bgButton = theme === '🌞' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'

  return (
    <div className={`mt-4 p-4 rounded-lg ${bgButton} transition-colors duration-300`}>
      <p className="font-semibold">Child Component</p>
      <p>Current Theme: {theme}</p>
    </div>
  )
}

// 🔥 React.memo mencegah re-render kalau props-nya gak berubah
export default React.memo(Child)
