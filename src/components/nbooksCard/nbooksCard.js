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
        <div className="card-body">
        <p className="card-text">{marca}</p>
        <p className="card-text">{modelo}</p>
        <p className="card-text">{descripcion}</p>
        <i class="bi bi-bag-plus text-center" onClick={handleClick}></i>
        </div>
    </div>
  )
}

export default NbooksCard

