interface Product {
    id: number;
    name: string;
    price: number;
    tags: string[];
}

interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export const ProductList = ({ products, onAddToCart } : ProductListProps) => {
    return (
        <>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Tags: {product.tags.join(', ')}</p>
                        <button onClick={() => onAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}