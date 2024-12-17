import React, { useState } from 'react'
import './RandomColor.css'

const RandomColor = () => {

  const [color, setColor] = useState("#000000")

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  }

  const handleRandom = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    for (let i = 0; i<6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  return (
    <div style={{background: color,}} className='container'>
      <div className='btn'>
        <button onClick={()=>handleRandom()}>Generate random color</button>
      </div>

      <div className='hex-value'>
        <h3>HEX color</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor