import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { ThemeContext } from '../context/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Button onClick={toggleTheme} variant='contained' color='primary'>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  )
}

export default ThemeSwitcher
