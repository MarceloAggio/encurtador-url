import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// Importações das Paginas

import BuscarUrl from './pages/buscarUrl/BuscarUrl'
import Home from './pages/home/home.jsx'

function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/buscarurl' element={<BuscarUrl />} />
            </Routes>
        </Router>
    )
}

export default RouterApp;