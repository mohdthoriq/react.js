import { use } from "react";
import { useState } from "react";


export default function UserProfile() {
    const [user, setUser] = useState(" ")
    const [age, setAge] = useState(0)
    const [edit, isEdit] = useState(false)


    return (
        <>
        <div className="flex flex-col gap-4 justify-center items-center mt-50 bg-slate-500 p-4 rounded-lg">
            <h1 className="text-2xl font-bold text-black mb-6">Profile Pengguna</h1>

            {edit ? (
                <div className="flex flex-col gap-4 justify-center items-center text-black font-bold">
                    <div>
                    <label htmlFor="user">Nama Pengguna:</label>
                    <input 
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                     />
                    </div>
                    <div>
                    <label htmlFor="age">Umur:</label>
                     <input 
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    </div>

                    <button className="cursor-pointer border-2 border-black p-1 rounded-md bg-green-500 text-white" onClick={() => isEdit(false)}>simpan</button>
                </div>
            ) : (
                <div className="flex flex-col gap-4 justify-center text-black font-bold ">
                    <p>Nama: {user}</p>
                    <p>Umur: {age}</p>
                    <button className="cursor-pointer border-2 border-black p-1 rounded-md bg-red-500 text-white" onClick={() => isEdit(true)}>edit</button>
                </div>
            )}
        </div>
        </>
    )
}
