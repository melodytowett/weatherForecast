import './App.css';
import axios from 'axios';
import {useState} from 'react'
function App() {
  const[data,setData]=useState({});
  // const[location,setLocation] = useState('');
  const [latitude, setLatitude]=useState(0);
  const [longitude,setLongitute]=useState(0);
  const [temperature,setTemperatue]=useState(0);
  const url = "https://api.open-meteo.com/v1/forecast?latitude=${}&longitude={}&hourly={}"
  const searchLocation = (event) =>{
    if (event.key==='Enter') {
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)

      })
    }
  }
  return (
    <div className="App">
  <h4>Hey Cytonn This is yout Weather application</h4>
  <div className='search'>
    <input value={latitude} onChange={event=>setLatitude(event.target.value)}
    onKeyPress={searchLocation} placeholder='Enter latitude' type="text"></input>
  </div>
  <div className='search'>
    <input value={longitude} onChange={event=>setLongitute(event.target.value)}
    onKeyPress={searchLocation} placeholder='Enter longitude' type="text"></input>
  </div>
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
