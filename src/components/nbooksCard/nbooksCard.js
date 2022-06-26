import React, { useContext } from 'react'
import { ComerceContext } from '../../store/ComerceContext'
import './NbooksCard.css'

const NbooksCard = ({archivo,marca,modelo,precio,ano,descripcion,nbook}) => {
  const{addFav} = useContext(ComerceContext)
  // console.log(nbook)
  // console.log(addFav)
  const handleClick = ()=>{
    addFav(nbook)
  }
  
  return (
    <div className="card cardstyle mb-4 shadow" >
        <img src={require(`../../img/nbooks/${archivo}`)} className="card-img-top mt-3 imagen" alt={marca}/>
        <div className="card-body d-flex flex-column">
        <p className="card-text text-center">{marca} {modelo}</p>
        {/* <p className="card-text"></p> */}
        <p className="card-text text-center">{ano}</p>
        <p className="card-text text-center">{descripcion}</p>
        <p className="card-text text-center">${precio}</p>
        <i class="bi bi-bag-plus text-center symbols" onClick={handleClick}></i>
        </div>
    </div>
  )
}

export default NbooksCard

