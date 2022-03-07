import './App.css';
import React, { useState } from 'react';

// creates a date for the current moment

// array of month names since getMonth() gives the number
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
this.state = {
    date: new Date().toLocaleString()
  };

  console.log(this.state.date);

// this is to make objects to replicate a db object
class entry {
  constructor (id, date, incident) {
    // id should be how db finds it; so later i can have it create a new calendar for this id
    this.id = id;
    // should be the date of when this incident occurs
    this.date = date;
    // description / name for calender viewing purposes
    this.incident = incident;
  }
}

const conglomerateEntries = (date) => {
  const entries = [];
  // supposed to query to db for all necessary incidents based on date 

  // create en entry object for every day in a month
  for(var i = 0; i < 28; i++) {
    const temp = new entry(i,date,'bobby does hobby' + i);
    entries.push(temp);
  }
  // add the rest of the days for everyone outside of feb.
  if(date.getMonth() === 0 || date.getMonth() === 2 || date.getMonth() === 4 || date.getMonth() === 6 || date.getMonth() === 7 || date.getMonth() === 9 || date.getMonth() === 11) {
    let temp = new entry(29,date,'bobby does hobby' + 29);
    entries.push(temp);
    temp = new entry(30,date,'bobby does hobby' + 30);
    entries.push(temp);
    temp = new entry(31,date,'bobby does hobby' + 31);
    entries.push(temp);
  } else if(date.getMonth() !== 2) {
    let temp = new entry(29,date,'bobby does hobby' + 29);
    entries.push(temp);
    temp = new entry(30,date,'bobby does hobby' + 30);
    entries.push(temp);
  }
  // entries now holds objects for every day to be displayed
  console.log(entries);
  return entries;
}

const displayInterval = (date) => {
  let disp = conglomerateEntries(date);

  return (
<div id="interval_display">
    {disp.map((entry) => (
      <div>
        <p>{entry.id}</p>
        <p>{entry.incident}</p>
      </div>
    ))}
  </div>);
};

function App() {
  

  return (
    <div className="App">
      <h1 className="App-logo">beep beep</h1>
      <div id="calendar">
        <div id="interval_selection">
          <button id="decrement_time" className="change_interval" onClick={() => {console.log('decrement'); this.setState({ date: this.state.date.setMonth(this.state.getMonth()-1) })}}>(</button>
          <h3>{months[this.state.date.getMonth()]}, {this.state.date.getFullYear}</h3>
          <button id="decrement_time" className="change_interval" onClick={() => {console.log('increment'); this.setState({date: this.state.date.setMonth(this.state.getMonth()+1) })}}>)</button>
        </div>
        {displayInterval(this.state.date)}
      </div>
    </div>
  );
}

export default App;
 