import React, { useState } from 'react';

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    //Multi line condition

    const [isError, setIsError] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isBold, setIsBold] = useState(true);

    const boxStyle = {
        padding: '10px',
        margin: '10px',
        ...(isError && { border: '2px solid red' }),
        ...(isDarkMode && { backgroundColor: '#222', color: '#fff' }),
        ...(isBold && { fontWeight: 'bold' }),
    };

//single condition
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: isActive ? 'green' : 'gray',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: isActive ? 'bold' : 'normal'
    };

    return (
        <div>

            {/*single condition*/}
        <button
            style={buttonStyle}
            onClick={() => setIsActive(!isActive)}
        >
            {isActive ? 'Active' : 'Inactive'}
        </button>

            {/*Multi line condition*/}
            <div style={boxStyle}>
                This is a status box.
                <br />
                <button onClick={() => setIsError(!isError)}>Toggle Error</button>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
                <button onClick={() => setIsBold(!isBold)}>Toggle Bold</button>
            </div>


        </div>

    );
};

export default ToggleButton;
