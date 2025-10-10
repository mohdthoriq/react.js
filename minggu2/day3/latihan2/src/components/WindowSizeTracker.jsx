import { useEffect, useState } from "react"

export default function WindowSizeTracker() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }


        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width, height])




    return (
        <>
            <h2>Window Size Tracker</h2>
            <p>Width: {window.innerWidth}</p>
            <p>Height: {window.innerHeight}</p>
        </>
    )
}