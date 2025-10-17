export default function Product({ product, searchTerm }) {
    const [sortBy, setSortBy] = useState('name');
    
    // PERHITUNGAN MAHAL: Filter dan sort produk
  // Tanpa useMemo: akan dijalankan setiap kali komponen re-render
  const filteredAndSortedProducts = useMemo(() => {
    console.log('🔄 Melakukan filter dan sort produk...');
    
    // Simulasi perhitungan yang memakan waktu
    const startTime = performance.now();
    
    // Filter produk berdasarkan search term
    let filtered = product.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Sort produk berdasarkan kriteria
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
    
    // Simulasi delay untuk menunjukkan perhitungan mahal
    const endTime = performance.now();
    console.log(`⏱️ Waktu perhitungan: ${endTime - startTime}ms`);
    
    return filtered;
  }, [product, searchTerm, sortBy]); // Hanya jalankan ulang jika salah satu berubah

  return (
    <div>
      <h3>Daftar Produk</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Urutkan berdasarkan Nama</option>
        <option value="price">Urutkan berdasarkan Harga</option>
        <option value="rating">Urutkan berdasarkan Rating</option>
      </select>
      
      <div>
        {filteredAndSortedProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
            <h4>{product.name}</h4>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <p>Rating: {product.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}
