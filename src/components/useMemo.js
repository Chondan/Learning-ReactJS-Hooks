import React, { useState, useMemo, useEffect } from 'react';

function Example1() {
    const [number, setNumber] = useState(0);
    const [dark ,setDark] = useState(false);
    const themes = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        };
    }, [dark]); 
        // useMemo to capture the older output if the new input is not changed
    // * in this case number is the depedencies that we are looking for
    // * if the value of number change we have to compute the value again, but if it's not we do not need to do it again.
    const doubleNumber = useMemo(() => {
        return slowFunctionDoubleNumber(number);
    }, [number]);
    useEffect(() => {
        console.log("Theme changed");
    }, [themes]);
    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={{...themes, padding: "5px"}}>{doubleNumber}</div>
        </div>
    );
}
function slowFunctionDoubleNumber(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}

function UseMemoExample() {
    return (
        <div>
            <h2>useMemo</h2>
            <Example1 />
        </div>
    );
}

export default UseMemoExample;