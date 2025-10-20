import StatusPage from './StatusPage';

export default function NotFound() {
    return (
        <StatusPage
            title="404 - Halaman Tidak Ditemukan"
            message="Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan."
            type="error"
            actionLink="/"
            actionText="Kembali ke Beranda"
        />
    );
}