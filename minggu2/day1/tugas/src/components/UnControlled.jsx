import { useRef } from 'react'


export default function Focus() {
    const input = useRef(null)

    const handleSubmit =  (e) => {
        e.preventDefault()
        alert(input.current.value)
        input.current.value = ''
    }

    return (
        <>
            <div className="bg-slate-500 p-4 rounded-md flex flex-col items-center justify-center gap-4 mb-6">
                <form action="" onSubmit={handleSubmit}>
                    <h2 className='font-bold text-2xl text-black'>Form Sederhana</h2>
                    <label htmlFor="name">Nama:
                    <input className='border-2 border rounded-md p-1' type="text" ref={input} defaultValue="Anda" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
