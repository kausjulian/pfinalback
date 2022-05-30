import React, { useContext } from 'react'
import './Navbar.css'
import { ComerceContext } from '../../store/ComerceContext'

const Navbar = () => {

  
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light shadow-lg">
            <div className="container-fluid">
            <li className="nav-item dropdown d-flex align-items-center navstyle">
            Productos
                <a className="nav-link dropdown-toggle navstyle items" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item navstyle items" href="#">Notebooks</a></li>
                        <li><a className="dropdown-item navstyle items" href="#">Tablets</a></li>
                        <li><a className="dropdown-item navstyle items" href="#">Celulares</a></li>
                    </ul>
            </li>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square me-2 symbols" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart ms-2 symbols" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        
                    </div>
                
                
                <a className="navbar-brand navstyle  " href="#">Tech Center</a>
                    {/* <button className="navbar-toggler navstyle"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                    </button> */}
  
                 
              
            </div>
           
        </nav>
    </>
  )
}

export default Navbar

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light text-light">
            <div className="container-fluid">
                <a className="navbar-brand navstyle " href="#">Tech Center</a>
                    <button className="navbar-toggler navstyle"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                    </button>
            <div className="collapse navbar-collapse navstyle" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active navstyle" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navstyle" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navstyle" href="#">Pricing</a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle navstyle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                        </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item navstyle" href="#">Notebooks</a></li>
                                <li><a className="dropdown-item navstyle" href="#">Tablets</a></li>
                                <li><a className="dropdown-item navstyle" href="#">Celulares</a></li>
                            </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav> */}