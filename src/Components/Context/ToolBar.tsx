import React, { useContext } from 'react';
import { themeContext } from './Context';
import { counterContext } from './Context';
import { useState } from 'react';

const ThemedButton = () => {
    const theme = useContext<string|null>(themeContext); // Get the theme from context
    return (
        <button
            style={{
                background: theme === 'light' ? 'lightgray' : 'black',
                color: 'white',
            }}
        >
            I am a {theme} button
        </button>
    );
};

const ToolBar = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <counterContext.Provider value={count}>
            <themeContext.Provider value={count % 2 === 0 ? 'light' : 'dark'}>
                <div>
                    <ThemedButton />
                    <input
                        type="button"
                        value="Increment"
                        onClick={ () => setCount(count + 1)}
                    />
                    <h1>Count {count}</h1>
                </div>
            </themeContext.Provider>
        </counterContext.Provider>
    );
};
export default ToolBar;