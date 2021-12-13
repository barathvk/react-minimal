import React from 'react'
import { AppHeader } from '@c/app-header'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@c/home'
const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
