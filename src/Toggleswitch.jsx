
import React, { useState } from 'react';


const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="toggle-container">
      <h1>Toggle Switch</h1>
      <label className="toggle">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <span>{isOn ? 'On' : 'Off'}</span>
    </div>
  );
};

export default ToggleSwitch;
