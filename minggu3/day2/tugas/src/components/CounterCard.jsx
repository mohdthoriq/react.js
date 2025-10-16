import React from 'react'
import useCounterWithToggle from '../hook/useCounterWithToggle'

const CounterCard = ({ theme }) => {
  const { count, increment, decrement, reset, isVisible, toggleVisibility } = useCounterWithToggle(0)

  return (
    <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme.cardBg} ${theme.text}`}>
      <h3 className="text-xl font-bold mb-4">Tugas 3</h3>
      <button
        onClick={toggleVisibility}
        className="mb-3 px-4 py-2 bg-yellow-500 rounded text-white font-semibold"
      >
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isVisible && (
        <div className="space-x-3">
          <button onClick={decrement} className="px-3 py-1 bg-red-500 rounded text-white">-</button>
          <span>{count}</span>
          <button onClick={increment} className="px-3 py-1 bg-green-500 rounded text-white">+</button>
          <button onClick={reset} className="px-3 py-1 bg-gray-500 rounded text-white">Reset</button>
        </div>
      )}
    </div>
  )
}

export default CounterCard
