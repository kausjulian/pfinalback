import React, { useContext } from 'react'
import './Navbar.css'
import { ComerceContext } from '../../store/ComerceContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light shadow">
            <div className="container-fluid">
            <li className="nav-item dropdown d-flex align-items-center navstyle">
            Productos
                <a className="nav-link dropdown-toggle navstyle items" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link to='/notebooks' className='navstyle'><a className="dropdown-item navstyle items" href="#">Notebooks</a></Link></li>
                        <li><a className="dropdown-item navstyle items" href="#">Tablets</a></li>
                        <li><a className="dropdown-item navstyle items" href="#">Celulares</a></li>
                    </ul>
            </li>
                    <div >
                   <Link className='bi bi-person-circle  me-2 symbols' to ='/Profile'> </Link>
                    <Link className="bi bi-bag ms-2 symbols" to='./Cart'></Link>
                    </div>

                    <Link className="navstyle" to ='/'> <a className="navbar-brand navstyle  " href="#">Tech Center</a></Link>
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