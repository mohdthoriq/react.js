import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { LineSpinner } from 'ldrs/react'
import StatusPage from "./StatusPage"
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
                if (error instanceof TypeError && error.message === 'Failed to fetch') {
                    setError("Gagal terhubung ke server. Periksa koneksi internet Anda.");
                } else {
                    setError("Terjadi kesalahan pada sistem saat mengambil data.");
                }
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
        return <StatusPage
            title="Server Error"
            message={error}
            type="error"
            actionLink="/products"
            actionText="Kembali ke Produk"
        />
    }

    if (!product) {
        return <StatusPage
            title="404 - Data Tidak Ditemukan"
            message={`Produk dengan ID "${id}" tidak dapat ditemukan.`}
            type="error"
            actionLink="/products"
            actionText="Kembali ke Produk"
        />
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
