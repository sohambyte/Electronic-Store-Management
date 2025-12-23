import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AddProud from './AddProud'
import View from './View'

function Header() {
  return (
   <>
   <div>
      <header className="d-flex align-items-center justify-content-between p-3">
        <div className="d-flex align-items-center">
          <i className="bi bi-boxes fs-3 me-2" aria-hidden="true"></i>
          <h1 className="text-light m-0">Electronic Store</h1>
        </div>

       <div>
          <Link to="/add" className="btn btn-light me-2">Add Product</Link>
          <Link to="/view" className="btn btn-light">View Product</Link>
     </div>
      </header>
        <Routes>
          <Route path="add" element={<AddProud/>}></Route>
          <Route path="view" element={<View/>}></Route>
          <Route path='edit/:id' element={<AddProud></AddProud>}></Route>
        </Routes>
   </div>
   </>
  )
}

export default Header
