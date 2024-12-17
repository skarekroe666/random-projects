import React, { useEffect, useState } from 'react'
import './RandomColor.css'

const RandomColor = () => {

  const [colorType, setColorType] = useState('hex')
  const [color, setColor] = useState("#000000")

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  }

  const handleRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    for (let i = 0; i<6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  const handleRandomRGBColor = () => {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (colorType==="rgb") handleRandomRGBColor()
    else handleRandomHexColor()
  }, [colorType])

  return (
    <div style={{background: color,}} className='container'>
      <div className='btn'>
        <button onClick={()=>setColorType('hex')}>Generate HEX color</button>
        <button onClick={()=>setColorType('rgb')}>Generate RGB color</button>
        <button 
          onClick={colorType==='hex'? handleRandomHexColor : handleRandomRGBColor}>
            Generate random color
        </button>
      </div>

      <div className='hex-value'>
        <h3>{colorType==='rgb'? 'RGB color ': 'HEX color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor