import React, { useState, useCallback } from 'react';
import List from './List';

function Example1() {
    const [number, setNumber] = useState(0);
    const getItems = useCallback((incrementor) => {
        // useCallback only recreate the getItems() function
        // when the number changed
        // * 1 big different between useCallback and useMemo
        // * useMemo take the function and return the value of that funciton
        // ** useMemo, getItems = array
        // * useCallbake return the entire function not just the return value of that function
        // ** useCallback, getItems = function() {return array }
        return [+number + incrementor, +number + 1 + incrementor, +number + 2 + incrementor];
    }, [number]);
    const [dark, setDark] = useState(false);
    const themes = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    };
    
    return (
        <div style={themes}>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
            <List getItems={getItems} />
        </div>
    );
}

function UseCallbackExample() {
    return (
        <div>
            <h2>useCallback</h2>
            <Example1 />
            <div><strong>useMemo vs useCallback</strong></div>
            <p>useMemo: take a function and return the value of that function not the entire function. (so we can't pass parameter to it)</p>
            <p>useCallback: return the entire function (so we can pass parameter to it)</p>
        </div>
    );
}

export default UseCallbackExample;