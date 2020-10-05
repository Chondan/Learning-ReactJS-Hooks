import React, { useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    function handleClick() {
        setTheme(theme => theme === "dark" ? "light" : "dark");
    }
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={handleClick}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}

export { ThemeProvider as default, ThemeContext, ThemeUpdateContext };