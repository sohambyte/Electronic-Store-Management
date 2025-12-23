import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function View() {
  const[elec,setelec] =useState([])
    useEffect(()=>{
       axios.get("http://localhost:3000/products")
       .then((res)=>setelec(res.data))
       .catch((err)=>console.log(err.message)
       )
    },[])

    function del(id){ 
      axios.delete(`http://localhost:3000/product/${id}`)
      .then((res)=>{ 
        if(res===201){ 
          window.location.reload() } 
        }) 
        .catch((err)=>console.log(err.message) ) 
    }

    

  return (
   <>
   <div>
    <h1 className='d-flex text-light justify-content-center '>Welcome To View Page</h1>

   </div>
<div>
  <table className='table table-dark'>
    <thead>
      <tr className='table table-secondary'>
        <th>ID</th>
        <th>Product Name</th>
        <th>Description</th>
        <th>Qunatity</th>
        <th>Price</th>
        <th>In Stock</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        elec.map((s,i)=><tr key={i}>
          <td>{s.id}</td>
          <td>{s.pname}</td>
          <td>{s.descrip}</td>
          <td>{s.Quantity}</td>
          <td>{s.price}</td>
          <td>
            <input type="checkbox" className='form-check-input' checked={s.instock} />
          </td>
          <td>
            <button className='bg-transparent  me-3' onClick={()=>del(s.id)}><i className="bi bi-trash-fill text-danger"></i></button>
          <Link to={`/edit/${s.id}`}><i className="bi bi-pencil-square text-success"></i></Link>
         
          </td>
        </tr>)
      }
    </tbody>
  </table>
 
  </div>   
   </>
  )
}

export default View
