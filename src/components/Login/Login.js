import React, { useContext, useState } from 'react'
import './Login.css'
import { ComerceContext } from '../../store/ComerceContext'
import { BASE_URL } from '../../utils'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const {loged,setLoged,userloged,setUserloged} = useContext(ComerceContext)
  const {email,password} = userloged
  const navigate = useNavigate()
  const [loading,setLoading]= useState(false)
    
  const handlesubmit = (e)=>{
        e.preventDefault()
        if(email=='' || password=='')
        return alert('Por favor complete todos los cámpos')
        setLoading(true)
        console.log(email,password)
        const data = {
           email,
           password
        }
        console.log(data)
        axios.post(`${BASE_URL}/login`,data)
        .then(response=>{
            console.log(response.data)
            setLoged({
                name:response.data.name,
                lastname:response.data.lastname,
                email:response.data.email
            })
            setLoading(false)
            navigate('/dashboard')
        })
        .catch(error=>console.log(error))
        
    }

    return (
   <>
   {loading ? 
   <div className='loading'>
       <div class="spinner-border text-primary mb-3" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
   Loading...
   </div>:''

   }
        <div className='bg-white login'>
                <form className=' row d-flex justify-content-center' id='myForm' onSubmit={handlesubmit}>
                    <h1 className='text-center mt-5 mb-5'>Login</h1>
                    <div className="d-flex justify-content-center mb-3">
                        <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' value={email} onChange={e=>setUserloged({...userloged,email:e.target.value})} />
                    </div>
                        <div className="d-flex justify-content-center mb-3">
                            <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" name='password' value={password}  onChange={e=>setUserloged({...userloged,password:e.target.value})}/>
                        </div>
                            <button type="submit" className="btn btn-outline-primary w-25 mt-4">Submit</button>
                </form>
        </div>
 </>
  )
}

export default Login