import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
