import React, { useState } from 'react';


function UseStateExample() {
    // useState() always returned an array with 2 values
    const [state, setState] = useState({ count: 0, color: "blue" });
    const [msg, setMsg] = useState(() => "Hello world");
    function decrementCount() {
        setState(prevState => ({
            ...prevState, count: prevState.count - 1
        }));
    }
    function incrementCount() {
        setState(prevState => {
            const { count, ...excludeprevCount } = prevState;
            // if we place spread syntax after count prop, the count value that we have just set will be 
            // overridden with the previous value
            // * so put it in very front of properties like I we do on decrementCount() method
            if (count + 1 === 10) {
                setMsg("Hola, Como estad?");
            }
            return { count: count + 1, ...excludeprevCount,  }
        });
    }
    return (
        <>
            <h2>useState</h2>
            <p>React Hooks must be called in the exact same order in every component render.</p>
            <div><strong>{msg}</strong></div><br />
            <button onClick={decrementCount}>-</button>
            <span> {state.count} </span>
            <span style={{ color: state.color }}> {state.color} </span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default UseStateExample;