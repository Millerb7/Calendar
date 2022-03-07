import './App.css';
import React, { useState } from 'react';
import Calendar from './Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-logo">beep beep</h1>
      <Calendar date={new Date()}/>
    </div>
  );
}

export default App;
 