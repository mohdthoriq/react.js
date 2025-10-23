import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { MobileNavigation } from './MobileNavigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Settings, 
  Users, 
  ShoppingBag, 
  Info, 
  BarChart3, 
  Package,
  LogIn,
  UserPlus,
  Sparkles
} from 'lucide-react';

const managementItems = [
  {
    title: 'User Management',
    href: '/users',
    description: 'Manage users, roles, and permissions in the system.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Product Catalog',
    href: '/products',
    description: 'View and manage product inventory and categories.',
    icon: ShoppingBag,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Order Management',
    href: '/orders',
    description: 'Process and track customer orders and shipments.',
    icon: Package,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Analytics Dashboard',
    href: '/analytics',
    description: 'View business insights and performance metrics.',
    icon: BarChart3,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Settings',
    href: '/settings',
    description: 'Configure application settings and preferences.',
    icon: Settings,
    color: 'from-gray-500 to-slate-500'
  },
];

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 border-b border-gray-200/50 sticky top-0 z-50 shadow-lg shadow-black/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  TypeShop
                </h1>
                <p className="text-xs text-gray-500 -mt-1 font-medium">Modern Dashboard</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className={cn(
                        "group relative inline-flex h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                        "hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                        "border border-transparent",
                        isActive('/') 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25" 
                          : "text-gray-700 hover:text-blue-700"
                      )}
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Dashboard
                      {isActive('/') && (
                        <div className="absolute -bottom-1 left-1/2 w-2 h-1 bg-white rounded-full -translate-x-1/2" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Management Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "h-10 px-4 data-[state=open]:bg-gradient-to-r data-[state=open]:from-purple-50 data-[state=open]:to-pink-50 data-[state=open]:text-purple-700 transition-all duration-300 font-semibold",
                      "border border-transparent hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700",
                      "focus:bg-gradient-to-r focus:from-purple-50 focus:to-pink-50",
                      (isActive('/users') || isActive('/products') || isActive('/orders')) 
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25" 
                        : "text-gray-700 hover:text-purple-700"
                    )}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Management
                    <div className={cn(
                      "absolute -bottom-1 left-1/2 w-2 h-1 bg-white rounded-full -translate-x-1/2 transition-opacity",
                      (isActive('/users') || isActive('/products') || isActive('/orders')) 
                        ? "opacity-100" 
                        : "opacity-0"
                    )} />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
                    <div className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {managementItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            isActive={isActive(item.href)}
                            icon={<IconComponent className="h-4 w-4" />}
                            color={item.color}
                          >
                            {item.description}
                          </ListItem>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Direct Links */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/users"
                      className={cn(
                        "group relative inline-flex h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                        "hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                        "border border-transparent",
                        isActive('/users') 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25" 
                          : "text-gray-700 hover:text-blue-700"
                      )}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Users
                      {isActive('/users') && (
                        <div className="absolute -bottom-1 left-1/2 w-2 h-1 bg-white rounded-full -translate-x-1/2" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products"
                      className={cn(
                        "group relative inline-flex h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                        "hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700",
                        "focus:outline-none focus:ring-2 focus:ring-green-500/20",
                        "border border-transparent",
                        isActive('/products') 
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25" 
                          : "text-gray-700 hover:text-green-700"
                      )}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Products
                      {isActive('/products') && (
                        <div className="absolute -bottom-1 left-1/2 w-2 h-1 bg-white rounded-full -translate-x-1/2" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/about"
                      className={cn(
                        "group relative inline-flex h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                        "hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-700",
                        "focus:outline-none focus:ring-2 focus:ring-orange-500/20",
                        "border border-transparent",
                        isActive('/about') 
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25" 
                          : "text-gray-700 hover:text-orange-700"
                      )}
                    >
                      <Info className="h-4 w-4 mr-2" />
                      About
                      {isActive('/about') && (
                        <div className="absolute -bottom-1 left-1/2 w-2 h-1 bg-white rounded-full -translate-x-1/2" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                className="h-9 px-4 border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-medium"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button 
                size="sm"
                className="h-9 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 font-medium"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </div>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    isActive?: boolean;
    icon?: React.ReactNode;
    color?: string;
  }
>(({ className, title, children, isActive, icon, color = 'from-gray-500 to-slate-500', ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group flex select-none flex-col justify-between rounded-xl p-4 no-underline outline-none transition-all duration-300",
            "border-2 border-transparent hover:shadow-lg",
            "focus:ring-2 focus:ring-purple-500/20",
            "hover:scale-105 active:scale-95",
            isActive 
              ? `bg-gradient-to-r ${color} text-white shadow-lg border-white/20` 
              : "bg-white/80 hover:bg-white border-gray-200/50 text-gray-700",
            className
          )}
          {...props}
        >
          <div className="flex items-start space-x-3">
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300",
              isActive 
                ? "bg-white/20" 
                : `bg-gradient-to-r ${color} text-white`
            )}>
              {icon}
            </div>
            <div className="space-y-1 flex-1">
              <div className={cn(
                "text-sm font-semibold leading-none transition-colors",
                isActive ? "text-white" : "text-gray-800 group-hover:text-gray-900"
              )}>
                {title}
              </div>
              <p className={cn(
                "text-sm leading-snug transition-colors line-clamp-2",
                isActive ? "text-white/90" : "text-gray-600 group-hover:text-gray-700"
              )}>
                {children}
              </p>
            </div>
          </div>
          {isActive && (
            <div className="w-full h-1 bg-white/30 rounded-full mt-3 transition-colors" />
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";