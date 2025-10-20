import { useEffect } from "react"
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { LineSpinner } from 'ldrs/react' // Pastikan ldrs diinstal
import StatusPage from "./StatusPage"
import 'ldrs/react/LineSpinner.css'

export default function Products() {
    // memasukkan API product
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get('category') || ''
    const [searchTerm, setSearchTerm] = useState(category) // State lokal untuk input

    // Sinkronkan state input jika parameter URL berubah (misalnya, tombol back browser)
    useEffect(() => {
        setSearchTerm(category)
    }, [category])



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products')
                if (!response.ok) throw new Error('Failed to fetch products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                if (error instanceof TypeError && error.message === 'Failed to fetch') {
                    setError("Gagal terhubung ke server. Periksa koneksi internet Anda.");
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])


    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(category.toLowerCase()) ||
        p.category.name.toLowerCase().includes(category.toLowerCase())
    )

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
        return (
            <StatusPage
                title="Server Error"
                message={error}
                type="error"
                actionLink="/"
                actionText="Kembali ke Beranda"
            />
        )
    }

    return (
        <>
            <div className="page-container">
                <h1 className="page-title">Jelajahi Produk Kami</h1>
                <form className="mb-4 flex gap-2" onSubmit={(e) => {
                    e.preventDefault();
                    setSearchParams({ category: searchTerm });
                }}>
                    <div className="relative flex-1">
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Cari berdasarkan nama atau kategori..."
                            className="border px-3 py-4 rounded w-full pr-10"
                        />
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={() => { setSearchTerm(''); setSearchParams({}); }}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent text-red-600 hover:text-red-800 overflow-hidden rounded-r-md"
                                aria-label="Clear search"
                                style={{ backgroundColor: 'transparent', color: '#e90e0eff' }}
                            >
                                ❌
                            </button>
                        )}
                    </div>
                    <button type="submit">Search</button>
                </form>

                {filteredProducts.length > 0 ? (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.images[0]} alt={product.title} />
                                <div className="product-card-content">
                                    <div>
                                        <h2 title={product.title}>{product.title}</h2>
                                        <p>Harga: ${product.price}</p>
                                    </div>
                                    <Link to={`/product/${product.id}`}>
                                        <button>Lihat Detail</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Tampilkan pesan ini jika tidak ada produk yang cocok dengan pencarian
                    <div style={{ marginTop: '2rem' }}>
                        <StatusPage
                            title="Barang Tidak Ditemukan"
                            message={`Kami tidak dapat menemukan barang untuk pencarian "${category}". Silakan coba kata kunci lain.`}
                            type="error"
                        />
                    </div>
                )}
            </div>
        </>
    )


}