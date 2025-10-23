// src/pages/Home.tsx
import { useState } from 'react';
import { UserCard } from '../components/UserCard';
import { ProductList } from '../components/ProductList';
import { Form } from '../components/Form';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product.types';
import { User } from '../types/User.types';

export const Home = () => {
  // Mock data
  const mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', isActive: false },
  ];

  const mockProducts: Product[] = [
    { id: 'p1', name: 'Laptop', price: 999, tags: ['electronics', 'tech'] },
    { id: 'p2', name: 'Book', price: 15, tags: ['education'] },
  ];

  const [users, setUsers] = useState<User[]>(mockUsers);
  const { addToCart } = useCart();

  const handleToggleActive = (id: number) => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, isActive: !user.isActive } : user))
    );
  };

  const handleFormSubmit = (data: { username: string; age: number; newsletter: boolean }) => {
    console.log('Form submitted:', data);
    // Di sini bisa kirim ke API, simpan ke localStorage, dll.
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <header className="bg-emerald-600 shadow-lg">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Dashboard
          </h1>
        </div>
      </header>
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kolom Kiri: Form dan Users */}
          <div className="lg:col-span-2 space-y-6">
            {/* Form */}
            <section className="bg-emerald-50 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-slate-700">User Form</h2>
              <Form onSubmit={handleFormSubmit} />
            </section>

            {/* User Cards */}
            <section className="bg-emerald-50 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-slate-700">Users</h2>
              <div className="space-y-4">
                {users.map(user => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onToggleActive={handleToggleActive}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Kolom Kanan: Products */}
          <div className="lg:col-span-1">
            <section className="bg-emerald-50 p-6 rounded-xl shadow-md sticky top-8">
              <h2 className="text-xl font-semibold mb-4 text-slate-700">Products</h2>
              <ProductList products={mockProducts} onAddToCart={addToCart} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};