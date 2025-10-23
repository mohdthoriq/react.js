import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Home, ArrowLeft, Search, Users, Package, Info, Rocket, Compass } from 'lucide-react';

export function NotFoundPage() {
  const quickLinks = [
    { name: 'Users', href: '/users', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { name: 'Products', href: '/products', icon: Package, color: 'from-purple-500 to-pink-500' },
    { name: 'About', href: '/about', icon: Info, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-amber-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6 relative z-10">
          {/* Animated 404 Number */}
          <div className="relative">
            <div className="text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent opacity-10">
              404
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Oops! Lost in Space?
              </div>
              <Compass className="h-16 w-16 text-amber-500 mb-4 animate-bounce" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The page you're looking for seems to have drifted off into the digital cosmos. 
              Don't worry, even the best astronauts get lost sometimes! 🚀
            </p>
          </div>
        </div>

        {/* Main Action Card */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-amber-100 to-pink-100 rounded-full opacity-50"></div>
          
          <CardContent className="p-8 relative z-10">
            <div className="text-center space-y-6">
              {/* Error Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <AlertCircle className="h-10 w-10 text-red-500" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Button asChild size="lg" className="h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 transition-all group">
                  <Link to="/" className="flex items-center gap-3">
                    <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <div className="text-left flex-1">
                      <div className="font-semibold">Go Home</div>
                      <div className="text-xs opacity-90">Back to safety</div>
                    </div>
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="h-14 border-2 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:border-amber-300 transition-all group">
                  <Link to="/products" className="flex items-center gap-3">
                    <ArrowLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <div className="text-left flex-1">
                      <div className="font-semibold">Explore Products</div>
                      <div className="text-xs opacity-90">Continue browsing</div>
                    </div>
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">404</div>
                  <div className="text-xs text-gray-500 font-medium">Error Code</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">?</div>
                  <div className="text-xs text-gray-500 font-medium">Missing Page</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">!</div>
                  <div className="text-xs text-gray-500 font-medium">Oops Moment</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-100/50">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Search className="h-5 w-5 text-gray-500" />
                <span className="font-semibold">Quick Navigation</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={link.name}
                      asChild
                      variant="ghost"
                      className={`h-12 bg-gradient-to-r ${link.color} hover:shadow-lg transition-all text-white border-0`}
                    >
                      <Link to={link.href} className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        {link.name}
                      </Link>
                    </Button>
                  );
                })}
              </div>

              {/* Fun Fact */}
              <div className="pt-4 border-t border-gray-200/50">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
                  <Rocket className="h-4 w-4 text-amber-600" />
                  <span className="text-sm text-amber-700 font-medium">
                    Fun Fact: The "404" error dates back to the early days of the web!
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
              Contact support
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}