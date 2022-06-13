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


function App() {
  const {loged} = useContext(ComerceContext)
  console.log(loged)
  
  return (
    <div className="bg-white">

        <Router>
          <Navbar/>
          {/* <Profile/> */}
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <Dashboard/> */}
          
          {/* <Nbooks/> */}
            <Routes>
              <Route path='/' element= {<Landpage/>}/>              
              <Route path='/register' element= {<Register/>}/> 
              <Route path='/notebooks' element= {<Nbooks/>}/>
              <Route path='/dashboard' element= {<Dashboard/>}/> 
              <Route path='/profile' element= {loged.name=== '' ? <Login/>:<Profile/>}/> 
            </Routes>
        </Router>
 
    </div>
  );
}

export default App;
