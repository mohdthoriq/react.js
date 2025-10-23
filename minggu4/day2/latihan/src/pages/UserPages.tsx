import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCard } from '@/components/UserCard';
import { UserForm } from '@/components/UserForm';
import { useUserContext } from '@/context/UserContext';
import type { User, UserWithoutId } from '@/types';
import { 
  Users, 
  UserPlus, 
  Loader2, 
  AlertCircle, 
  RefreshCw,
  Shield,
  UserCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export function UsersPage() {
  const { 
    users, 
    loading, 
    error, 
    addUser, 
    deleteUser, 
    setUsers,
    setLoading,
    setError 
  } = useUserContext();

  // Load sample data on component mount
  useEffect(() => {
    const loadSampleData = async () => {
      setLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          const sampleUsers: User[] = [
            {
              id: 1,
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://github.com/shadcn.png',
              isActive: true,
              role: 'admin',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              name: 'Jane Smith',
              email: 'jane@example.com',
              isActive: true,
              role: 'user',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              name: 'Mike Johnson',
              email: 'mike@example.com',
              isActive: false,
              role: 'moderator',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ];
          setUsers(sampleUsers);
        }, 1000);
      } catch (err) {
        setError('Failed to load users');
      }
    };

    if (users.length === 0) {
      loadSampleData();
    }
  }, [setUsers, setLoading, setError, users.length]);

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
    // Implement edit logic here
  };

  const handleDeleteUser = (userId: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(userId);
    }
  };

  const handleAddUser = (userData: UserWithoutId) => {
    addUser(userData);
  };

  const handleReload = () => {
    setUsers([]);
    setLoading(true);
    setTimeout(() => {
      const sampleUsers: User[] = [
        {
          id: Date.now() + 1,
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://github.com/shadcn.png',
          isActive: true,
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: Date.now() + 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          isActive: true,
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      setUsers(sampleUsers);
    }, 1000);
  };

  // Calculate user statistics
  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.isActive).length;
  const adminUsers = users.filter(user => user.role === 'admin').length;
  const moderatorUsers = users.filter(user => user.role === 'moderator').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-purple-50/30 flex items-center justify-center p-6">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm max-w-md w-full">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Loader2 className="h-8 w-8 text-white animate-spin" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Loading Users</h3>
                <p className="text-gray-600">Please wait while we fetch user data...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-orange-50/30 flex items-center justify-center p-6">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm max-w-md w-full">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Error Loading Users</h3>
                <p className="text-red-600 mb-4">{error}</p>
              </div>
              <Button 
                onClick={() => setError(null)}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/20">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  User Management
                </h1>
                <p className="text-lg text-gray-600">
                  Manage your application users and permissions
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              onClick={handleReload}
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-900">{totalUsers}</div>
              <div className="text-sm text-blue-600">Total Users</div>
            </div>
          </div>
        </div>

        {/* User Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-100/30 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Active</p>
                  <p className="text-2xl font-bold text-green-900">{activeUsers}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-red-50 to-rose-100/30 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-700">Admins</p>
                  <p className="text-2xl font-bold text-red-900">{adminUsers}</p>
                </div>
                <Shield className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-100/30 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Moderators</p>
                  <p className="text-2xl font-bold text-blue-900">{moderatorUsers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100/30 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Activity</p>
                  <p className="text-2xl font-bold text-purple-900">
                    {totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0}%
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Form */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100/30 sticky top-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <UserPlus className="h-5 w-5 text-green-600" />
                  Add New User
                </CardTitle>
                <CardDescription className="text-green-700/80">
                  Create a new user account with specific roles and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserForm onSubmit={handleAddUser} />
              </CardContent>
            </Card>
          </div>

          {/* Users List */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100/30">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Users className="h-5 w-5 text-blue-600" />
                      Users List
                    </CardTitle>
                    <CardDescription className="text-blue-700/80">
                      {users.length} user(s) found in the system
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">All Users</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {users.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">No Users Found</h3>
                    <p className="text-gray-500 mb-4">Get started by adding your first user to the system</p>
                    <Button 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add First User
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map(user => (
                      <div key={user.id} className="transform hover:scale-105 transition-transform duration-300">
                        <UserCard 
                          user={user} 
                          onEdit={handleEditUser}
                          onDelete={handleDeleteUser}
                          showActions={true}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
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
                  <p className="font-medium text-amber-800">System Performance</p>
                  <p className="text-sm text-amber-600">
                    {totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0}% of users are active and engaged
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-700">
                  {activeUsers === totalUsers && totalUsers > 0 ? 'Excellent' : 
                   activeUsers >= totalUsers * 0.7 ? 'Good' : 'Needs Attention'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}