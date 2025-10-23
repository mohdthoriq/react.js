// src/contexts/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/Product.types';

interface CartItem extends Product {}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((prev) => [...prev, { ...product, id: `${product.id}-${Date.now()}` }]);
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};