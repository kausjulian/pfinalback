import React from 'react'




const Login = () => {
  
  
    return (
    <div className='row d-flex justify-content-center'>
         <form className=' row d-flex justify-content-center formstyle' >
            <div class=" row d-flex justify-content-center mb-3">
                <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' />
            </div>
                <div className=" row d-flex justify-content-center mb-3">
                    <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" />
                </div>
                    <button type="button" class="btn btn-outline-success loginbuton w-25">Submit</button>
         </form>
 </div>
  )
}

export default Login