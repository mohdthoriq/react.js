import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { LineSpinner } from 'ldrs/react';
import StatusPage from "../pages/StatusPage";

export default function PrivateRoute({ children }) {
    const { isAuthenticated, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        // Tampilkan loading spinner saat AuthContext sedang memverifikasi token
        return <div className="centered-status"><LineSpinner size="40" stroke="3" speed="1" color="var(--color-primary)" /></div>;
    }

    if (!isAuthenticated) {
        return <StatusPage
            title="Anda Belum Login"
            message="Silakan login untuk melanjutkan atau kembali ke beranda."
            actionLink={`/login?from=${location.pathname}`}
            actionText="Login"
            type="error"
            showCloseButton={true}
        />
    }

    return children
}