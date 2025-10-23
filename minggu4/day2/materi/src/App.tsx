import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import './App'

const loading: boolean = true;

const count: number = 1;
const price: number = 9.99;

const username: string = "John Doe";
const message: string = `Hello, ${username}!`;

const number: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];

const person: [string, number] = [
  "John",
  30,
];

enum status {
  pending = "PENDING",
  inProgress = "IN_PROGRESS",
  completed = "COMPLETED",
  failed = "FAILED",
}

const Current : status = status.pending;

const data: any = "Could be Anything"

interface UserProps {
  name: string;
  age: number;
  email?: string;
  status: boolean;
  hobbies: string[]
}

interface UserState {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  loading: boolean;
  error: string | null;
}

 async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Penggunaan dengan interface
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
}

// Usage
const users = await fetchData<User[]>('/api/users');
const posts = await fetchData<Post[]>('/api/posts');


// Partial - membuat semua properties menjadi optional
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (user: Partial<User>): void => {
  // user sekarang memiliki properties yang optional
};

// Pick - memilih properties tertentu
type UserNameAndEmail = Pick<User, 'name' | 'email'>;

// Omit - menghilangkan properties tertentu
type UserWithoutId = Omit<User, 'id'>;

// Record - membuat object dengan key dan value type tertentu
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;

import { useState, useEffect, useCallback } from 'react';

// Custom hook dengan generic types
function useAsyncData<T>(
  asyncFunction: () => Promise<T>,
  dependencies: React.DependencyList = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: fetchData };
}

// Penggunaan custom hook
interface ApiResponse {
  users: Array<{
    id: number;
    name: string;
    email: string;
  }>;
}

const UserList: React.FC = () => {
  const { data, loading, error } = useAsyncData<ApiResponse>(
    () => fetch('/api/users').then(res => res.json()),
    []
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};

// Type assertion
const someValue: unknown = "this is a string";
const strLength: number = (someValue as string).length;

// Type guard function
function isUser(obj: any): obj is User {
  return obj && typeof obj === 'object' && 'id' in obj && 'name' in obj;
}

// Penggunaan type guard
const handleData = (data: unknown): void => {
  if (isUser(data)) {
    // TypeScript sekarang tahu bahwa data adalah User
    console.log(data.name);
  }
};

export default function App() {
  return (
    <>
      <div>
        <p>Loading: {loading ? 'true' : 'false'}</p>
        <p>Count: {count}</p>
        <p>Price: {price}</p>
        <p>Username: {username}</p>
        <p>Message: {message}</p>
        <p>Numbers: {number.join(', ')}</p>
        <p>Names: {names.join(', ')}</p>
        <p>Person: {JSON.stringify(person)}</p>
        <p>Status: {Current}</p>
        <p>Data: {data}</p>

        <Counter/>

        <UserProfile/>
      </div>
    </>
  )
}