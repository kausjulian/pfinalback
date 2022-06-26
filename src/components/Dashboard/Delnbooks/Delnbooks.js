import axios from 'axios'
import React, { useContext } from 'react'
import { ComerceContext } from '../../../store/ComerceContext'
import { BASE_URL } from '../../../utils'




const Delnbooks = () => {
  const{delNbooks,setdelNbooks} = useContext(ComerceContext)
  const{id} = delNbooks
  console.log(delNbooks)
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(id =='')
    return alert('Todos los campos son obligatorios')
    console.log('formulario enviado')
    // const data = {
    //     id
    // }
    // console.log(data)
    axios.delete(`${BASE_URL}/notebooks/${id}`)
    .then(response=>{
        console.log(response.data)

    })
    .catch(error=>console.log(error))
    }
  
  
    return (
    <div>
               <h3 className='m-3 pt-5 text-center'>Eliminar Productos</h3>
                <form className=' row d-flex justify-content-center' onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center mb-3">
                            <input type="number" className="form-control w-50"  placeholder="id" value={id} onChange={e=>setdelNbooks({...delNbooks,id:Number(e.target.value)})} />
                    </div>
                    {/* <div className="row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50"  placeholder="Marca" value={marca2} onChange={e=>setdelNbooks({...delNbooks,marca2:e.target.value})} />
                    </div>
                    <div className="row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50"  placeholder="Modelo" value={modelo2} onChange={e=>setdelNbooks({...delNbooks,modelo2:e.target.value})}  />
                    </div> */}

                </form>


    </div>
  )
}

export default Delnbooks