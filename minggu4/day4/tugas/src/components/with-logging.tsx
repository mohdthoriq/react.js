import { useEffect, ComponentType } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Type yang lebih aman untuk HOC
function withLogging<P extends object>(
  WrappedComponent: ComponentType<P>, 
  componentName: string
) {
  return function WithLoggingComponent(props: P) {
    useEffect(() => {
      console.log(`[${componentName}] Component mounted`);
      return () => {
        console.log(`[${componentName}] Component unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`[${componentName}] Props updated:`, props);
    });

    const handleClick = (event: React.MouseEvent) => {
      console.log(`[${componentName}] Clicked at:`, { x: event.clientX, y: event.clientY });
    };

    return (
      <div onClick={handleClick} className="cursor-pointer transition-all hover:scale-105">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Komponen dasar dengan properti yang jelas
interface UserProfileProps {
  name: string;
  email: string;
}

function UserProfile({ name, email }: UserProfileProps) {
  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-sky-50 h-full">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          User Profile
        </CardTitle>
        <CardDescription className="text-blue-100">
          Informasi pengguna
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
              <UserIcon />
            </div>
            <div>
              <p className="text-sm text-gray-600">Nama</p>
              <p className="font-semibold text-blue-800">{name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
              <EmailIcon />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-blue-800">{email}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ProductCardProps {
  title: string;
  price: number;
}

function ProductCard({ title, price }: ProductCardProps) {
  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-sky-50 h-full">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          Product Details
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg border border-blue-100">
            <p className="text-gray-600 text-sm mb-2">Product Name</p>
            <p className="font-semibold text-blue-800 text-lg">{title}</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg text-white">
            <p className="text-sm opacity-90 mb-1">Price</p>
            <p className="text-2xl font-bold">${price.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Komponen yang di-enhance dengan HOC
const UserProfileWithLogging = withLogging(UserProfile, 'UserProfile');
const ProductCardWithLogging = withLogging(ProductCard, 'ProductCard');

export default function HOCDemo() {
  return (
    <Card className="w-full max-w-4xl bg-gradient-to-br from-sky-50 to-blue-50 border-blue-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-t-lg">
        <CardTitle className="text-xl flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Tugas 3 - Higher-Order Components (HOC)
        </CardTitle>
        <CardDescription className="text-blue-100">
          Komponen dengan logging otomatis - buka Console untuk melihat logs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserProfileWithLogging 
            name="John Doe" 
            email="john@example.com" 
          />
          <ProductCardWithLogging 
            title="Laptop Gaming Pro" 
            price={1200} 
          />
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-800 font-semibold text-sm">
                Cara Kerja HOC:
              </p>
              <p className="text-blue-600 text-xs mt-1">
                Klik pada komponen di atas dan lihat logs di Console. HOC menambahkan logging functionality 
                tanpa mengubah komponen aslinya.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-3 rounded-lg border border-blue-200">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-blue-800 font-semibold text-sm">Reusable Logic</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-blue-200">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-blue-800 font-semibold text-sm">Enhanced Security</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-blue-200">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <p className="text-blue-800 font-semibold text-sm">Cross-Cutting</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Icon Components
function UserIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}