import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Welcome from './pages/Welcome'

function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/calculator' element={<Calculator />}/>
      </Routes>
    </Router>
  );
}

export default App;
