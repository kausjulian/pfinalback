import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ComerceContext } from '../../store/ComerceContext'
import './Profile.css'



const Profile = () => {
    const {loged,setLoged} = useContext(ComerceContext)
    const{name,lastname,email} = loged
    const navigate = useNavigate()
  
    const handleClick = ()=>{
        setLoged({})
        navigate('/')
        toast('Gracias por visitar Tech Center', {
          icon: '👋🏻',
        });
    }
  
    return (
    <div className='row d-flex justify-content-center profile'>
        <h1 className='text-center mt-5'>Profile</h1>
        <img src={require('../../img/profilepicture.jpeg')} className="d-block imagen" alt="Macbook Air"/>
        <p className='text-center mt-5'>{name} {lastname}</p>
        {/* <p className='text-center mt-1'></p> */}
        <p className='text-center mt-1'>{email}</p>
        <button className="btn btn-outline-primary boton" onClick={handleClick}>Logout</button>

        
    </div>
  )
}

export default Profile