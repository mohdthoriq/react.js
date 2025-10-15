import React from "react";
import useCartContext from "../hooks/useCartContext";

const CartDisplay = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCartContext();

  return (
    <div className="p-4 mt-6 border-t">
      <h2 className="text-xl font-semibold mb-3">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>
                    Rp {item.price.toLocaleString()} x {item.qty}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
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
              className="bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded"
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
