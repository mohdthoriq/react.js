export default function ProductList({ products, toggleProduct, removeProduct }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="">Tugas 4 & 5</h1>
                <h2 className="text-2xl font-bold mb-4 mt-4 text-center">🛒 Daftar Belanja</h2>
                {/* Bagian ini (logika ternary) tugas 5 untuk menangani kondisi list kosong */}
                {products.length === 0 ? (
                    <p className="text-red-400 text-center">🛒 Tidak ada Produk diKeranjang Anda saat ini.!</p>
                ) : (
                    <ul className="w-full max-w-md">
                        {products.map((product) => (
                            <li key={product.id} className="flex items-center justify-between mb-2 py-2 px-4 bg-slate-200 text-gray500 hover:bg-gray-100 rounded-md transition-all">
                                <div className="flex items-center gap-3">
                                    {/* Fungsionalitas checkbox ini tugas 5 */}
                                    <input 
                                        type="checkbox" 
                                        checked={product.completed} 
                                        onChange={() => toggleProduct(product.id)} 
                                        className="cursor-pointer accent-blue-600 h-5 w-5"
                                    />
                                    {/* Fungsionalitas styling (line-through) ini tugas 5 */}
                                    <span className={`text-lg ${product.completed ? 'line-through text-red-400' : 'text-gray-800'}`}>
                                        {product.name} - Rp{product.price.toLocaleString('id-ID')}
                                    </span>
                                </div>
                                {/* Fungsionalitas tombol hapus ini tugas 5 */}
                                <button 
                                    onClick={() => removeProduct(product.id)} 
                                    className="text-red-500 hover:text-red-700 text-lg ml-4"
                                >🗑️</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}