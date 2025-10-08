import { useState } from "react";

export default function TodoForm({ newTodo, setNewTodo, addTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTodo.trim() === "") return;
        addTodo(newTodo)
        setNewTodo("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="border-slate-200 p-2 rounded-lg text-slate-900 mr-2" type="text" value={newTodo} placeholder="tambah todo..." onChange={(e) => setNewTodo(e.target.value)} />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">Tambah</button>
        </form>
    )
}