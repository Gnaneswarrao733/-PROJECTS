// src/RealTimeInput.js
import React, { useState } from 'react';

const RealTimeInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Real-Time Input</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something..."
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <h2>Your Input: {inputValue}</h2>
        </div>
    );
};

export default RealTimeInput;
