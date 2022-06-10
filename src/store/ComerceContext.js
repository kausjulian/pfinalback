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

const[loged, setLoged] = useState({
    name:'',
    lastname:'',
    email:'',
})
//usuario logeado

const[userloged,setUserloged] = useState({
    email:'',
    password:''
})

//notebooks lista

const[ nbooks, setNbooks ]= useState({
    archivo:'',
    marca:'',
    modelo:'',
    precio:'',
    ano:'',
    descripcion:'',
    stock:''
})

//delete notebooks
const [delNbooks, setdelNbooks] = useState({
    id:''
})


    return(
        <ComerceContext.Provider value={{users,setUsers,nbooks,setNbooks,loged,setLoged,userloged,setUserloged,delNbooks, setdelNbooks}}>
            {children}
        </ComerceContext.Provider>
    )
}

export default ComerceProvider


