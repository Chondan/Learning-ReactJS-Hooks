import React from 'react';

function Todo({ todo, toggleTodo, deleteTodo }) {
    return (
        <div>
            <span 
                style={{
                    color: todo.complete ? "#AAA" : "#000"
                }}
            >
                {todo.name}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default Todo;