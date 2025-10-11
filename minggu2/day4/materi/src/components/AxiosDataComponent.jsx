import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

function AxiosDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setData(response.data); // Axios otomatis mengurai JSON
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Memuat data pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <h2>Data dari Axios</h2>
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Telepon: {data.phone}</p>
    </div>
  );
}

export default AxiosDataComponent;