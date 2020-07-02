import React, {useState} from "react";

function App() {
    const [ count, setCount ] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    
    return (
        <div className="countApp">
            <h1>{count}</h1>
            <div className="container-button">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button> 
            </div>
            
        </div>
    );
}

export default App;