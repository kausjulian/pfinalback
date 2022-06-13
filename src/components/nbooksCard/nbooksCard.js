import React from 'react'
import './NbooksCard.css'

const NbooksCard = ({archivo,marca,modelo,precio,ano,descripcion}) => {
  return (
    <div className="card cardstyle mb-4 shadow" >
        <img src={require(`../../img/nbooks/${archivo}`)} className="card-img-top mt-3 imagen" alt={marca}/>
        <div className="card-body">
        <p className="card-text">{marca}</p>
        <p className="card-text">{modelo}</p>

            <p className="card-text">{descripcion}</p>
        </div>
    </div>
  )
}

export default NbooksCard

