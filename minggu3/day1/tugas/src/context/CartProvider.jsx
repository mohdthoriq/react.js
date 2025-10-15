import React, { useState, useMemo } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Hitung total harga
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  // Tambah item
  const addItem = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Hapus item tertentu
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Kosongin cart
  const clearCart = () => setCart([]);

  const value = { cart, addItem, removeItem, clearCart, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
