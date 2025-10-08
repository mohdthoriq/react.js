import { useState } from 'react'


export default function ButtonClicker() {

    const [error, setError] = useState('')


    const handleClick = () => {
        alert('Tombol Diklik!')
    }

    const handleMouseEnter = () => {
        setError('Tombol dienter!');  
    }

    const handleMouseLeave = () => {
        setError('Tombol Keluar!');
    }

    return (
        <>
            <div className="bg-slate-500 p-4 rounded-md flex flex-col items-center justify-center gap-4 mb-6">
                <h2>Event Handling Sederhana</h2>
                <button
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Klik atau Arahkan Mouse ke Saya
                </button>
                <p>{error}</p>
            </div>
        </>
    )
}
