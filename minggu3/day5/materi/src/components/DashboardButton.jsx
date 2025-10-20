import { useNavigate } from "react-router-dom";

export default function DashboardButton() {
   const navigate = useNavigate();

   const handleGotoHomeAndReplace = () => {
    navigate('/', { replace: true });
   }

   const handleGotoDashboard = () => {
    navigate('/dashboard');
   }

   const handleGoBack = () => {
    navigate(-1); // Navigasi ke halaman sebelumnya
   }


    return (
        <>
        <button onClick={handleGotoHomeAndReplace}>Home</button>
        <button onClick={handleGotoDashboard}>Dashboard</button>
        <button onClick={handleGoBack}>kembali</button>
        </>
    )
}
