

import React, { useState } from 'react';

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
    };

    const handleToggleComplete = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Add a new task" 
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => handleToggleComplete(index)}>Toggle</button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;
