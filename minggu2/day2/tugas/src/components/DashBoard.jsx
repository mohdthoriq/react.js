import { useState } from 'react'


export default function userDashBoard() {
    const [isLogin, setIsLogin] = useState(false)
    const [messages, setMessages] = useState(["React", "Re: React", "Re:Re: React"])

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1>Tugas 2</h1>
                <h2 className='text-2xl font-bold text-red-500'>{isLogin ? "Anda sudah login" : "Anda belum login"}</h2>
                {messages.length > 0 && (<h2 className='text-2xl font-bold text-blue-500'>Anda memiliki {messages.length} pesan belum dibaca.</h2>)}
            </div>
        </>
    )
}