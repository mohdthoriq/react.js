import { useState } from "react"
import { useEffect } from "react"


export default function DataFetch() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }


        fetchData()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">Error: {error.message}</p>

    return (
        <>
        <div className="w-100 border rounded-lg p-4">
            <h2 className="flex flex-col justify-center gap-4 text-2xl font-bold">Fetch Data: ( Tugas 1 )</h2>
            {data && (
                <>
                    <p>{data.title}</p>
                    <p>{data.body}</p>
                </>
            )}
        </div>
        </>
    )
}