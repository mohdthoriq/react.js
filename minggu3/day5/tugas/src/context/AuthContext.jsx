import { createContext } from "react";
import saveAuth, { clearAuth, isAuthenticated } from "../utils/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { fakeGetProfileAPI } from "../pages/Login";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Mulai dengan loading true


    useEffect(() => {
        const fetchUser = async () => {
            if (isAuthenticated()) {
                try {
                    const response = await fakeGetProfileAPI(localStorage.getItem('app_token_v1'));
                    const continueSession = window.confirm("Sesi Anda masih aktif. Apakah Anda ingin melanjutkan?");
                    if (continueSession) {
                        setUser(response.user);
                    } else {
                        logout();
                    }
                } catch (error) {
                    // Token tidak valid, hapus dari storage
                    clearAuth();
                }
            }
            setLoading(false);
        };

        fetchUser();
    }, [])

    const login = (userObj, token) => {
        saveAuth(token)
        setUser(userObj)
    }

    const logout = () => {
        clearAuth()
        setUser(null)
    }


    return (
        <>
            <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
