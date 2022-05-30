import { createContext, useState } from "react";


export const ComerceContext = createContext(null)

const ComerceProvider = ({children})=>{

// creacion de userslist

const [users, setUsers] = useState({
    name:'',
    lastname:'',
    email:'',
    password:'',
    password2:''
  })

//estado login

const[loged, setLoged] = useState(false)
//usuario logeado

const[userloged,setUserloged] = useState({
    email:'',
    password:''
})

//notebooks lista

const[ nbooks, setNbooks ]= useState({
    nombre:'',
    precio:'',
    stock:'',
    descripcion:'',
    imagen:'',
})


    return(
        <ComerceContext.Provider value={{users,setUsers,nbooks,setNbooks,loged,setLoged,userloged,setUserloged}}>
            {children}
        </ComerceContext.Provider>
    )
}

export default ComerceProvider


