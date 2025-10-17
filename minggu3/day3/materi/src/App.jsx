import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'
import ProductList from './components/materi2/ProductList'
import products from './components/materi2/products'
import ShoppingCart from './components/materi3/ShoppingCart'
import ComparisonExample from './components/materi4/ComparisonExample'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [otherState, setOtherState] = useState(0);

  return (
    <>
      <div>
        <ParentComponent/>
      </div>

      <div style={{ padding: '20px' }}>
      <h2>Contoh useMemo - Optimasi Perhitungan Mahal</h2>
      
      <input
        type="text"
        placeholder="Cari produk..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '300px', padding: '8px', marginBottom: '10px' }}
      />
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba ubah state lain di atas dan lihat di console. 
        Perhitungan filter/sort hanya akan dijalankan ulang jika search term atau sort berubah!
      </p>
      
      <ProductList products={products} searchTerm={searchTerm} />
    </div>

    <div>
      <ShoppingCart/>
    </div>

    <div>
      <ComparisonExample/>
    </div>
    </>
  )
}

export default App
