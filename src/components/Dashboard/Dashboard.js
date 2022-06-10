import axios from 'axios'
import React, { useContext } from 'react'
import { ComerceContext } from '../../store/ComerceContext'
import { BASE_URL } from '../../utils'
import './Dashboard.css'
import Delnbooks from './Delnbooks/Delnbooks'

const Dashboard = () => {
    const{nbooks,setNbooks} = useContext(ComerceContext)
    const{archivo, marca, modelo, precio, ano, descripcion, stock} = nbooks
    // console.log(archivo, marca, modelo, precio, ano, descripcion, stock)

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(archivo =='' || marca =='' ||modelo =='' || precio =='' || ano =='' || descripcion==''|| stock=='' )
        return alert('Todos los campos son obligatorios')
        console.log('formulario enviado')
        const data = {
            archivo,
            marca,
            modelo,
            precio:Number(precio),
            ano:Number(ano),
            descripcion,
            stock:Number(stock)
        }
        console.log(data)
        axios.post(`${BASE_URL}/notebooks`,data)
        .then(response=>{
            console.log(response.data)
            // alert(response.data.message)
        })
        .catch(error=>console.log(error))
        }

  
    return (
    <div className='row d-flex justify-content-center pt-5'>
        <h1 className='m-5 text-center'>Admin Dashboard</h1>
        <h3 className='m-3 text-center'>Agregar Productos</h3>
            <form className=' row d-flex justify-content-center' id='myForm' onSubmit={handleSubmit}>
                <div className=" row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50 " id="floatingInput" placeholder="Archivo (incluír extensión)" name='archivo' value={archivo} onChange={e=>setNbooks({...nbooks,archivo:e.target.value})}/>
            
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
                    <button type="submit" className="btn btn-outline-success submitbuton w-25">Agregar</button>
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