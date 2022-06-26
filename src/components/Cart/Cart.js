import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ComerceContext } from '../../store/ComerceContext'
import './Cart.css'

const Cart = () => {
  const{favs,setFavs,delFav,loged,suma,sumar,total,setTotal} = useContext(ComerceContext)

//  const [cantidad,setCantidad] = useState(0)
// console.log(favs[0].precio)


const modificarCant = (cant,precio,id)=>{
  let producto =  favs.filter(fav=>fav.id===id)
  producto[0].preciototal = Number(cant) * Number(precio)
  producto[0].cantidad = Number(cant)
  sumar()
console.log(favs)
} 


 
//  const sumar = ()=>{
 
//  for(let i = 0; i < favs.length;i++){
//   suma += favs[i].precio
//  }
//  setTotal(suma)
 
// }


console.log(total)
console.log(suma)
console.log(favs)



 
 
    return (
      <div className='cart'>
      {loged.name=== '' ||loged.name === undefined ? 
      <h3 className='text-center vacio'>Debes ingresar para ver tu Carrito</h3>
      :
    <div className='row d-flex flex-column justify-content-center ms-2 me-2' >
      <h1 className='text-center'>Carrito</h1>
      <h5 className={favs.length > 0 ?'text-center mt-5 mb-5':'d-none'}>Total: ${total}</h5>
              <div className={favs.length > 0 ? 'row  p-2 shadow-sm ':'d-none' }>
                <div className='col-3 col-xs-3 fw-bolder'>Marca</div>
                <div className='col-3 col-xs-3 fw-bolder'>Modelo</div>
                <div className='col-3 col-xs-3 fw-bolder'>Cantidad</div>
                <div className='col-2 col-xs-2 fw-bolder'>Precio</div>
                <div className='col-1 col-xs-1  fw-bolder'>Borrar</div>
              </div>
            
            {favs.length > 0 ?
            favs.map(fav=>(
              <>
           
              <div className='row  mt-4 p-2 shadow-sm' key={fav.id}>
                  <div className='col-3 col-xs-3  '>{fav.marca}</div>
                  <div className='col-3 col-xs-3 '>{fav.modelo}</div>
                  <select type='number' className='col-3 col-xs-3 'defaultValue={fav.cantidad} onChange={e=>modificarCant(e.target.value,fav.precio,fav.id)}  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  {/* <div className='col-2'>
                    <input  className='w-100' type='number' value={fav.cantidad===0 ? '': fav.cantidad} onChange={e=>modificarCant(e.target.value,fav.precio,fav.id)} />
                  </div> */}
                  <div className='col-2 col-xs-2'>{fav.precio}</div>
                  <div className='col-1 col-xs-1  '><i class="bi bi-trash2 symbols" onClick={()=>delFav(fav.id)}></i></div>
                </div>
                </>
              ))
              :
              <h4 className='text-center vacio '>No hay Productos</h4>
            }
     </div>
          }
          </div>
        
  )
}

export default Cart



{/* <button className="btn btn-danger" onClick={()=>delFav(fav.id)}>Borrar</button> */}