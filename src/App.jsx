import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from '../componentes/Header';
import Footer from '../componentes/Footer';
import Produtos from '../componentes/Produtos';
import Contato from '../Componentes/Contato';
import Produto from '../Componentes/Produto';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />}></Route>
            <Route path="produto/:id" element={<Produto />}></Route>
            <Route path="Contato" element={<Contato />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
