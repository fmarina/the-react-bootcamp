import React, {useState, useRef} from 'react';

function App() {
    const [newTodoValue, setNewTodoValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef(null);

    const handleChange = (e) => setNewTodoValue(e.target.value);

    const addTodo = (e) => {
        e.preventDefault();
        setTodoList(prevTodoList => [...prevTodoList, newTodoValue]);
        setNewTodoValue("");
        inputRef.current.focus();
    };

    const allTodos = todoList.map(todo => <p key={todo}>{todo}</p>);

    return(
        <div>
            <form>
                <input 
                    ref={inputRef}
                    type="text" 
                    name="todo" 
                    value={newTodoValue} 
                    onChange={handleChange} 
                />
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    );
}

export default App;