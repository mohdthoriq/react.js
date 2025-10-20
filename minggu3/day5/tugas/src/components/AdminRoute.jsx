import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { LineSpinner } from 'ldrs/react';
import StatusPage from "../pages/StatusPage";

export default function AdminRoute({ children }) {
    const { user, isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="centered-status"><LineSpinner size="40" stroke="3" speed="1" color="var(--color-primary)" /></div>;
    }

    // Jika tidak terautentikasi, arahkan ke halaman login
    if (!isAuthenticated) {
        return <StatusPage title="Anda Belum Login" message="Silakan login untuk melanjutkan." actionLink={`/login?from=${location.pathname}`} actionText="Login" type="error" showCloseButton={true} />;
    }

    // Jika terautentikasi tetapi bukan admin, tampilkan halaman akses ditolak
    if (user.role !== 'admin') {
        return <StatusPage title="Akses Ditolak" message="Halaman ini hanya dapat diakses oleh Administrator." actionLink="/" actionText="Kembali ke Beranda" type="error" />;
    }

    // Jika admin, tampilkan konten
    return children;
}