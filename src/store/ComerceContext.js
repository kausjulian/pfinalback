import { createContext, useState } from "react";


export const ComerceContext = createContext(null)

const ComerceProvider = ({children})=>{

//userslist

const [users, setUsers] = useState({
    name:'',
    lastname:'',
    email:'',
    password:'',
    password2:''
  })


    return(
        <ComerceContext.Provider value={{users,setUsers}}>
            {children}
        </ComerceContext.Provider>
    )
}

export default ComerceProvider


