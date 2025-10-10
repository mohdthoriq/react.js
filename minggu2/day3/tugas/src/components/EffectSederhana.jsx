import { useEffect } from "react"

export default function EffectSederhana() {
    useEffect(() => {
        console.log(`komponen ini telah di muat`);
    }, [])

    return (
        <>
            <div className="border p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">Effect Sederhana( Tugas 1 )</h2>
                <p>lihat di Console Browser</p>
            </div>
        </>
    )
}