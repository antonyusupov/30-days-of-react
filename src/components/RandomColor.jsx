import { useState } from "react";
import React from "react";



// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}


const RandomColor = () => {
    const [colors, setColors] = useState(Array.from({ length: 30}, ()=> hexaColor()));
    const handleClick = () => {
      setColors(Array.from({ length: 30 }, ()=> hexaColor()));
    }
    return (
      <div className='random-color-generater'>
        <h2>hexadecimal colors</h2>
        <button onClick={handleClick}>Generate color</button>
        <div className='colors-container'>
          {
            colors.map((color, index) => (<p key={index} style={{backgroundColor: color}}> {color}</p>))
          }
        </div>
      </div>
    )
  }

export default RandomColor;