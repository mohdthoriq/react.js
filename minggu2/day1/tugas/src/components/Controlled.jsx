import { useState } from 'react'


export default function Form() {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`halo, ${name}!`)
        setName('')
    }

    return (
        <>
            <div className="bg-slate-500 p-4 rounded-md flex flex-col items-center justify-center gap-4 mb-6 text-left">
                <h2 className='font-bold text-2xl text-black'>Form Sederhana</h2>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nama: <br />
                    <input type="text" className='border-2 border rounded-md p-1' value={name} onChange={handleChange} placeholder='  masukan nama....'/>
                    </label>
                    <p>input: {name} </p>
                    <button className='mt-2 ml-15' type="submit">Kirim</button>
                </form>
            </div>
        </>
    )
}