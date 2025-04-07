import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';  // Importa el Header
import Footer from './components/footer'; // Importar el footer
import './App.css'

function App() {
  return (
    <Router>
      <Header />  {/* El header estará en todas las páginas */}
      <Footer />
    </Router>
  );
}



export default App;
