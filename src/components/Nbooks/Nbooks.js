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
        <h1 className='text-center  title'>Notebooks</h1>
        {nbooks.length > 0 ?
        nbooks.map(nbook=>(
          <NbooksCard key={nbook.id} {...nbook} nbook={nbook}  />
        ))
          :
          <div className='loading'>
          <div class="spinner-border text-primary mb-3" role="status">
               <span class="visually-hidden">Loading...</span>
           </div>
      Loading...
      </div>
      }
        
    
    
  
    </div>
  
  
  
  
  )
}

export default Nbooks