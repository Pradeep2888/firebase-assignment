import React from 'react'
import { Route, Routes } from 'react-router-dom'


function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<h1>P</h1>} />
        </Routes>
    </div>
  )
}

export default AllRoutes