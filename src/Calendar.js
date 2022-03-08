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

// creates an entry for every day in a month
const gatherEntries = (date) => {
  const entries = [];
  // supposed to query to db for all necessary incidents based on date 

  // create en entry object for every day in a month
  for(var i = 0; i < ( new Date(date.getFullYear(), date.getMonth()+1, 0).getDate() ); i++) {
    const temp = new entry(i+1,date,'bobby does hobby ' + i);
    entries.push(temp);
  }
  // entries now holds objects for every day to be displayed
  console.log(entries);
  return entries;
}

function Calendar(props) {
  return (
      <div id="calendar">
        <nav id="interval_selection">
          <button id="decrement_time" className="change_interval" onClick={() => {console.log('decrement');}}>(</button>
          <h3>{months[props.date.getMonth()]}, {props.date.getFullYear()}</h3>
          <button id="decrement_time" className="change_interval" onClick={() => {console.log('increment');}}>)</button>
        </nav>
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