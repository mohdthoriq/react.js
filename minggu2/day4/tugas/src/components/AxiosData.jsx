import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulasi penundaan fetch data menggunakan setTimeout
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          // setLoading(true) tidak perlu di sini karena sudah diinisialisasi true
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
          );
          // Axios otomatis mengurai JSON, data ada di response.data
          setData(response.data);
        } catch (err) {
          // Axios akan masuk ke catch block untuk status error (misal: 404, 500)
          setError(err);
        } finally {
          // Set loading menjadi false setelah selesai (baik sukses maupun gagal)
          setLoading(false);
        }
      };
      fetchData();
    }, 1500); // Menambahkan delay 1.5 detik

    // Cleanup function untuk membersihkan timer jika komponen di-unmount
    // sebelum timeout selesai.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <p>Loading data with Axios...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-100 border rounded-lg p-4">
      <h2 className="flex flex-col justify-center gap-4 text-2xl font-bold">Axios Data: ( Tugas 2 & 3 )</h2>
      {data && 
      <p>Name: {data.name}</p>
      }
      {data && 
      <p>Email: {data.email}</p>
      }
    </div>
  );
}