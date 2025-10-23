import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCard } from '@/components/UserCard';
import { useUserContext } from '@/context/UserContext';
import type { User, UserWithoutId } from '@/types';
import { toast } from 'sonner';
import { 
  Users, 
  UserCheck, 
  Component, 
  ArrowRight, 
  Plus, 
  Home, 
  Package, 
  Info,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

const sampleUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://github.com/shadcn.png',
  isActive: true,
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function HomePage() {
  const { users, addUser, error, setError } = useUserContext();

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleAddSampleUser = () => {
    const timestamp = Date.now();
    const newUserData: UserWithoutId = {
      name: `New User ${users.length + 1}`,
      email: `user${timestamp}@example.com`,
      isActive: true,
      role: 'user'
    };
    
    addUser(newUserData);
    
    if (error) {
      toast.error(error);
    } else {
      toast.success('User added successfully!');
    }
  };

  React.useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.isActive).length;
  const inactiveUsers = totalUsers - activeUsers;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-3xl shadow-xl mb-4">
          <Sparkles className="h-10 w-10 text-primary-foreground" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          TypeShop Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern React application built with TypeScript, shadcn/ui, and cutting-edge technologies
        </p>
      </div>

      {/* Error Display */}
      {error && (
        <Card className="border-destructive/50 bg-gradient-to-r from-destructive/10 to-red-100/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-destructive">
                <Shield className="h-5 w-5" />
                <div className="text-sm font-medium">{error}</div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setError(null)}
                className="text-destructive hover:bg-destructive/20"
              >
                Dismiss
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-blue-900">{totalUsers}</p>
                <p className="text-xs text-blue-600 mt-1">Registered users</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-100/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700 mb-1">Active Users</p>
                <p className="text-3xl font-bold text-green-900">{activeUsers}</p>
                <p className="text-xs text-green-600 mt-1">Currently active</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700 mb-1">Components</p>
                <p className="text-3xl font-bold text-purple-900">12+</p>
                <p className="text-xs text-purple-600 mt-1">Reusable elements</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Component className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* UserCard Demo Section */}
        <Card className="border-0 bg-gradient-to-br from-orange-50 to-amber-100/30 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-900">
              <Users className="h-6 w-6 text-orange-600" />
              UserCard Component
            </CardTitle>
            <CardDescription className="text-orange-700/80">
              Example of a fully typed UserCard component with interactive features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <UserCard user={sampleUser} onEdit={handleEditUser} />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button asChild className="flex-1 h-11 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25">
                <Link to="/users" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  View All Users
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                onClick={handleAddSampleUser}
                disabled={!!error}
                className="h-11 border-orange-200 text-orange-700 hover:bg-orange-100 hover:border-orange-300 transition-all"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Sample
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation Section */}
        <Card className="border-0 bg-gradient-to-br from-cyan-50 to-blue-100/30 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-900">
              <TrendingUp className="h-6 w-6 text-cyan-600" />
              Quick Navigation
            </CardTitle>
            <CardDescription className="text-cyan-700/80">
              Explore different sections of the application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button asChild className="w-full h-14 justify-start gap-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 transition-all">
                <Link to="/users">
                  <Users className="h-5 w-5" />
                  <div className="text-left flex-1">
                    <div className="font-semibold">User Management</div>
                    <div className="text-sm opacity-90">Manage users and permissions</div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild className="w-full h-14 justify-start gap-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 transition-all">
                <Link to="/products">
                  <Package className="h-5 w-5" />
                  <div className="text-left flex-1">
                    <div className="font-semibold">Product Catalog</div>
                    <div className="text-sm opacity-90">Browse and manage products</div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild className="w-full h-14 justify-start gap-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25 transition-all">
                <Link to="/about">
                  <Info className="h-5 w-5" />
                  <div className="text-left flex-1">
                    <div className="font-semibold">About & Features</div>
                    <div className="text-sm opacity-90">Learn about the technology stack</div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-white/50 rounded-xl border border-cyan-200/50">
              <div className="flex items-center gap-3 text-sm text-cyan-700">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                <span>Built with TypeScript, React, and modern best practices</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technology Highlights */}
      <Card className="border-0 bg-gradient-to-br from-slate-50 to-gray-100/30 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              🚀 Powered by Modern Technology
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This dashboard showcases the power of TypeScript, React 18, Tailwind CSS, 
              and shadcn/ui working together to create beautiful, type-safe applications.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">React 18</Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700">TypeScript</Badge>
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-200">Tailwind CSS</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">shadcn/ui</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">Vite</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Badge component untuk technology highlights
function Badge({ variant, className, children }: { variant: string; className: string; children: React.ReactNode }) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${className}`}>
      {children}
    </span>
  );
}