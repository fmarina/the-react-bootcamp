import React, { useState, useEffect } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("");
    
    const increment = () => setCount(prevCount => prevCount + 1);
    
    const decrement = () => setCount(prevCount => prevCount - 1);

    const randomColor = () => {
        const colors = ["yellow", "red", "blue", "green", "pink", "grey"];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    useEffect(()=> {
        setColor(randomColor());
    }, [count]); // especifico que variable quiero que vea para ver si hay cambios

    return ( 
        <div style={{color: color}}>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App