import React from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './Time';
import date from 'date-and-time';

function App() {
  const now = new Date();

  const later = date.addHours(now, -1);
  return (
    <div className="App-header">
      <div className="left">
        <h1>
          Pacific Standard Time:
        </h1>
        <h2>
          {date.format(now, 'hh:mm A')}
        </h2>
      </div>
      <div className="right">
        <h1>
          Safwaan Standard Time:
        </h1>
        <h2>
          {date.format(later, 'hh:mm A')}
        </h2>
      </div>
    </div>
  );
}
export default App;
