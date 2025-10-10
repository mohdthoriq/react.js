import { useState } from "react"

function userGreeting(): string {
    return 'Selamat Datang kembali'
}

function guestGetting() {
    return 'Silahkan masuk'
}

function Greeting(isLogged: boolean) {
    if (isLogged) {
        return userGreeting()
    } else {
        return guestGetting()
    }
}

export function Login() {
    return (
        <>
            <div>
                <p>{ Greeting(true) }</p>
                <p>{ Greeting(false) }</p>
            </div>
        </>
    )
}

type Product = {
    id: number,
    name: string,
    price: number,
    completed: boolean
}
export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Laptop", price: 10000000, completed: false },
        { id: 2, name: "Mouse Wireless", price: 150000, completed: true },
        { id: 3, name: "Keyboard Mechanical", price: 750000, completed: false },
        { id: 4, name: "Monitor 27 inch", price: 3000000, completed: false },
      ]);

      const toggleProduct = (id: number) => {
        setProducts(prev => 
            prev.map(p => 
                p.id === id ? {...p, completed: !p.completed } : p
            )
        )
      }

      const removeProduts = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id))
      }

    return (
        <div>
            <h1>Daftar Produk</h1>
            <ul>
                {products.map((product) => (
                    <li
                        key={product.id}
                        style={{
                            textDecoration: product.completed ? "line-through" : "none",
                        }}
                    >
                        {product.name} - Rp.{product.price.toLocaleString()}
                        <button onClick={() => toggleProduct(product.id)}>
                            {product.completed ? "Batalkan" : "Selesaikan"}
                        </button>
                        <button onClick={() => removeProduts(product.id)}>Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}