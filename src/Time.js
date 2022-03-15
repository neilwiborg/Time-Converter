import React from 'react';
import logo from './logo.svg';
import './App.css';

class Time extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Current Time : {this.state.curTime}</p>
      </div>
    );
  }
}

export default Time;