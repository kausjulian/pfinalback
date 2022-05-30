import React, { useContext } from 'react'
import './Login.css'
import { ComerceContext } from '../../store/ComerceContext'


const Login = () => {
  const {loged,setLoged,userloged,setUserloged} = useContext(ComerceContext)
  const {email,password} = userloged
    
  const handlesubmit = (e)=>{
        e.preventDefault()
        if(email=='' || password=='')
        return alert('Por favor complete todos los cámpos')
        setLoged(true)
        console.log(email,password)
    }
  const handleInputChange = ({target})=>{
      setUserloged({...userloged,
          [target.email]:target.value,
          [target.password]:target.value
      })
      
  }
  console.log(userloged)
    return (
    <div className=''>
         <form className='' id='myForm' onSubmit={handlesubmit}>
            <div className="d-flex justify-content-center mb-3">
                <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' value={email} onChange={handleInputChange} />
            </div>
                <div className="d-flex justify-content-center mb-3">
                    <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" name='password' value={password}  onChange={handleInputChange}/>
                </div>
                    <button type="button" className="btn btn-outline-success loginbuton ">Submit</button>
         </form>
 </div>
  )
}

export default Login