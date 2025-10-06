import { useState } from 'react'


export default function UserProfile() {
    const [user, setUser] = useState("")
    const [age, setAge] = useState(0)
    const [edit, isEdit] = useState(false)


    return (
        <>
            <div className='flex flex-col gap-4 justify-center items-center mt-50 bg-slate-500 p-4 rounded-lg'>
                <h1 className='text-2xl font-bold text-white mb-6'>Profile Pengguna</h1>
                <div className='flex flex-col gap-4 justify-center text-black font-bold'>
                    {edit ? (
                        <div>
                            <div>
                                <label>Nama: </label>
                                <input type="text" onChange={(e) => setUser(e.target.value)} />
                            </div>
                            <div>
                                <label>Umur: </label>
                                <input type="text"  onChange={(e) => setAge(e.target.value)}/>
                            </div>
                            <button className='cursor-pointer border-2 border-black p-1 rounded-md mt-6 text-white' onClick={() => isEdit(false)}>Simpan</button>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-4 justify-center text-black text-left font-bold'>
                            <p>Nama: {user}</p>
                            <p>Umur: {age}</p>
                            <button className='cursor-pointer border-2 border-black p-1 rounded-md bg-red-500 text-white' onClick={() => isEdit(true)}>Edit</button>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}