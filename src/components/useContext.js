import React, { useContext } from 'react';
import ThemeProvider, { ThemeContext, ThemeUpdateContext } from './ThemeContext';

function Example1() {
    return (
        <>
            <h3>Example 1</h3>
            <ThemeProvider>
                <Container />
            </ThemeProvider>
        </>
    );
}
function Container(props) {
    return (
        <>
            <Button {...props} />
            <Box />
        </>
    );
}
function Button(props) {
    const toggleThemeFunc = useContext(ThemeUpdateContext);
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button 
                    style={{ backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}} 
                    onClick={toggleThemeFunc}
                >
                    Toggle theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}
function Box() {
    const theme = useContext(ThemeContext);
    const styles = {
        width: "150px", 
        height: "150px",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        margin: "10px",
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
    }
    return (
        <div style={styles}>BOX</div>
    );
}

function UseContextExample() {
    return (
        <div>
            <h2>useContext</h2>
            <Example1 />
        </div>
    );
}

export default UseContextExample;