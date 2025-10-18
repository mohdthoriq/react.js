import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function ProductDetail() {
  const { productId } = useParams(); // Mengambil nilai parameter 'productId'

  return (
    <div>
      <h2>Detail Produk</h2>
      <p>ID Produk: {productId}</p>
      <p>Ini adalah halaman detail untuk produk dengan ID {productId}.</p>
    </div>
  );
}
export default ProductDetail;
