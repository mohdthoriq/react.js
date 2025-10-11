import React, { useState, useEffect } from 'react';

function AsyncAwaitInEffect() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos(); // Panggil fungsi async di dalam useEffect
  }, []);

  if (loading) return <p>Memuat daftar tugas...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <h2>Daftar Tugas (Async/Await)</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AsyncAwaitInEffect;