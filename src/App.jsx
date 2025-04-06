import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';  // Importa el Header
import Login from './pages/login';
import './App.css'

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes> {/* El header estará en todas las páginas */}
    </Router>
  );
}

export default App;
