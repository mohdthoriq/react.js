import React from "react";
import useCartContext from "../hooks/useCartContext";

const dummyProducts = [
  { id: 1, name: "Laptop", price: 10000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 350000 },
];

const ProductList = () => {
  const { addItem } = useCartContext();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Product List</h2>
      <div className="grid gap-4 grid-cols-3">
        {dummyProducts.map((p) => (
          <div key={p.id} className="border rounded-lg p-3 shadow">
            <h3 className="font-bold">{p.name}</h3>
            <p>Rp {p.price.toLocaleString()}</p>
            <button
              onClick={() => addItem(p)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
