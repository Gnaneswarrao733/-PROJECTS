// src/ListComponent.js
import React, { useState } from 'react';

const Listcomponent = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Item List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Add an item..."
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <button onClick={handleAddItem} style={{ marginLeft: '10px', padding: '10px' }}>
                Add
            </button>
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        {item}
                        <button onClick={() => handleRemoveItem(index)} style={{ marginLeft: '10px' }}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listcomponent;
