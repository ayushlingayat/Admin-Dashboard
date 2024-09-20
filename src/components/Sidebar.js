import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Drawer variant='permanent' anchor='left'>
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button component={Link} to='/analytics'>
          <ListItemText primary='Analytics' />
        </ListItem>
        <ListItem button component={Link} to='/calendar'>
          <ListItemText primary='Calendar' />
        </ListItem>
        <ListItem button component={Link} to='/kanban'>
          <ListItemText primary='Kanban Board' />
        </ListItem>
        <ListItem button component={Link} to='/settings'>
          <ListItemText primary='Settings' />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
