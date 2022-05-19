import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import ComerceProvider from './store/ComerceContext';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <ComerceProvider>
        <Navbar/>
        {/* <Register/> */}
        <Login/>
      </ComerceProvider>
    </div>
  );
}

export default App;
