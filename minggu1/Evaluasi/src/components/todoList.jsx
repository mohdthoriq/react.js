import TodoItem from "./todoItem";

export default function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
        <ul>
            {todos.map((todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    toggleTodo={() => toggleTodo(todo.id)}
                    removeTodo={() => removeTodo(todo.id)}
                />
            )))}
        </ul>
    )

}
    
