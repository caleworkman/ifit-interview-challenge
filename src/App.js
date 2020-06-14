import React from 'react';
import ProductNav from "./components/productnav/ProductNav.js";
import MainNav from "./components/mainnav/MainNav.js";
import Hero from "./components/hero/Hero.js";
import Slider from "./components/reviews/Slider.js";
import Library from "./components/library/Library.js";
import Equipment from "./components/equipment/Equipment.js";
import Footer from "./components/footer/Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductNav />
      <MainNav />
      <Hero />
      <Slider />
      <Library />
      <Equipment />
      <Footer />
    </div>
  );
}

export default App;
