import axios from 'axios'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { ComerceContext } from '../../store/ComerceContext'
import { BASE_URL } from '../../utils'

const Register = () => {
    const{users,setUsers} = useContext(ComerceContext)
    const {name,lastname,email,password,password2} = users

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name == '' || lastname =='' || email=='' || password=='' || password2=='') 
        return toast.error('campos vacios')
        if(password.length < 8) toast.error('El password debe contener como mínimo 8 dígitos')
          if(password!== password2)
          return toast.error('Las contraseñas no coinciden')
        console.log('formulario enviado')
        const data = {
            name,
            lastname,
            email,
            password,
            status:1,
            type:'client'
        }
        // console.log(data)
        axios.post(`${BASE_URL}/login/register`,data)
        .then(response=>{
            console.log(response.data)
            alert(response.data.message)
        })
        .catch(error=>console.log(error))
    }

    const handleInputChange= ({target})=>{
        
        setUsers({
            ...users,
                [target.name]:target.value,
                [target.lastname]:target.value,
                [target.email]:target.value,
                [target.password]:target.value,
                [target.password2]:target.value,
    })
    }

    // console.log(users)
  
return (
    <div className='pt-5 bg-white'>
            <h3 className='m-5 text-center'>Sign in</h3>
                <form className=' row d-flex justify-content-center formstyle' id='myForm' onSubmit={handleSubmit}>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50 " id="floatingInput" placeholder="Name" name='name' value={name} onChange={handleInputChange}/>
                   
                    </div>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50" id="floatingInput2" placeholder="Lastname" name='lastname' value={lastname}  onChange={handleInputChange}/>
                     
                    </div>
                    
                    
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' value={email}  onChange={handleInputChange}/>
                       
                    </div>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" name='password' value={password}  onChange={handleInputChange}/>
                    </div>
                    
                    <div className="row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword2" placeholder="Password" name='password2' value={password2} onChange={handleInputChange}/>
                    </div>
                    {/* <p className={passmatch == true ? 'text-danger':'d-none'}>Passwords Don't Match!</p> */}
                         <button type="submit" className="btn btn-outline-primary submitbuton w-25">Submit</button>
                    
    
                </form>

    </div>
  )
}

export default Register