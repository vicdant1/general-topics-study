import React from 'react';

import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import {Cta, Brand, Navbar} from './components'
import './App.css'
import './index.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
