// src/context/ThemeContext.js
import React, { createContext, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
