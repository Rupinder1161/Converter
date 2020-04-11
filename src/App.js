import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weight from './components/Weight'
import Currency from './components/Currency'

function App() {
  return (
    <div className="MainDiv" >
      <Weight />
      <Currency style={{display:'block'}}/>
    </div>
  );
}

export default App;
