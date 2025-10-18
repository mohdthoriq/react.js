import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'


export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
                if (!response.ok) throw new Error('Failed to fetch product')
                const data = await response.json()
                setProduct(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProductDetail()
    }, [id])


    if (loading) {
        return (
            <div className="centered-status">
                <LineSpinner
                    size="40"
                    stroke="3"
                    speed="1"
                    color="var(--color-primary)"
                />
                <p>Loading Product Detail ...</p>
            </div>
        )
    }
    if (error) {
        return <p>Error: {error}</p>
    }

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <>
            <div className="product-detail-container">
                <Link to="/products">
                    <button className="secondary">← Kembali ke Produk</button>
                </Link>
                <div className="product-card" style={{marginTop: '2rem', textAlign: 'left'}}>
                    <img src={product.images[0]} alt={product.title} />
                    <div className="product-card-content">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p><b>Harga: ${product.price}</b></p>
                        <p>Kategori : {product.category?.name || 'Tidak diketahui'}</p>
                        <button>Add to Cart 🛒</button>
                    </div>
                </div>
            </div>
        </>
    )
}
