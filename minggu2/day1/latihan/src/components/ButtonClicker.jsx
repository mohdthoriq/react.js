import React from "react";

function ButtonClicker() {
    const handleClick = () => {
        alert('Tombol diklik!')
    }

    const handleMouseEnter = () => {
        console.log('Tombol dienter!');
    }

    const handleMouseLeave = () => {
        console.log('Tombol dikeluarin!');
    }

    return (
        <div>
            <h2>Event Handling Sederhana</h2>
            <button 
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Klik atau Arahkann Mouse ke saya
            </button>
        </div>
    )
}

export default ButtonClicker;