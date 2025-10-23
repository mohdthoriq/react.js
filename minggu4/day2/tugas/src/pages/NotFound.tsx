// src/pages/NotFound.tsx
export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-red-800 p-4">
      <div className="w-full max-w-md text-center bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-4">
        <h1 className="text-8xl font-bold text-white drop-shadow-lg">404</h1>
        <p className="text-2xl font-semibold text-white/90">Page Not Found</p>
        <p className="text-white/80">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
        <a href="/" className="inline-block mt-4 px-6 py-2 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:bg-red-100 transition-colors">
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};