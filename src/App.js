import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import ShopList from './Components/ShopList'
import "./style.css";

function App() {
  return (
    <div class="container">
      <Navbar/>
      <ShopList/>
    </div>
  );
}

export default App;
