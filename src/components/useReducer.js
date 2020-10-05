import React, { useReducer, useState } from 'react';
import Todo from './Todo';

const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

function Example1() {
    function reducer(state, action) {
        switch(action.type) {
            case ACTION.DECREMENT:
                return { count: state.count - 1};
            case ACTION.INCREMENT:
                return { count: state.count + 1};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    function decrement() {
        dispatch({ type: ACTION.DECREMENT });
    }
    function increment() {
        dispatch({ type: ACTION.INCREMENT });
    }
    return (
        <>
            <h3>Example 1</h3>
            <button onClick={decrement}>-</button>
            <span> {state.count} </span>
            <button onClick={increment}>+</button>
        </>
    );
}
function Example2() {
    const [name, setName] = useState('');
    const ACTIONS = {
        ADD_TODO: "add-todo",
        TOGGLE_TODO: "toggle-todo",
        DELETE_TODO: "delete-todo",
    };
    const [todos, dispatch] = useReducer(reducer, []);
    function reducer(todos, action) {
        switch (action.type) {
            case ACTIONS.ADD_TODO:
                if (!action.payload.name) { return todos; }
                return [...todos, newTodo(action.payload.name)];
            case ACTIONS.TOGGLE_TODO:
                return [...todos];
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id);
            default: 
                return todos;
        }
    }
    function newTodo(name) {
        return { id: Date.now(), name: name, complete: false };
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }
    function toggleTodo(id) {
        const todo = todos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        dispatch({ type: ACTIONS.TOGGLE_TODO });
    }
    return(
        <>
            <h3>Example 2</h3>
            <h4>Todos</h4>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
            </form>
            {
                todos.map(todo => (
                    <Todo deleteTodo={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} toggleTodo={toggleTodo} key={todo.id} todo={todo} />
                ))
            }
        </>
    );
}

function UseReducerExample() {
    return (
        <div>
            <h2>useReducer</h2>
            <Example1 />
            <Example2 />
        </div>
    );
}

export default UseReducerExample;