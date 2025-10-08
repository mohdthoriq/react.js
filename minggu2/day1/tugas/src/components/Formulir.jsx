import { useState } from "react";

export default function RegisterForm() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorEmail('Please enter a valid email address.');
            return false;
        }
        setErrorEmail('');
        return true;
    }

    const validatepassword = (pw) => {
        if (pw.length < 8) {
            setErrorPassword('password minimal 8 karakter')
        } else {
            setErrorPassword('')
        }
    }

    const validateUsername = (username) => {
        if (username.trim() === '') {
            setErrorUsername('Username tidak boleh kosong')
        } else {
            setErrorUsername('')
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        validateUsername(e.target.value)
    }


    const handleEmailChange = (e) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        validateEmail(newEmail)
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setpassword(newPassword)
        validatepassword(newPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail(email)
        validatepassword(password)
        validateUsername(username)

        if (!errorEmail && !errorPassword && !errorUsername && email && password && username) {
            alert('Formulir berhasil dikirim!')
            console.log({username, password, email});
        } else {
            alert('Formulir gagal dikirim.')
        }
    }

    return (
        <>
            <div className="bg-slate-500 flex flex-col items-center justify-center gap-4 mb-6 p-4 rounded-md">
                <form action="" onSubmit={handleSubmit}>
                    <h2 className="font-bold text-2xl text-black">Register Form</h2>
                    <div className="text-left">
                        <label htmlFor="username">Username: <br />
                            <input className="border-2 border rounded-md p-1" type="text" value={username} onChange={handleUsernameChange} />
                        </label>
                    </div>
                    {errorUsername && <p className="text-red-500 font-0.8em">{errorUsername}</p>}
                    <div className="text-left">
                        <label htmlFor="email">Email : <br />
                            <input type="text" className="border-2 border rounded-md p-1" value={email} onChange={handleEmailChange} />
                        </label>
                    </div>
                    {errorEmail && <p className="text-red-500 font-0.8em">{errorEmail}</p>}
                    <div className="text-left">
                        <label htmlFor="password">Password: <br />
                            <input type="password" className="border-2 border rounded-md p-1"value={password} onChange={handlePasswordChange}/>
                        </label>
                    </div>
                    {errorPassword && <p className="text-red-500 font-0.8em">{errorPassword}</p>}
                    <button className="mt-2" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}
