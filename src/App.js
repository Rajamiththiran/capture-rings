import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Contactpage } from './pages/Contactpage';
import { AboutUs } from './pages/AboutUs';
import { Blog } from './pages/Blog';
import { EventBooking } from './pages/EventBooking';
import { Gallery } from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<EventBooking />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
