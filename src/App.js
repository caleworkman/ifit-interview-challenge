import React from 'react';
import ProductNav from "./components/productnav/ProductNav.js";
import MainNav from "./components/mainnav/MainNav.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductNav />
      <MainNav />
    </div>
  );
}

export default App;
