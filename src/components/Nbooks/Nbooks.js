import React, { useContext, useEffect } from 'react'
import './Nbooks.css'
import { ComerceContext } from '../../store/ComerceContext'
import NbooksCard from '../NbooksCard'


const Nbooks = () => {
  const{nbooks,setNbooks,getNbooks} = useContext(ComerceContext)
  
  useEffect(() => {
    getNbooks()
   
  }, [])

  console.log(nbooks)
  
  
  
  
  return (
    
    <div className='row d-flex justify-content-evenly nbooks'>
        <h1 className='text-center mb-5'>Notebooks</h1>
        {nbooks.map(nbook=>(
          <NbooksCard key={nbook.id} {...nbook}   />
        ))}
        
    
    
  
    </div>
  
  
  
  
  )
}

export default Nbooks