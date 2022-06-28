import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

const[loged, setLoged] = useState(JSON.parse(localStorage.getItem('loged')) ?? {})

useEffect(() => {
    localStorage.setItem('loged', JSON.stringify(loged))
  },[loged])
//usuario logeado

const[userloged,setUserloged] = useState({
    email:'',
    password:''
})

//notebooks lista

const[ nbooks, setNbooks ]= useState({
  nomarchivo:'',
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
    const data = await res.data.data
    // console.log(data)
    setNbooks(data);
    }


//delete notebooks
const [delNbooks, setdelNbooks] = useState({
    id:''
})
///carrito

 const[total, setTotal] = useState(0)
const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favoritos')) ?? [])

const addFav = (producto)=>{
    producto.cantidad = 1
    if(loged.name=== '' ||loged.name === undefined) return toast.error('Debes ingresar para agregar al carrito')
    const already = favs.find(fav=>fav.id===producto.id)
    if(already) return toast.error(`El producto ${producto.marca} ${producto.modelo} ya está en tu carrito`)
    setFavs([...favs,producto])
    toast.success(`El producto ${producto.marca} ${producto.modelo} se agregó tu carrito`)
    ///aca falta swal de confirmacion


}

useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favs))
  },[favs])

  //suma del carrito
//   const modificarCant = (cant,precio,id)=>{
//     let producto =  favs.filter(fav=>fav.id===id)
//     producto[0].preciototal = Number(cant) * Number(precio)
//     producto[0].cantidad = Number(cant)
//     sumar()
//   console.log(favs)
// } 
  
  let suma = 0
  const sumar = ()=>{
    favs.map(fav=>(
      suma+=fav.preciototal ? fav.preciototal: fav.precio
    ))
    setTotal(suma)
    }
    
    useEffect(() => {
      sumar()
      }, [favs])

  //borrar del cariito

  const delFav = (id)=>{
      setFavs(favs.filter(fav=>(fav.id!=id)))
      sumar()
      toast.success('Producto eliminado de su carrito')
  }



    return(
        <ComerceContext.Provider value={{users,setUsers,nbooks,setNbooks,getNbooks,loged,setLoged,userloged,setUserloged,delNbooks, setdelNbooks,favs,setFavs,addFav,suma,sumar,delFav,total,setTotal}}>
            {children}
        </ComerceContext.Provider>
    )
}
export default ComerceProvider


