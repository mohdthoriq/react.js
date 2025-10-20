import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LineSpinner } from 'ldrs/react'

export default function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                // Ambil 4 produk pertama sebagai produk unggulan
                const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=4');
                if (!response.ok) throw new Error('Failed to fetch featured products');
                const data = await response.json();
                setFeaturedProducts(data);
            } catch (error) {
                console.error("Error fetching featured products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">Temukan Gaya Masa Depan Anda</h1>
                <p className="hero-subtitle">Jelajahi koleksi eksklusif kami dan temukan produk yang mendefinisikan ulang tren.</p>
                <Link to="/products">
                    <button className="hero-cta">Belanja Sekarang</button>
                </Link>
            </section>

            <section className="featured-products-section">
                <h2>Produk Unggulan</h2>
                {loading ? (
                    <div className="centered-status"><LineSpinner size="40" stroke="3" speed="1" color="var(--color-primary)" /></div>
                ) : (
                    <div className="product-grid">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.images[0]} alt={product.title} />
                                <div className="product-card-content">
                                    <div>
                                        <h2>{product.title}</h2>
                                        <p>Harga: ${product.price}</p>
                                    </div>
                                    <Link to={`/product/${product.id}`}><button>Lihat Detail</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}