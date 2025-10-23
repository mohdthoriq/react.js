// User Types
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  isActive: boolean;
  role: 'admin' | 'user' | 'moderator';
  age?: number; // Tambahkan age sebagai optional
  createdAt?: Date;
  updatedAt?: Date;
}

// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description?: string;
  category: string;
  image?: string;
  isAvailable: boolean;
  createdAt?: Date;
}

// Form Types
export interface UserFormData {
  name: string;
  email: string;
  age: number;
  role: User['role'];
  isActive: boolean;
}

export interface ProductFormData {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Context Types
export interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: UserWithoutId) => void;
  updateUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  getUser: (userId: number) => User | undefined;
  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}


// Utility Types
export type PartialUser = Partial<User>;
export type UserWithoutId = Omit<User, 'id'>;
export type UserPreview = Pick<User, 'id' | 'name' | 'email' | 'role'>;

// Form Validation Types
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Table Types
export interface ColumnDefinition<T> {
  key: keyof T | string;
  header: string;
  cell?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

// API Error Types
export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

// Search and Filter Types
export interface UserFilter {
  role?: User['role'];
  isActive?: boolean;
  search?: string;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
}