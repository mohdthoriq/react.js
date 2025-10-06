import { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos(prev => [...prev, newTodo])
            setNewTodo('')
        }
    }


    return (
        <>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1>Todo List</h1>
                <div>
                    <input className='border-2 border-black p-1 rounded-md' type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                </div>
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <button onClick={addTodo}>Tambah</button>
                    <button onClick={() => setTodos([])}>Clear</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}