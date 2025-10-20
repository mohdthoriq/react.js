import { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

async function fakeLoginAPI({ email, password }) {
    await new Promise((r) => setTimeout(r, 1000))

    // Cek kredensial admin
    if (email === 'admin123@gmail.com' && password === 'admin123') {
        return {
            user: { id: 0, name: 'Admin', email, role: 'admin' },
            token: "fake-admin-jwt-token"
        }
    }

    // Login untuk pengguna biasa
    return {
        user: { id: 1, name: email.split("@")[0] || 'user', email, role: 'user' },
        token: "fake-user-jwt-token"
    }
}

export async function fakeGetProfileAPI(token) {
    await new Promise((r) => setTimeout(r, 500));

    if (token === "fake-admin-jwt-token") {
        return { user: { id: 0, name: 'Admin', email: 'admin123@gmail.com', role: 'admin' } };
    }
    if (token === "fake-user-jwt-token") {
        return { user: { id: 1, name: 'user', email: 'user@example.com', role: 'user' } };
    }
    throw new Error("Invalid token");
}

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useAuth()

    const from = location.state?.from || "/products"

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await fakeLoginAPI({ email, password })
            login(response.user, response.token)
            navigate(from, { replace: true })
        } catch (error) {
            setError("Invalid email or password")
        } finally {
            setLoading(false)
        }
    }



    return (
        <>
            <div className="login-container">
                <h1>Login</h1>
                {error && <div className="login-error">{error}</div>}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            required
                        />
                    </div>
                    <button
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </>
    )
}
