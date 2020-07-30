const redux = require("redux")
const { Switch } = require("react-router-dom")

function increment() {
    return {
        type: "INCREMENT"
    }
}

// Create another action creator to handle decrementing the number. Add an else if() to this reducer to handle the decrement action

function decrement() {
    return { type: "DECREMENT"} 
}

function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch (action.type) {
        case "INCREMENT":
            return { 
                count: state.count +1 
            }
        case "DECREMENT" : 
            return {
                count:  state.count -1
            }
        default: 
            return state;
    }
}