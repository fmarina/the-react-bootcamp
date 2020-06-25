import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(true)}
        </div>
    )
}

function App() {
    return (
        <div>
            <Example render={
                function(isDaytime) {
                    return (
                        <h1>{isDaytime ? "Good day" : "Good evening"}, Marina!</h1>
                    )
                }
            }/>
        </div>
    )
}

export default Example