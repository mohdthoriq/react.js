import { useCallback, useState } from "react";
import ExpensiveChild from "./ExpensiveChild";
import products from "../materi2/products";


export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [otherState, setOtherState] = useState(0);

  // ❌ TANPA useCallback: Fungsi dibuat ulang setiap render
  // const handleAddToCart = (product) => {
  //   setCart(prevCart => [...prevCart, product]);
  // };

  // ✅ DENGAN useCallback: Fungsi di-memoize, hanya dibuat ulang jika dependensi berubah
  const handleAddToCart = useCallback((product) => {
    console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
    setCart(prevCart => [...prevCart, product]);
  }, []); // Array kosong = fungsi tidak akan pernah dibuat ulang

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contoh useCallback - Optimasi Callback Functions</h2>
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <button onClick={clearCart} style={{ marginLeft: '10px' }}>
        Kosongkan Keranjang
      </button>

      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba klik tombol "Update State Lain" dan lihat di console. 
        ExpensiveChild tidak akan di-render ulang karena callback-nya di-memoize!
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Produk Tersedia</h3>
          {products.map(product => (
            <ExpensiveChild 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        <div style={{ flex: 1 }}>
          <h3>Keranjang Belanja ({cart.length} item)</h3>
          {cart.map((item, index) => (
            <div key={index} style={{ padding: '5px', backgroundColor: '' }}>
              {item.name} - Rp {item.price.toLocaleString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}