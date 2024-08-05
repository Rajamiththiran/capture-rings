import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Contactpage } from './pages/Contactpage';
import { AboutUs } from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
