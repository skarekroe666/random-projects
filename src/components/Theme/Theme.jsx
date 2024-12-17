import React, { useState } from 'react'
import './Theme.css'

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false); // State to toggle modes

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode); // Toggles the state
    };

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
                <p>Click the button below to toggle themes.</p>
                <button className='toggle-btn' onClick={toggleTheme}>
                    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    );
}

export default Theme