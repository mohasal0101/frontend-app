import React from 'react';
import './style/App.css';
import { Route, Routes } from 'react-router-dom'
import Register  from './components/RegisterForm';
import Login  from './components/LoginForm';
import Home  from './components/HomePage';
import Deals  from './components/Deals';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/deals' element={<Deals />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;