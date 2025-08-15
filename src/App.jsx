import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import './App.css'

function App() {

  return (
    <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/addCreator" element={<AddCreator />} />
        <Route path="/editCreator/:id" element={<EditCreator />} />
        <Route path="/viewCreator/:id" element={<ViewCreator />} />
      </Routes>
  )
}

export default App