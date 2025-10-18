import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'

export default function Products() {
    // memasukkan API product
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products')
                if (!response.ok) throw new Error('Failed to fetch products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className="centered-status">
                <LineSpinner
                    size="40"
                    stroke="3"
                    speed="1"
                    color="var(--color-primary)"
                />
                <p>Loading...</p>
            </div>
        )
    }
    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
            <div className="page-container">
                <h1 className="page-title">Daftar Produk</h1>
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]} alt={product.title} />
                            <div className="product-card-content">
                                <div>
                                    <h2>{product.title}</h2>
                                    <p>Harga: ${product.price}</p>
                                </div>
                                <Link to={`/product/${product.id}`}>
                                    <button>Lihat Detail</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )


}