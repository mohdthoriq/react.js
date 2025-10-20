import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const isAuthenticated = localStorage.getItem('authToken') !== "";


    if (isAuthenticated) {
        return <Outlet />
    } else {
        alert('Anda harus login terlebih dahulu')
        return <Navigate to='/login' />
    }

}
