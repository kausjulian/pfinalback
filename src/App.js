import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { ComerceContext } from './store/ComerceContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Landpage from './components/Landpage/Landpage';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Nbooks from './components/Nbooks/Nbooks';
import Cart from './components/Cart';
import Dashboard2 from './components/Dashboard2/Dashboard2';
import { Toaster } from 'react-hot-toast';
import Error from './components/Error';


function App() {
  const {loged} = useContext(ComerceContext)
  // console.log(loged)
  
  return (
    <div className="bg-white">
        <Router>
        <Toaster />
          <Navbar/>
          {/* <Profile/> */}
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <Dashboard/> */}
          {/* <Cart/> */}
          {/* <Dashboard2/> */}
          
          {/* <Nbooks/> */}
            <Routes>
              <Route path='/' element= {<Landpage/>}/>              
              <Route path='/register' element= {<Register/>}/> 
              <Route path='/notebooks' element= {<Nbooks/>}/>
              <Route path='/admin' element= {loged.type ==='admin' ?<Dashboard/>:<Error/>}/> 
              <Route path='/profile' element= {loged.name=== '' ||loged.name === undefined ? <Login/>:<Profile/>}/> 
              <Route path='cart' element={<Cart/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
        </Router>
 
    </div>
  );
}

export default App;
