import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ComerceContext } from '../../store/ComerceContext'
import Compras from '../Compras/Compras'
import './Profile.css'



const Profile = () => {
    const {loged,setLoged,compras} = useContext(ComerceContext)
    const{name,lastname,email} = loged
    const navigate = useNavigate()
    const{favs,total} = compras

    console.log(favs)
  
    const handleClick = ()=>{
        setLoged({})
        navigate('/')
        toast('Gracias por visitar Tech Center', {
          icon: '👋🏻',
        });
    }
  
    return (
    <div className='row d-flex justify-content-center profile mb-3'>
        <h1 className='text-center mt-5'>Profile</h1>
        <img src={require('../../img/profilepicture.jpeg')} className="d-block imagen" alt="Macbook Air"/>
        <p className='text-center mt-5'>{name} {lastname}</p>
        {/* <p className='text-center mt-1'></p> */}
        <p className='text-center mt-1'>{email}</p>
        <button className="btn btn-outline-primary submitbuton" onClick={handleClick}>Logout</button>

        {favs ? <Compras/>:
        <></>}

       {/* <h3 className='text-center mt-5 mb-3'>Tus compras</h3>
          <div className='d-flex justify-content-evenly'>
            {favs.map(fav=>(
              //  <div className='d-flex'>
               <div className='row  mt-4 p-2 shadow-sm' key={fav.id}>
                    <div className='col-3 col-xs-3  '>{fav.marca}</div>
                    <div className='col-3 col-xs-3 '>{fav.modelo}</div>
                    <div  className='col-3 col-xs-3 '> {fav.cantidad}</div>
                    <div className='col-2 col-xs-2'>{fav.precio}</div>
               </div>

            ))

            }
            
          </div> */}

        
    </div>
  )
}

export default Profile