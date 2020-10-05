import React, { useEffect, useState } from 'react';

function Example1() {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);
    console.log("example1: render");
    useEffect(() => {
        console.log("example1: resource type changed");
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res => res.json())
        .then(json => setItems(json));
        return () => {
            // willUnmount
            console.log("clean up");
        }
    }, [resourceType]);
    useEffect(() => {
        console.log("example1: mounted");
    }, []);
    return (
        <div>
            <h3>Example 1</h3>
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            <h4>{resourceType}</h4>
            <div 
            className="items-container"
            style={{ height: "300px", overflow: "auto" }}
            >
                {items.map(item => (
                    <pre key={item.id}>{JSON.stringify(item)}</pre>
                ))}
            </div>
        </div>
    );
}
function Example2() {
    const [random, setRandom] = useState(Math.random().toFixed(2));
    useEffect(() => {
        console.log("example2: mounted");
    }, []);
    return (
        <div>
            <h3>Example 2</h3>
            <span>{random} </span>
            <button onClick={() => setRandom(Math.random().toFixed(2))}>Random</button>
        </div>
    )
}
function Example3() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        // didMount
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup (willUnmount)
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    
    return (
        <div>
            <h3>Example 3</h3>
            <div>
                windowWidth: {windowWidth}
            </div>
        </div>
    );
}

function UseEffectExample() {
    return (
        <div>
            <h2>useEffect</h2>
            <Example1 />
            <Example2 />
            <Example3 />
        </div>
    );
}

export default UseEffectExample;