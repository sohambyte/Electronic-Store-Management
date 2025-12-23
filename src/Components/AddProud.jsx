import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';


function AddProud() {
const{register,handleSubmit,reset,setValue}=useForm()
const {id}=useParams()
const navigate=useNavigate();
useEffect(()=>{
        if(id){
                axios.get(`http://localhost:3000/products/${id}`)
                .then(res=>{
                        for(let prop in res.data){
                                setValue(prop,res.data[prop]);
                        }
                })
        }else{
                reset();
        }
},[])
  function rest(){
reset();
  }
  function savedata(d){
        if(id===null || id===undefined){
    axios.post("http://localhost:3000/product",d)
    .then((res)=>{
      if(res.status===200){
        alert("Product Added Successfully")
        reset();
      }
    })
  }else{
        axios.put(`http://localhost:3000/product/${id}`,d)
        .then(res=>{
                if(res.status===200){
                        alert('Product details Updated')
                        reset()
                }
        })
        navigate('/  view')
  }
  }
        return (
                <div className="container min-vh-100 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                                <h1 className="text-light text-center mb-4">Add Products Here</h1>

                                <div className="p-4">
                                        <form onSubmit={handleSubmit(savedata)}>
                                                <div className="mb-3">
                                                        <label className="form-label text-light">Product Name</label>
                                                        <input type="text" className="form-control" {...register('pname')} />
                                                </div>

                                                <div className="mb-3">
                                                        <label className="form-label text-light">Product Description</label>
                                                        <input type="text" className="form-control" {...register('descrip')}/>
                                                </div>

                                                <div className="mb-3">
                                                        <label className="form-label text-light">Product Quantity</label>
                                                        <input type="number" className="form-control" {...register('quantity')}/>
                                                </div>

                                                <div className="mb-3">
                                                        <label className="form-label text-light">Product Price</label>
                                                        <input type="text" className="form-control" {...register('price')}/>
                                                </div>

                                                <div className="mb-3 form-check d-flex align-items-center">
                                                  <label className="form-check-label text-light ">Is Available</label>
                                                        <input type="checkbox" className="form-check-input ms-3 me-2" {...register('instock')} />
                                                        
                                                </div>

                                                <div className="mb-3 d-flex justify-content-center">
                                                        <button className="btn btn-light" onClick={rest}>Reset <i className="bi bi-arrow-repeat"></i></button>
                                                </div>

                                                <div className="mb-3">
                                                        <button type="submit" className="btn btn-success w-100 btn-submit">Submit <i className="bi bi-arrow-right-circle-fill"></i></button>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default AddProud
