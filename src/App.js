import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import ComerceProvider from './store/ComerceContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Landpage from './components/Landpage/Landpage';

function App() {
  return (
    <div className="bg-white">
      <ComerceProvider>
        <Navbar/>
        <Landpage/>
        {/* <Register/> */}
        {/* <Dashboard/> */}
        {/* <Login/> */}
      </ComerceProvider>
    </div>
  );
}

export default App;
