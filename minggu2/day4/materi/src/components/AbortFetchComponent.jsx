import React, { useState, useEffect } from 'react';

function AbortFetchComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); // Buat AbortController
    const signal = abortController.signal; // Dapatkan signal

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal }); // Teruskan signal
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch dibatalkan');
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function: batalkan permintaan saat komponen di-unmount
    return () => {
      abortController.abort();
      console.log('Permintaan dibatalkan saat cleanup.');
    };
  }, []);

  if (loading) return <p>Memuat data (dengan pembatalan)...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
    <h2>Data dari Fetch API (dengan AbortController)</h2>

    {data ? (
      <>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}

export default AbortFetchComponent;