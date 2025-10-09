import { useState } from 'react'
import Login from './components/LoginStatus'
import Dashboard from './components/DashBoard'
import StatusMessage from './components/StatusMessages'
import ProductList from './components/ProductList'
import './App.css'



// Data dummy untuk komponen
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 10000000, completed: false },
    { id: 2, name: "Mouse Wireless", price: 150000, completed: true },
    { id: 3, name: "Keyboard Mechanical", price: 750000, completed: false },
    { id: 4, name: "Monitor 27 inch", price: 3000000, completed: false },
  ]);

  const [status, setStatus] = useState("loading");

  const removeProduct = (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini? 🗑️");
    if (confirmDelete) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const toggleProduct = (id) => {
    setProducts(
      products.map(product =>
        product.id === id ? { ...product, completed: !product.completed } : product
      )
    );
  };

  const cycleStatus = () => {
    const statuses = ["loading", "success", "error", "unknown"];
    const currentIndex = statuses.indexOf(status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setStatus(statuses[nextIndex]);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-8">
          {/* Tugas 1: Conditional Rendering */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <Login />
          </section>

          {/* Tugas 2: Logical && Operator */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <Dashboard />
          </section>

          {/* Tugas 3: Switch Statement */}
          <section className="bg-white p-6 rounded-lg shadow-md text-center">
            <StatusMessage status={status} />
            <button onClick={cycleStatus} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Ubah Status</button>
          </section>

          {/* Tugas 4 & 5: Rendering Lists & Todo List */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <ProductList products={products} removeProduct={removeProduct} toggleProduct={toggleProduct} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
