import React, { useContext } from "react";
import useCartContext from "../hooks/useCartContext";
import ThemeContext from "../context/ThemeContext";


const dummyProducts = [
  { id: 1, name: "Laptop", price: 10000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 350000 },
];

const ProductList = () => {
  const { addItem } = useCartContext();
  const { theme } = useContext(ThemeContext);

  const cardBg = theme === '🌞' ? 'bg-[#E5E1DA]' : 'bg-[#40534C]';
  const cardText = theme === '🌞' ? 'text-[#3A4D39]' : 'text-[#E4E4D0]';
  const buttonBg = theme === '🌞' ? 'bg-[#739072]' : 'bg-[#94A684]';
  const buttonText = theme === '🌞' ? 'text-white' : 'text-[#1A3636]';

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Product List</h2>
      <div className="grid gap-4 grid-cols-3">
        {dummyProducts.map((p) => (
          <div key={p.id} className={`${cardBg} ${cardText} rounded-lg p-3 shadow`}>
            <h3 className="font-bold">{p.name}</h3>
            <p>Rp {p.price.toLocaleString()}</p>
            <button
              onClick={() => addItem(p)}
              className={`mt-2 ${buttonBg} ${buttonText} py-1 px-3 rounded font-semibold`}
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
