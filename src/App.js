import React from 'react';
import ProductNav from "./components/productnav/ProductNav.js";
import MainNav from "./components/mainnav/MainNav.js";
import Hero from "./components/hero/Hero.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductNav />
      <MainNav />
      <Hero />
    </div>
  );
}

export default App;
