import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UploadDetail from '../Components/UploadDetail'
import Home from '../Pages/Home'


function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/upload' element={<UploadDetail/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes