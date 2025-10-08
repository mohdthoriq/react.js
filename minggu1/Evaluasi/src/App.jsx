import { useState } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoFilter from "./components/todoFilter";
import "./App.css";


export default function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("All");


  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false}])
    console.log(todos)  
  }

  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo,  completed: !todo.completed} : todo)
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => { 
     if (todo.id === id) {
      alert("are you sure to delete this todo?") 
        return false;
     }
  }))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // "All"
  });


  return (
    <>
    <div className="bg-slate-500 w-100 h-full p-4 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.6)] gap-4 flex flex-col justify-center items-center mx-auto mt-100 ">
      <h1 className="text-3xl font-bold text-white">Todo List</h1>
      <TodoForm 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo} 
      />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filterTodos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
    </>
  )
}