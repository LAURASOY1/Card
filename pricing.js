



import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="toggle-container">
            <i className={`fa-solid fa-toggle-${isToggled ? 'on' : 'off'}`} onClick={handleToggle}></i>
            <span>{isToggled ? 'ON' : 'OFF'}</span>
        </div>
    );
};

export default ToggleButton;