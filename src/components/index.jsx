import React, { useState } from 'react';
import './styleColorBox.css';

function getRandomColor() {
    const colorList = ["green", "blue", "black", "purple"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("ColorBox") || "red";
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('ColorBox', newColor);
    }

    return (
        <div
            className="color"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;