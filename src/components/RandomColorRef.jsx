import React from 'react';
import { useState, useRef } from 'react';


// Hexadecimal color generator


const RandomColorRef = () => {
    const hexaColor = () => {
        let str = '0123456789abcdef';
        let color = '';
        for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index];
    
        }
    
        return '#' + color;
    };

    // const handleClick = () => {
    //   setColors(Array.from({ length: 30 }, ()=> hexaColor()));
    // }
    const [colors, setColors] = useState(Array.from({ length: 27}, ()=> hexaColor()));
    const ref = useRef(null);


  const handleClick = () =>{
    const newColors = Array.from({length : 27}, () => hexaColor());
    setColors(newColors);
  }
    return (
      <div className='random-color-generater'>
        <h2>hexadecimal colors</h2>
        <div ref={ref} className='colors-container'>
          {
            colors.map((color, index) => (<p  key={index} style={{backgroundColor: color }}> {color}</p>))
          }
        </div>
        <button  onClick={handleClick}>Generate color</button>
      </div>
    )
}

export default RandomColorRef;