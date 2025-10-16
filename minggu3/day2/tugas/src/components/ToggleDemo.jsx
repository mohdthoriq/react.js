import React from 'react'
import useToggle from '../hook/useToggle'

const ToggleDemo = ({ theme }) => {
  const [isModalOpen, toggleModal] = useToggle(false)
  const [isSwitchOn, toggleSwitch] = useToggle(false)

  // Logika untuk gaya toggle switch
  const bgSwitch = isSwitchOn ? 'bg-green-500' : 'bg-gray-400'
  const knobPosition = isSwitchOn ? 'translate-x-6' : 'translate-x-0'
  return (
    <div className={`p-6 rounded-lg ${theme.bg} ${theme.text} ${theme.border}`}>
      <h3 className="text-xl font-bold mb-4">Tugas 1</h3>
      <div className="space-y-4">
        <button
          onClick={toggleModal}
          className={`px-4 py-2 rounded font-semibold text-white transition ${
            isModalOpen ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {isModalOpen ? 'Tutup Modal' : 'Buka Modal'}
        </button>

        {isModalOpen && (
          <div className={`mt-3 p-4 rounded ${theme.cardBg} border-l-4 border-yellow-500`}>
            ✨ Modal sedang dibuka!
          </div>
        )}

        <div className="flex items-center gap-4">
          <div
            onClick={toggleSwitch}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${bgSwitch}`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${knobPosition}`}
            ></div>
          </div>
          <p className="font-semibold">
            Switch: {isSwitchOn ? 'ON' : 'OFF'}
          </p>
        </div>

      </div>
    </div>
  )
}

export default ToggleDemo
