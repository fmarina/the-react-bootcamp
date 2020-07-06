/* useCounter function: 
    - initialize state
    - create any functions we need for modifying the state
    - return whatever we want another component to have access to (count, increment)*/

import {useState} from 'react';
//No importamos React porque no vamos a interactuar con render ni jsx

function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);

    // return whatever we want another component to have access to (count, increment)
    return {count, increment}
}

export default useCounter;