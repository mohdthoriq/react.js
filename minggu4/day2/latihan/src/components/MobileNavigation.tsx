import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { 
  MenuIcon, 
  ChevronRight, 
  LogIn, 
  UserPlus, 
  Home, 
  Settings, 
  Users, 
  ShoppingBag, 
  Package, 
  Info, 
  HelpCircle,
  Sparkles,
  Shield,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { 
    name: 'Dashboard', 
    href: '/', 
    icon: Home,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Management', 
    href: '/management', 
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    children: [
      { name: 'Users', href: '/users', icon: Users, color: 'from-blue-500 to-cyan-500' },
      { name: 'Products', href: '/products', icon: ShoppingBag, color: 'from-green-500 to-emerald-500' },
      { name: 'Orders', href: '/orders', icon: Package, color: 'from-orange-500 to-amber-500' },
    ]
  },
  { 
    name: 'Users', 
    href: '/users', 
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Products', 
    href: '/products', 
    icon: ShoppingBag,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'About', 
    href: '/about', 
    icon: Info,
    color: 'from-purple-500 to-pink-500'
  },
];

export function MobileNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden h-10 w-10 border-2 border-purple-200 bg-white/80 backdrop-blur-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-lg"
        >
          <MenuIcon className="h-5 w-5 text-purple-600" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[340px] sm:w-[400px] p-0 flex flex-col bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 backdrop-blur-xl border-r-0 shadow-2xl"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-30"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center space-x-4 p-6 border-b border-purple-100/50 bg-white/80">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TypeShop
            </h2>
            <p className="text-sm text-gray-600 font-medium">Navigation Menu</p>
          </div>
        </div>
        
        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-6 px-4 relative z-10">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.name} className="space-y-2">
                  {item.children ? (
                    <div className="space-y-2">
                      {/* Parent item with children */}
                      <div className="flex items-center px-4 py-3 text-sm font-semibold text-gray-700 rounded-2xl group bg-white/50 border border-gray-200/50 shadow-sm">
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-3 shadow-md`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <span className="flex-1">{item.name}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                      </div>
                      
                      {/* Children items */}
                      <div className="ml-6 space-y-2 border-l-2 border-purple-200/50 pl-3">
                        {item.children.map((child) => {
                          const ChildIconComponent = child.icon;
                          return (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={cn(
                                "flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-300 group",
                                "hover:shadow-lg hover:scale-105",
                                "focus:outline-none focus:ring-2 focus:ring-purple-500/30",
                                isActive(child.href) 
                                  ? `bg-gradient-to-r ${child.color} text-white shadow-lg font-semibold` 
                                  : "bg-white/70 text-gray-700 hover:bg-white border border-gray-200/50"
                              )}
                            >
                              <div className={cn(
                                "w-7 h-7 rounded-lg flex items-center justify-center mr-3 transition-all",
                                isActive(child.href) 
                                  ? "bg-white/20" 
                                  : `bg-gradient-to-r ${child.color} text-white shadow-sm`
                              )}>
                                <ChildIconComponent className="h-3.5 w-3.5" />
                              </div>
                              <span className="flex-1">{child.name}</span>
                              {isActive(child.href) && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    // Single item without children
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-300 group",
                        "hover:shadow-lg hover:scale-105",
                        "focus:outline-none focus:ring-2 focus:ring-purple-500/30",
                        isActive(item.href) 
                          ? `bg-gradient-to-r ${item.color} text-white shadow-lg font-semibold` 
                          : "bg-white/70 text-gray-700 hover:bg-white border border-gray-200/50"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center mr-3 transition-all",
                        isActive(item.href) 
                          ? "bg-white/20" 
                          : `bg-gradient-to-r ${item.color} text-white shadow-md`
                      )}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="flex-1">{item.name}</span>
                      {isActive(item.href) ? (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t border-purple-100/50" />

          {/* Additional Links */}
          <div className="space-y-2">
            <Link
              to="/settings"
              className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-xl bg-white/70 border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-gray-500 to-slate-500 flex items-center justify-center mr-3 shadow-md">
                <Settings className="h-4 w-4 text-white" />
              </div>
              <span>Settings</span>
              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 ml-auto" />
            </Link>
            <Link
              to="/help"
              className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-xl bg-white/70 border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mr-3 shadow-md">
                <HelpCircle className="h-4 w-4 text-white" />
              </div>
              <span>Help & Support</span>
              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 ml-auto" />
            </Link>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="relative z-10 p-5 border-t border-purple-100/50 bg-white/80 space-y-3">
          <Button 
            variant="outline" 
            className="w-full h-12 justify-start gap-3 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800 transition-all duration-300 rounded-xl group"
            size="sm"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <LogIn className="h-4 w-4 text-white" />
            </div>
            <span className="flex-1 text-left">
              <div className="font-semibold">Login</div>
              <div className="text-xs text-blue-600">Access your account</div>
            </span>
            <ChevronRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            className="w-full h-12 justify-start gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 rounded-xl group"
            size="sm"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserPlus className="h-4 w-4 text-white" />
            </div>
            <span className="flex-1 text-left">
              <div className="font-semibold">Sign Up</div>
              <div className="text-xs text-white/90">Create new account</div>
            </span>
            <ChevronRight className="h-4 w-4 text-white/70 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Footer */}
        <div className="relative z-10 p-4 border-t border-purple-100/50 bg-white/80">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Shield className="h-3 w-3 text-green-500" />
              <span className="font-medium">TypeShop v1.0.0</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <Sparkles className="h-3 w-3 text-purple-500" />
              © 2024 All rights reserved
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}