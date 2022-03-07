import './App.css';

// array of month names since getMonth() gives the number
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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

const gatherEntries = (date) => {
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

function Calendar(props) {
  return (
      <div id="calendar">
        <div id="interval_selection">
          <button id="decrement_time" className="change_interval" onClick={() => {console.log('decrement');}}>(</button>
          <h3>{months[props.date.getMonth()]}, {props.date.getFullYear()}</h3>
          <button id="decrement_time" className="change_interval" onClick={() => {console.log('increment');}}>)</button>
        </div>
        <div id="interval_display">
            {gatherEntries(props.date).map((entry) => (
            <div>
                <p>{entry.id}</p>
                <p>{entry.incident}</p>
            </div>
            ))}
        </div>
      </div>
  );
}

export default Calendar;