export default function StatusMessage({ status }) {
    let messages;

    switch (status) {
        case "loading":
            messages = <p className="text-yellow-500 font-bold">⏳ Memuat data...</p>;
            break;
        case "success" :
            messages = <p className="text-green-500 font-bold">✅ Data berhasil dimuat!</p>;
            break;
        case "error" : 
            messages = <p className="text-red-500 font-bold">❌ Terjadi kesalahan saat memuat data.</p>;
            break;
        default:
            messages = <p className="text-gray-500 font-bold">❓ Status tidak diketahui.</p>;
            break;
    }

    return (
        <div className="text-center my-4 flex flex-col justify-center items-center gap-4">
            <h1>Tugas 3</h1>
            <p className="text-lg font-bold">Status: {messages}</p>
        </div>
    );
} 