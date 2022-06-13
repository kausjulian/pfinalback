import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils";


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
//peticion de la api
const getNbooks = async()=>{
    const res = await axios.get(`${BASE_URL}/notebooks`);
    setNbooks(res.data.data);
    

}

useEffect(() => {
    getNbooks()
    
   
  }, [])
  console.log(nbooks)



//delete notebooks
const [delNbooks, setdelNbooks] = useState({
    id:''
})


    return(
        <ComerceContext.Provider value={{users,setUsers,nbooks,setNbooks,getNbooks,loged,setLoged,userloged,setUserloged,delNbooks, setdelNbooks}}>
            {children}
        </ComerceContext.Provider>
    )
}

export default ComerceProvider


