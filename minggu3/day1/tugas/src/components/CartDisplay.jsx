import React, { useContext } from "react";
import useCartContext from "../hooks/useCartContext";
import ThemeContext from "../context/ThemeContext";

const CartDisplay = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCartContext();
  const { theme } = useContext(ThemeContext);

  const cardBg = theme === '🌞' ? 'bg-[#E5E1DA]' : 'bg-[#40534C]';
  const cardText = theme === '🌞' ? 'text-[#3A4D39]' : 'text-[#E4E4D0]';
  const buttonDestructiveBg = theme === '🌞' ? 'bg-red-500 hover:bg-red-600' : 'bg-red-800 hover:bg-red-700';
  const buttonDestructiveText = 'text-white';

  return (
    <div className="p-4 mt-6 border-t border-gray-500">
      <h2 className="text-xl font-semibold mb-3">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className={`${cardBg} ${cardText} flex justify-between items-center p-2 rounded`}
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>
                    Rp {item.price.toLocaleString()} x {item.qty}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className={`${buttonDestructiveBg} ${buttonDestructiveText} py-1 px-2 rounded font-semibold`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4">
            <h3 className="font-semibold">
              Total: Rp {totalPrice.toLocaleString()}
            </h3>
            <button
              onClick={clearCart}
              className={`${buttonDestructiveBg} ${buttonDestructiveText} py-1 px-3 rounded font-semibold`}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
