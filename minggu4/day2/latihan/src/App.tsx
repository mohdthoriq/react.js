import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Hapus BrowserRouter dari sini
import { UserProvider } from '@/context/UserContext';
import { Navigation } from '@/components/Navigation';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProductsPage } from '@/pages/ProductPage';
import { UsersPage } from '@/pages/UserPages';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  return (
    <UserProvider>
      {/* ✅ HAPUS BrowserRouter dari sini */}
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      {/* ✅ HAPUS BrowserRouter dari sini */}
    </UserProvider>
  );
}

export default App;