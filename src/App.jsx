import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';  // Importa el Header
import Footer from './components/footer';  // Importa el Footer

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         {/* Aquí se agregan las rutas según vayas creando las páginas */}
         <Route /* path="/carpeta" element{<nombreElemento/>} */ />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
