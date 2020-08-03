import React from "react"
import {useSelector} from "react-redux"

function App(props) {
    const count = useSelector((state) => state.count);

    return (
        <div>
            <h1>{count}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

export default App;