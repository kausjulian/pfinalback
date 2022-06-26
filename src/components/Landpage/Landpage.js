import React from 'react'
import './Landpage.css'


const Landpage = () => {
  
  
    return (
        
        <div className='row d-flex justify-content-center landpage' >
          {/* <h1 className='text-center'>Landpage</h1> */}
          <img src={require('../../img/fondo.jpeg')} className="d-block img" alt="Fondo"/>

          <h2 className='text-center mt-5 mb-5'>Ofertas!</h2>
            
          <div id="carouselExampleControls" className="carousel slide w-50 m-3 bg-white" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require('../../img/nbooks/AsusZenBookUX425EA.webp')} className="d-block w-100 imgslider" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={require('../../img/nbooks/macbookair.jpeg')} className="d-block w-100  imgslider" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={require('../../img/nbooks/Gadnicglow.webp')} className="d-block w-100  imgslider" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="text-primary">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="text-primary">Siguiente</span>
            </button>
          </div>
            
            <div className='d-flex justify-content-evenly mt-3 d-none d-md-flex mt-5' >
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