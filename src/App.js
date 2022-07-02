import './App.css';
import axios from 'axios';
import {useState} from 'react'
function App() {
  // const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
  return (
    <div className="App">
  <h4>Hey Cytonn This is yout Weather application</h4>
  <div className='Container'>
    <div className='row'>
      <div className='loc'>
        <p>Nairobi</p>
      </div>
      <div className='current'>
        <h4>Current Weather</h4>
      </div>
      </div>
      <div className='bottom'>
      <div className='temp'>
        <h4>Temperature</h4>
        <p>20 degress</p>
      </div>
      <div className='wind'>
        <h4>wind speed</h4>
        <p>12 MPH</p>
      </div>
      <div className='humidity'>
        <h4>Humidity</h4>
        <p>20%</p>
      </div>
      <div className='cloud'>
        <h4>Cloud</h4>
      </div>
      <div className='hours'>
        <h4>Time</h4>
        <p>13.44 pm</p>
      </div>
      </div>
  </div>
    </div>
  );
}

export default App;
