import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { ComerceContext } from '../../store/ComerceContext'
import { BASE_URL } from '../../utils'
import './Dashboard.css'
import Delnbooks from './Delnbooks/Delnbooks'

const Dashboard = () => {
    const{nbooks,setNbooks} = useContext(ComerceContext)
    const{nomarchivo, marca, modelo, precio, ano, descripcion, stock} = nbooks
    // console.log(archivo, marca, modelo, precio, ano, descripcion, stock)
    const [file,setFile] = useState('')

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(e.currentTarget.files[0])
        if(file.name ==='' || marca ==='' ||modelo ==='' || precio ==='' || ano ==='' || descripcion===''|| stock==='' )
        return toast.error('Todos los cámpos son obligatorios')
        console.log('formulario enviado')
        const data = {
            nomarchivo:file.name,
            marca,
            modelo,
            precio:Number(precio),
            ano:Number(ano),
            descripcion,
            stock:Number(stock)
        }
        // console.log(data)
        axios.post(`${BASE_URL}/notebooks`,data,{headers:{'content-type':'multipart/form-data'}})
        .then(response=>{
            console.log(response.data)
            // alert(response.data.message)
        })
        .catch(error=>console.log(error))
        }

        const subirImagen = (e)=>{
            console.log(e.currentTarget.files[0])
            setFile(e.currentTarget.files[0])
        }

  
    return (
    <div className='row d-flex justify-content-center pt-5'>
        <h1 className='m-5 text-center'>Admin Dashboard</h1>
        <h3 className='m-3 text-center'>Agregar Productos</h3>
            <form className=' row d-flex justify-content-center' id='myForm' onSubmit={handleSubmit} >
                <div className=" row d-flex justify-content-center mb-3">
                <label htmlFor="nomarchivo"></label>
                    <input type="file" className="form-control w-50 " id="nomarchivo" placeholder="Archivo (incluír extensión)" name='nomarchivo' value={nomarchivo} onChange={subirImagen} />
            
                </div>
                
                <div className="row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingPassword2" placeholder="Marca" name='marca' value={marca} onChange={e=>setNbooks({...nbooks,marca:e.target.value})}/>
                </div>

                <div className="row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingPassword2" placeholder="Modelo" name='modelo' value={modelo} onChange={e=>setNbooks({...nbooks,modelo:e.target.value})}/>
                </div>
                <div class=" row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingInput2" placeholder="Precio" name='precio' value={precio}  onChange={e=>setNbooks({...nbooks,precio:e.target.value})}/>
                
                </div>
                
                <div className="row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingPassword2" placeholder="Año" name='ano' value={ano} onChange={e=>setNbooks({...nbooks,ano:e.target.value})}/>
                </div>
                <div className=" row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingPassword1" placeholder="Descripción" name='descripcion' value={descripcion}  onChange={e=>setNbooks({...nbooks,descripcion:e.target.value})}/>
                </div>

                <div class=" row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingInput3" placeholder="Stock" name='stock' value={stock}  onChange={e=>setNbooks({...nbooks,stock:e.target.value})}/>
                
                </div>
                    <button type="submit" className="btn btn-outline-primary submitbuton w-25">Agregar</button>
            </form>
            <Delnbooks/>

            {/* <h3 className='m-3 text-center'>Eliminar Productos</h3>
                <form className=' row d-flex justify-content-center'>
                    <div className="row d-flex justify-content-center mb-3">
                            <input type="text" className="form-control w-50"  placeholder="id"  />
                    </div>
                    <div className="row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50"  placeholder="Marca"  />
                    </div>
                    <div className="row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50"  placeholder="Modelo"  />
                    </div>

                </form> */}
</div>
  )
}

export default Dashboard