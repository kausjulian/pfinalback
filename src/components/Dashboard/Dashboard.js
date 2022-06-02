import React, { useContext } from 'react'
import { ComerceContext } from '../../store/ComerceContext'
import './Dashboard.css'

const Dashboard = () => {
    const{nbooks,setNbooks} = useContext(ComerceContext)
    const{nombre,precio,stock,descripcion,imagen} = nbooks
    console.log(nombre)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nombre =='' || precio =='' || stock=='' || descripcion=='')
        return alert('Todos los campos son obligatorios')
        console.log('formulario enviado')
        console.log(nombre,precio,stock,descripcion,imagen)
        
    }

    const handleInputChange = ({target})=>{
        setNbooks({
            ...nbooks,
            [target.nombre]:target.value,
            [target.precio]:target.value,
            [target.stock]:target.value,
            [target.descripcion]:target.value,
            [target.imagen]:target.value
        })
    }
  
    return (
    <div className='row d-flex justify-content-center pt-5'>
        <h1 className='m-5 text-center'>Admin Dashboard</h1>
        <h3 className='m-3 text-center'>Agregar Productos</h3>
            <form className=' row d-flex justify-content-center' id='myForm' onSubmit={handleSubmit}>
                <div className=" row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50 " id="floatingInput" placeholder="Nombre" name='nombre' value={nombre} onChange={handleInputChange}/>
            
                </div>
                <div class=" row d-flex justify-content-center mb-3">
                    <input type="text" className="form-control w-50" id="floatingInput2" placeholder="Precio" name='precio' value={precio}  onChange={handleInputChange}/>
                
                </div>
                
                
                <div class=" row d-flex justify-content-center mb-3">
                    <input type="email" className="form-control w-50" id="floatingInput3" placeholder="Stock" name='stock' value={stock}  onChange={handleInputChange}/>
                
                </div>
                <div className=" row d-flex justify-content-center mb-3">
                    <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Descripción" name='descripcion' value={descripcion}  onChange={handleInputChange}/>
                </div>
                
                <div className="row d-flex justify-content-center mb-3">
                    <input type="password" className="form-control w-50" id="floatingPassword2" placeholder="Imagen (incluír extensión)" name='imagen' value={imagen} onChange={handleInputChange}/>
                </div>
                    <button type="submit" class="btn btn-outline-success submitbuton w-25">Agregar</button>
            </form>
</div>
  )
}

export default Dashboard