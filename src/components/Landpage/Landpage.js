import React from 'react'
import './Landpage.css'


const Landpage = () => {
  
  
    return (
        
        <div className='row d-flex justify-content-center landpage' >
          {/* <h1 className='text-center'>Landpage</h1> */}
          <img src={require('../../img/fondo.jpeg')} className="d-block img" alt="Macbook Air"/>
            <div className='d-flex justify-content-evenly mt-3 d-none d-md-flex' >
              <img src={require('../../img/simbolos/acer_600x.png')} className='img2' />
              <img src={require('../../img/simbolos/dell_600x.webp')} className='img2' />
              <img src={require('../../img/simbolos/hp_600x.webp')} className='img2' />
              <img src={require('../../img/simbolos/lenovo_600x.webp')} className='img2' />
              <img src={require('../../img/simbolos/msi.jpeg')}className='img2'  />
            </div>
        
        
        </div>



  )
}

export default Landpage