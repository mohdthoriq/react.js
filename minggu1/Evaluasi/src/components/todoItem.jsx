export default function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
        <li>
            <div className="flex items-center justify-between gap-4">
                <input type="checkbox" checked={todo.completed} onChange={toggleTodo} />
                <span onClick={toggleTodo} className={todo.completed ? "completed" : ""}>
                    {todo.text}
                </span>
                <button className="backdrop-blur-sm" onClick={removeTodo}>🗑️</button>
            </div>
        </li>
    )
}