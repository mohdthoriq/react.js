import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Search, Filter, Package, AlertTriangle, DollarSign } from 'lucide-react';
import type { Product } from '@/types';

interface ProductListProps {
  products: Product[];
  onAddProduct?: (product: Omit<Product, 'id'>) => void;
  onEditProduct?: (product: Product) => void;
  onDeleteProduct?: (productId: number) => void;
}

export function ProductList({ products, onEditProduct, onDeleteProduct }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortField, setSortField] = useState<keyof Product>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      categoryFilter === 'all' || product.category === categoryFilter
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const handleSort = (field: keyof Product) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleEdit = (product: Product) => {
    if (onEditProduct) {
      onEditProduct(product);
    }
  };

  const handleDelete = (productId: number) => {
    if (onDeleteProduct && window.confirm('Are you sure you want to delete this product?')) {
      onDeleteProduct(productId);
    }
  };

  const getSortIcon = (field: keyof Product) => {
    if (sortField !== field) return <ArrowUpDown className="h-3 w-3 opacity-50" />;
    return sortDirection === 'asc' ? 
      <ArrowUpDown className="h-3 w-3 rotate-0" /> : 
      <ArrowUpDown className="h-3 w-3 rotate-180" />;
  };

  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const lowStockCount = products.filter(p => p.stock < 10).length;
  const availableCount = products.filter(p => p.isAvailable).length;

  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold">Product Catalog</CardTitle>
            <CardDescription className="text-sm">
              Manage your product inventory and listings
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="h-4 w-4" />
            <span>{products.length} products</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 p-6 pb-4 border-b border-border/50 bg-muted/20">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 bg-background border-border/50 focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px] pl-10 h-11 bg-background border-border/50 focus:border-primary/50 transition-colors">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border/50">
                {categories.map(category => (
                  <SelectItem 
                    key={category} 
                    value={category}
                    className="focus:bg-accent transition-colors"
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Table */}
        <div className="rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-border/50">
                <TableHead 
                  className="w-[300px] py-4 cursor-pointer hover:bg-accent/50 transition-colors group"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    Product
                    <div className="group-hover:scale-110 transition-transform">
                      {getSortIcon('name')}
                    </div>
                  </div>
                </TableHead>
                <TableHead className="py-4 font-semibold text-foreground">
                  Description
                </TableHead>
                <TableHead 
                  className="py-4 cursor-pointer hover:bg-accent/50 transition-colors group"
                  onClick={() => handleSort('category')}
                >
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    Category
                    <div className="group-hover:scale-110 transition-transform">
                      {getSortIcon('category')}
                    </div>
                  </div>
                </TableHead>
                <TableHead 
                  className="text-right py-4 cursor-pointer hover:bg-accent/50 transition-colors group"
                  onClick={() => handleSort('price')}
                >
                  <div className="flex items-center gap-2 justify-end font-semibold text-foreground">
                    Price
                    <div className="group-hover:scale-110 transition-transform">
                      {getSortIcon('price')}
                    </div>
                  </div>
                </TableHead>
                <TableHead 
                  className="text-right py-4 cursor-pointer hover:bg-accent/50 transition-colors group"
                  onClick={() => handleSort('stock')}
                >
                  <div className="flex items-center gap-2 justify-end font-semibold text-foreground">
                    Stock
                    <div className="group-hover:scale-110 transition-transform">
                      {getSortIcon('stock')}
                    </div>
                  </div>
                </TableHead>
                <TableHead className="py-4 font-semibold text-foreground">
                  Status
                </TableHead>
                <TableHead className="text-right py-4 font-semibold text-foreground w-[140px]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={7} className="text-center py-12">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <Package className="h-12 w-12 opacity-30" />
                      <div className="space-y-1">
                        <p className="font-medium">No products found</p>
                        <p className="text-sm">
                          {searchTerm || categoryFilter !== 'all' 
                            ? 'Try adjusting your search or filters.' 
                            : 'Add some products to get started.'}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow 
                    key={product.id} 
                    className="border-border/30 hover:bg-accent/30 transition-colors group"
                  >
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover border border-border/50 shadow-sm"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center shadow-sm">
                            <Package className="h-5 w-5 text-muted-foreground" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="max-w-[250px]">
                        <p className="text-sm text-muted-foreground truncate group-hover:text-accent-foreground/80 transition-colors">
                          {product.description || 'No description provided'}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge 
                        variant="outline" 
                        className="capitalize border-border/50 bg-background/50 text-foreground/80"
                      >
                        {product.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right py-4">
                      <div className="font-semibold text-foreground">
                        ${product.price.toFixed(2)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right py-4">
                      <div className={cn(
                        "font-semibold transition-colors",
                        product.stock === 0 
                          ? "text-destructive" 
                          : product.stock < 10 
                            ? "text-amber-600" 
                            : "text-foreground"
                      )}>
                        {product.stock}
                        {product.stock < 10 && product.stock > 0 && (
                          <AlertTriangle className="h-3 w-3 inline ml-1" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge 
                        variant={product.isAvailable ? "default" : "secondary"}
                        className={cn(
                          "transition-colors",
                          product.isAvailable 
                            ? "bg-green-100 text-green-800 hover:bg-green-200 border-green-200" 
                            : "bg-muted text-muted-foreground border-border"
                        )}
                      >
                        {product.isAvailable ? "Available" : "Unavailable"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right py-4">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEdit(product)}
                          className="h-8 px-3 border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-colors"
                        >
                          Edit
                        </Button>
                        {onDeleteProduct && (
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                            className="h-8 px-3 bg-destructive/90 hover:bg-destructive transition-colors"
                          >
                            Delete
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Summary Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 border-t border-border/50 bg-muted/20">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of{' '}
            <span className="font-semibold text-foreground">{products.length}</span> products
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-foreground">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span>Total Value: </span>
              <span className="font-semibold">${totalValue.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>Low Stock: </span>
              <span className="font-semibold">{lowStockCount}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Package className="h-4 w-4 text-blue-600" />
              <span>Available: </span>
              <span className="font-semibold">{availableCount}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}