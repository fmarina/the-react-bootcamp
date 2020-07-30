const redux = require("redux");

function increment() { //called function equal to type
    return {
        type : "INCREMENT" //type property
    }

}

console.log(increment()); // -> {type: "INCREMENT"};
