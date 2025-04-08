import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';  // Importa el Header
import Footer from './components/footer';
import Login from './pages/login';
import './App.css'

function App() {
  return (
    <Router>
      <div className='app-wrapper'>{/* clase para el footer */}
        <Header /> 
          <main className='main-content'>{/* hace que el footer se mantenga abajo */}
            <Routes>
              <Route path='/login' element={<Login />}/>
            </Routes> {/* El header estará en todas las páginas */}
          </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;