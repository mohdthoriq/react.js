import './App.css'
import Product from './component/product.jsx'


function App() {
  return (
    <>
      <h1>Daftar Produk</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
        <Product nama="Smartphone" harga={5000000} stock={5} isAvailable={true}/>
        <Product nama="Laptop" harga={7500000} stock={10} isAvailable={true}/>
        <Product nama="Headset" harga={500000} stock={0} isAvailable={false}/>
        <Product />
      </div>
    </>
  )
}

export default App
  