import React, { useContext } from 'react'
import { ComerceContext } from '../../store/ComerceContext'

const Compras = () => {
    const {loged,setLoged,compras} = useContext(ComerceContext)
    const{name,lastname,email} = loged
    const{favs,total} = compras
  
  
  
    return (
    <div className=''>
               <h3 className='text-center mt-5 mb-3'>Tus compras</h3>
          {/* <div className='d-flex justify-content-evenly'> */}
            {favs.map(fav=>(
              //  <div className='d-flex'>
               <div className='row ms-5 me-5 mt-4 p-2 shadow-sm' key={fav.id}>
                    <div className='col-3 col-xs-3  '>{fav.marca}</div>
                    <div className='col-3 col-xs-3 '>{fav.modelo}</div>
                    <div  className='col-3 col-xs-3 '> Cantidad:{fav.cantidad}</div>
                    <div className='col-2 col-xs-2'>${fav.precio}</div>
               </div>

            ))

            }
            
          {/* </div> */}

    </div>
  )
}

export default Compras