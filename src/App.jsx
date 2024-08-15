import React from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Astros from './components/Astros/Astros.jsx';
import APOD from './components/Apod/Apod.jsx';
import About from './components/About/About.jsx';
import './App.css';

import { Routes, Route } from "react-router-dom";

function App() {

const links = [
      { id: 1, href: "/", text: "Home" },
      { id: 2, href: "/astros", text: "Astros" },
      { id: 3, href: "/apod", text: "APOD" },
      { id: 4, href: "/about", text: "About"}
];

return (
  <div className= "home-container">
    <Navbar links={links} />
      <Routes>
        <Route path="/" element={<h1 class="title">Space App</h1>} />
        <Route path="/astros" element={<Astros />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/about" element={<About />} />
    </Routes>
   </div>
  );
}

export default App;
