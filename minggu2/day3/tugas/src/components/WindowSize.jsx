import { useEffect } from "react"
import { useState } from "react"

export default function WindowSize()  {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        console.log(`komponen ini telah di muat`);


        
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log(`komponen ini telah di hapus`);
        }
    },[width, height])

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold mb-4">Window Size( Tugas 3 )</h2>
                <p>Width: {window.innerWidth}</p>
                <p>Height: {window.innerHeight}</p>
            </div>
        </>
    )
}