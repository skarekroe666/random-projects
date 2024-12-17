import React, { useState } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {

    const [theme, setTheme] = useState('theme', "dark")

    const handleToggleTheme = ()=> {
        setTheme(theme==='dark'? "light": "dark")
    }
    console.log(theme)

  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'>
            <p>Hello World!</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default ThemeToggle