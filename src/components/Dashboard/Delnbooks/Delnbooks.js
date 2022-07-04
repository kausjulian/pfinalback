import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { ComerceContext } from '../../../store/ComerceContext'
import { BASE_URL } from '../../../utils'




const Delnbooks = () => {
  const{delNbooks,setdelNbooks} = useContext(ComerceContext)
  const{id} = delNbooks
  console.log(delNbooks)
  const [loading,setLoading]= useState(false)
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(id =='')
    return toast.error('Todos los campos son obligatorios')
    console.log('formulario enviado')
    setLoading(true)
    // const data = {
    //     id
    // }
    // console.log(data)
    axios.delete(`${BASE_URL}/notebooks/${id}`)
    .then(response=>{
        // console.log(response.data)
        if(response.data.deleted) 
        toast.success(`Producto ID ${response.data.id} eliminado con éxito`)
        setLoading(false)
    })
    .catch(error=>{
      setLoading(false)
      // console.log(error)
    })
    }
  
  
    return (
    <div>
      {loading ? 
   <div className='loading'>
       <div className="spinner-border text-primary m-0" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
   Loading...
   </div>:
   <>
      <h3 className='m-3 mb-5 pt-5 text-center'>Eliminar Productos</h3>
        <form className=' row d-flex justify-content-center' onSubmit={handleSubmit}>
                      <div className="row d-flex justify-content-center mb-3">
                              <input type="number" className="form-control w-50 mb-3"  placeholder="id" value={id} onChange={e=>setdelNbooks({...delNbooks,id:Number(e.target.value)})} />
                      </div>
                              <button type="submit" className="btn btn-outline-primary submitbuton mt-3 mb-3 w-25">Eliminar</button>
                      
                      {/* <div className="row d-flex justify-content-center mb-3">
                          <input type="text" className="form-control w-50"  placeholder="Marca" value={marca2} onChange={e=>setdelNbooks({...delNbooks,marca2:e.target.value})} />
                      </div>
                      <div className="row d-flex justify-content-center mb-3">
                          <input type="text" className="form-control w-50"  placeholder="Modelo" value={modelo2} onChange={e=>setdelNbooks({...delNbooks,modelo2:e.target.value})}  />
                      </div> */}

          </form>
    </>

                  }
    </div>
  )
}

export default Delnbooks