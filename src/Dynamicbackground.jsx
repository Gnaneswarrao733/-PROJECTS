import React, { useState, useEffect } from 'react';


const App = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  useEffect(() => {
    const changeBgColor = () => {
      const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33EC'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    };

    const intervalId = setInterval(changeBgColor, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Dynamic Background</h1>
    </div>
  );
};

export default App;
