// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import CalendarPage from './pages/CalendarPage'
import KanbanPage from './pages/KanbanPage'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <main style={{ marginLeft: 240, padding: 20 }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/kanban' element={<KanbanPage />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
