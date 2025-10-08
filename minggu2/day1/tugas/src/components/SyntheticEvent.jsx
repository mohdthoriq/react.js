export default function SyntheticEvent() {
    const handleClick = (e) => {
        e.preventDefault()
        console.log('link diklik, tapi navigasi dicegah!');
        alert('link diklik')
    }

    const handleChangeInput = (e) => {
        console.log('Nilai input:', e.target.value);
    }

    return (
        <>
            <div className="bg-slate-500 p-4 rounded-md flex flex-col items-center justify-center gap-4 mb-6">
                <h2 className="font-bold text-2xl text-black">SyntheticEvent Objects</h2>
                <a href="https://www.google.com"  onClick={handleClick}>Klik Saya</a>
                <input className="border-2 border rounded-md p-1" type="text" onChange={handleChangeInput} placeholder="Ketik sesuatu..." />
            </div>
        </>
    )
}
