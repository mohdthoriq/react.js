import { Product } from '../types/Product.types'

interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export const ProductList = ({ products, onAddToCart } : ProductListProps) => {
    return (
        <div className="space-y-4">
            {products.map((product) => (
                <div key={product.id} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-slate-800">{product.name}</h3>
                            <p className="text-sm text-slate-600">${product.price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => onAddToCart(product)} className="btn bg-emerald-200 text-emerald-800 hover:bg-emerald-300 focus:ring-emerald-400 text-sm py-1 px-3">
                            Add
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Tags: {product.tags.join(', ')}</p>
                </div>
            ))}
        </div>
    )
}