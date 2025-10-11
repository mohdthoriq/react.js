import { useState } from "react"
import { useEffect } from "react"
import { use } from "react"

export default function Abort() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch dibatalkan')
                } else {
                    setError(err)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
            console.log('Permintaan dibatalkan saat cleanup.')
        }

    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">Error: {error.message}</p>


    return (
        <>
        <div className="w-100 border rounded-lg p-4">
            <h2 className="flex flex-col justify-center gap-4 text-2xl font-bold">data dari Fetch API (dengan AbortController) ( tugas 4)</h2>

            {data && (
                <div>
                    <p>{data.title}</p>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
        </>
    )    
}