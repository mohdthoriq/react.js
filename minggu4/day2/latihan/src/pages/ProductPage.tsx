import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductList } from '@/components/ProductList';
import { ProductForm } from '@/components/ProductForm';
import type { Product } from '@/types';
import { 
  Package, 
  Plus, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  DollarSign,
  BarChart3,
  ShoppingCart,
  Sparkles
} from 'lucide-react';

// Sample data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    price: 2399.99,
    stock: 15,
    description: 'Apple MacBook Pro 16-inch with M2 Pro chip',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=150&h=150&fit=crop',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29.99,
    stock: 50,
    description: 'Ergonomic wireless mouse with precision tracking',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 79.99,
    stock: 25,
    description: 'RGB mechanical keyboard with blue switches',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=150&h=150&fit=crop',
    isAvailable: true,
  },
  {
    id: 4,
    name: '4K Monitor 27"',
    price: 299.99,
    stock: 8,
    description: '27-inch 4K UHD monitor with HDR support',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&h=150&fit=crop',
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Gaming Headset',
    price: 89.99,
    stock: 0,
    description: '7.1 surround sound gaming headset with microphone',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=150&h=150&fit=crop',
    isAvailable: false,
  },
];

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now(),
    };
    setProducts(prev => [...prev, newProduct]);
    setShowProductForm(false);
  };

  const handleEditProduct = (product: Product) => {
    console.log('Edit product:', product);
    alert(`Editing product: ${product.name}`);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

  // Calculate stats
  const totalProducts = products.length;
  const availableProducts = products.filter(p => p.isAvailable).length;
  const lowStockProducts = products.filter(p => p.stock < 10 && p.stock > 0).length;
  const outOfStockProducts = products.filter(p => p.stock === 0).length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Product Catalog
                </h1>
                <p className="text-lg text-gray-600">
                  Manage your product inventory and listings with ease
                </p>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => setShowProductForm(true)}
            className="h-12 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25 transition-all group"
          >
            <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Add New Product
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Product Form Sidebar */}
          {showProductForm && (
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100/30 sticky top-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-green-900">
                    <Plus className="h-5 w-5 text-green-600" />
                    Add New Product
                  </CardTitle>
                  <CardDescription className="text-green-700/80">
                    Create a new product listing for your catalog
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductForm 
                    onSubmit={handleAddProduct}
                    onCancel={() => setShowProductForm(false)}
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Product List */}
          <div className={showProductForm ? "lg:col-span-3" : "lg:col-span-4"}>
            <ProductList 
              products={products}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700 mb-1">Total Products</p>
                  <p className="text-3xl font-bold text-blue-900">{totalProducts}</p>
                  <p className="text-xs text-blue-600 mt-1">In catalog</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-100/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700 mb-1">Available</p>
                  <p className="text-3xl font-bold text-green-900">{availableProducts}</p>
                  <p className="text-xs text-green-600 mt-1">Ready to sell</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-100/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-700 mb-1">Low Stock</p>
                  <p className="text-3xl font-bold text-amber-900">{lowStockProducts}</p>
                  <p className="text-xs text-amber-600 mt-1">Need restock</p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700 mb-1">Total Value</p>
                  <p className="text-3xl font-bold text-purple-900">${totalValue.toFixed(2)}</p>
                  <p className="text-xs text-purple-600 mt-1">Inventory worth</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 bg-gradient-to-br from-slate-50 to-gray-100/30 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Out of Stock</p>
                  <p className="text-2xl font-bold text-gray-900">{outOfStockProducts}</p>
                  <p className="text-xs text-gray-600 mt-1">Products unavailable</p>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-cyan-50 to-blue-100/30 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-700 mb-1">Categories</p>
                  <p className="text-2xl font-bold text-cyan-900">
                    {Array.from(new Set(products.map(p => p.category))).length}
                  </p>
                  <p className="text-xs text-cyan-600 mt-1">Active categories</p>
                </div>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-cyan-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Indicator */}
        <Card className="border-0 bg-gradient-to-br from-orange-50 to-amber-100/30 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-amber-800">Inventory Performance</p>
                  <p className="text-sm text-amber-600">
                    {((availableProducts / totalProducts) * 100).toFixed(1)}% of products are available for sale
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-700">
                  {totalProducts > 0 ? 'Good' : 'No Products'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}