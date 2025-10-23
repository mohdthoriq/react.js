import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Shield, Zap, Database, GitBranch, Layout, CheckCircle2 } from 'lucide-react';

export function AboutPage() {
  const features = [
    { 
      name: 'TypeScript for type safety', 
      icon: <Shield className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    { 
      name: 'shadcn/ui for beautiful components', 
      icon: <Palette className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    { 
      name: 'React Router for navigation', 
      icon: <GitBranch className="h-5 w-5" />,
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    { 
      name: 'Context API for state management', 
      icon: <Database className="h-5 w-5" />,
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    },
    { 
      name: 'Custom hooks with generics', 
      icon: <Code className="h-5 w-5" />,
      color: 'bg-pink-100 text-pink-800 border-pink-200'
    },
    { 
      name: 'Form validation with Zod', 
      icon: <CheckCircle2 className="h-5 w-5" />,
      color: 'bg-teal-100 text-teal-800 border-teal-200'
    }
  ];

  const techStack = [
    { name: 'React 18', color: 'bg-blue-500/10 text-blue-700 border-blue-200' },
    { name: 'TypeScript', color: 'bg-blue-600/10 text-blue-800 border-blue-300' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500/10 text-cyan-700 border-cyan-200' },
    { name: 'shadcn/ui', color: 'bg-purple-500/10 text-purple-700 border-purple-200' },
    { name: 'React Router', color: 'bg-red-500/10 text-red-700 border-red-200' },
    { name: 'React Hook Form', color: 'bg-pink-500/10 text-pink-700 border-pink-200' },
    { name: 'Zod', color: 'bg-green-500/10 text-green-700 border-green-200' },
    { name: 'Lucide React', color: 'bg-orange-500/10 text-orange-700 border-orange-200' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl shadow-lg mb-4">
          <Layout className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          About This Application
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern, type-safe React application built with cutting-edge technologies and best practices
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Features Card */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
              <Zap className="h-6 w-6 text-blue-600" />
              Key Features
            </CardTitle>
            <CardDescription className="text-blue-700/80">
              Explore the powerful features that make this application stand out
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${feature.color}`}
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack Card */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50/30">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
              <Code className="h-6 w-6 text-purple-600" />
              Technology Stack
            </CardTitle>
            <CardDescription className="text-purple-700/80">
              Built with modern tools and frameworks for optimal performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 text-sm font-medium border-2 transition-all hover:scale-110 ${tech.color}`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Structure Card */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50/30">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
            <GitBranch className="h-6 w-6 text-green-600" />
            Project Architecture
          </CardTitle>
          <CardDescription className="text-green-700/80">
            Clean and organized folder structure for maintainable code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100/50 border-2 border-green-200 rounded-xl p-6">
            <pre className="text-sm text-green-900 overflow-x-auto font-mono">
{`src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── UserCard.tsx
│   ├── ProductList.tsx
│   └── Navigation.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── UsersPage.tsx
│   ├── ProductsPage.tsx
│   └── AboutPage.tsx
├── contexts/           # React context providers
│   └── UserContext.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── lib/                # Utility functions
│   └── utils.ts
├── App.tsx             # Main application component
└── main.tsx            # Application entry point`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50/30 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
            <div className="text-sm text-orange-700 font-medium">Features</div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-gradient-to-br from-cyan-50 to-blue-50/30 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-cyan-600 mb-2">8+</div>
            <div className="text-sm text-cyan-700 font-medium">Technologies</div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50/30 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-green-700 font-medium">Type Safe</div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50/30 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">⚡</div>
            <div className="text-sm text-purple-700 font-medium">Fast & Modern</div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <Card className="border-0 bg-gradient-to-br from-gray-50 to-slate-100 text-center">
        <CardContent className="p-8">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            🚀 Built with Passion & Modern Best Practices
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This application demonstrates the power of TypeScript, React, and modern UI libraries 
            working together to create beautiful, maintainable, and type-safe web applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}