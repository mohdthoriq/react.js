export default function ButtonClicker() {
    const handleClick = () => {
        alert('Tombol Diklik!')
    }

    const handleMouseEnter = () => {
        console.log('Tombol dienter!');  
    }

    const handleMouseLeave = () => {
        console.log('Tombol Keluar!');
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
            </div>
        </>
    )
}
