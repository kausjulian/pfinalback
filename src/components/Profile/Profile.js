import React, { useContext } from 'react'
import { ComerceContext } from '../../store/ComerceContext'
import './Profile.css'



const Profile = () => {
    const {loged,setLoged} = useContext(ComerceContext)
    const{name,lastname,email} = loged
  
  
    return (
    <div className='row d-flex justify-content-center profile'>
        <h1 className='text-center mt-5'>Profile</h1>
        <img src={require('../../img/profilepicture.jpeg')} className="d-block imagen" alt="Macbook Air"/>
        <p className='text-center mt-5'>{name} {lastname}</p>
        {/* <p className='text-center mt-1'></p> */}
        <p className='text-center mt-1'>{email}</p>

        
    </div>
  )
}

export default Profile