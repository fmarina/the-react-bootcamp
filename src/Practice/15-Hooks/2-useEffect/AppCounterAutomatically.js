import React, { useState, useEffect } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("");

    const randomColor = () => {
        const colors = ["yellow", "red", "blue", "green", "pink", "grey"];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setColor(randomColor())
    }, [])
    
    return ( 
        <div >
            <h1 style={{color: color, fontSize: 52, marginLeft: "50%"}}>{count}</h1>
        </div>
    )
}

export default App