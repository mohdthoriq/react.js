import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { User, UserContextType, UserWithoutId } from '@/types';

// State interface
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Action types
type UserAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: number }
  | { type: 'SET_USERS'; payload: User[] };

// Initial state
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// Reducer function
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'SET_USERS':
      return { ...state, users: action.payload, loading: false, error: null };
    
    case 'ADD_USER':
      // Check for duplicate email before adding
      const existingUser = state.users.find(user => 
        user.email === action.payload.email
      );
      if (existingUser) {
        return { 
          ...state, 
          error: 'User with this email already exists',
          loading: false 
        };
      }
      return { 
        ...state, 
        users: [...state.users, action.payload],
        error: null 
      };
    
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.payload.id ? action.payload : user
        ),
        error: null
      };
    
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        error: null
      };
    
    default:
      return state;
  }
};

// Create context - ✅ Export the context itself
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component - ✅ Export the provider
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Actions
  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const setUsers = (users: User[]) => {
    dispatch({ type: 'SET_USERS', payload: users });
  };

  const addUser = (userData: UserWithoutId) => {
    // Generate unique ID dengan timestamp + random
    const newUser: User = {
      ...userData,
      id: Date.now() + Math.floor(Math.random() * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    // Check for duplicates before dispatching
    const existingUser = state.users.find(user => 
      user.email === userData.email
    );
    
    if (existingUser) {
      setError('User with this email already exists');
      return;
    }
    
    dispatch({ type: 'ADD_USER', payload: newUser });
  };

  const updateUser = (user: User) => {
    const updatedUser: User = {
      ...user,
      updatedAt: new Date(),
    };
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  };

  const deleteUser = (userId: number) => {
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  const getUser = (userId: number): User | undefined => {
    return state.users.find(user => user.id === userId);
  };

  // Context value
  const contextValue: UserContextType = {
    users: state.users,
    loading: state.loading,
    error: state.error,
    addUser,
    updateUser,
    deleteUser,
    getUser,
    setUsers,
    setLoading,
    setError,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook - ✅ Export the hook
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};