import React, { useContext } from 'react'
import { ComerceContext } from '../../store/ComerceContext'

const Register = () => {
    const{users,setUsers} = useContext(ComerceContext)
    const {name,lastname,email,password,password2} = users

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name == '' || lastname =='' || email=='' || password=='' ||password2=='') 
        return alert('campos vacios')
          if(password!== password2)
          return alert('Las contraseñas no coinciden')
        console.log('formulario enviado')
        console.log(users)
        name=''
  
  
    }

    const handleInputChange= ({target})=>{
        
        setUsers({
            ...users,
                [target.name]:[target.value],
                [target.lastname]:[target.value],
                [target.email]:[target.value],
                [target.password]:[target.value],
                [target.password2]:[target.value],
    })
      }
  
return (
    <div>
            <h3 className='m-5'>Sign in</h3>
                <form className=' row d-flex justify-content-center formstyle' id='myForm' onSubmit={handleSubmit}>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50 " id="floatingInput" placeholder="Name" name='name' value={name} onChange={handleInputChange}/>
                   
                    </div>
                    <div class=" row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50" id="floatingInput2" placeholder="Lastname"name='lastname' value={lastname}  onChange={handleInputChange}/>
                     
                    </div>
                    
                    
                    <div class=" row d-flex justify-content-center mb-3">
                        <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' value={email}  onChange={handleInputChange}/>
                       
                    </div>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" name='password' value={password}  onChange={handleInputChange}/>
                    </div>
                    
                    <div className="row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword2" placeholder="Password" name='password2' value={password2} onChange={handleInputChange}/>
                    </div>
                    {/* <p className={passmatch == true ? 'text-danger':'d-none'}>Passwords Don't Match!</p> */}
                         <button type="submit" class="btn btn-outline-success submitbuton w-25">Submit</button>
                    
    
                </form>

    </div>
  )
}

export default Register