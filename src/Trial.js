import axios from "axios";
import React, { useState } from "react";
function Trial(){
  const[data,setData]=useState({})
  const[latitude,setLatitude] =useState('');
  const[longitude,setLongitude] = useState('');

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&daily=sunrise,sunset&current_weather=true&timezone=Africa%2FNairobi`
  const searchWeather = (event)=>{
    if (event.key==='Enter') {
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }
 
  }
  
    return(<>
      <div className="app">
      <div className="name">
      <h6>Enter latitude and longitude and know your area's weather Condition</h6>
    </div>
      <div className="search">
        <input value={latitude} onChange={(event)=>setLatitude(event.target.value)} onKeyPress={searchWeather} placeholder="Enter latitude" type="text"/>
        <input value={longitude} onChange={(event)=>setLongitude(event.target.value)} onKeyPress={searchWeather}placeholder="Enter longitude" type="text"/>
      </div>
      <h3>Weather Condition From sunrise to Sunset</h3>
      <div className="cweather">
        <div className="temp">
        Temperature: {data.current_weather? <p>{data.current_weather.temperature}°C</p>:null}
        </div>
        <div className="wspeed">
        WindSpeed: {data.current_weather? <p>{data.current_weather.windspeed} KMPH</p> :null}
        </div>
        <div className="cloud">
          CloudCover: {data.hourly? <p>{data.hourly.cloudcover_mid[0]}%</p>:null}
        </div>
        <div className="humidity">
          Relative Humidity: {data.hourly? <p>{data.hourly.relativehumidity_2m[0]}%</p>:null} 
        </div>
      </div>
      <h3>The Days Weather Condition</h3>
      <div className="Time">
        <div className="morning">
          <h2>Weather from Morning</h2>
          <table>
            <thead>
            <tr>
              <th>
                Time
              </th>
              <th>Temperature</th>
              <th>CloudCover</th>
              <th>Humidity</th>
              <th>WindSpeed</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
              {data.hourly? <p>{data.hourly.time[6]}</p>:null}
              </td>
              <td> {data.hourly? <p>{data.hourly.temperature_2m[6]}°C</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.cloudcover_mid[6]}%</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.relativehumidity_2m[6]}%</p>:null} </td>
              <td>{data.current_weather? <p>{data.current_weather.windspeed[6]} KMPH</p> :null}</td>
            </tr>
            <tr>
              <td>{data.hourly? <p>{data.hourly.time[7]}</p>:null}</td>
              <td> {data.hourly? <p>{data.hourly.temperature_2m[7]}°C</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.cloudcover_mid[7]}%</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.relativehumidity_2m[7]}%</p>:null} </td>
              <td>{data.current_weather? <p>{data.current_weather.windspeed[7]} KMPH</p> :null}</td>
            </tr>
            <tr>
              <td>{data.hourly? <p>{data.hourly.time[8]}</p>:null}</td>
              <td> {data.hourly? <p>{data.hourly.temperature_2m[8]}°C</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.cloudcover_mid[8]}%</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.relativehumidity_2m[8]}%</p>:null} </td>
              <td>{data.current_weather? <p>{data.current_weather.windspeed[8]} KMPH</p> :null}</td>
            </tr>
            <tr>
              <td>{data.hourly? <p>{data.hourly.time[9]}</p>:null}</td>
              <td> {data.hourly? <p>{data.hourly.temperature_2m[9]}°C</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.cloudcover_mid[9]}%</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.relativehumidity_2m[9]}%</p>:null} </td>
              <td>{data.current_weather? <p>{data.current_weather.windspeed[8]} KMPH</p> :null}</td>
            </tr>
            <tr>
              <td>{data.hourly? <p>{data.hourly.time[10]}</p>:null}</td>
              <td> {data.hourly? <p>{data.hourly.temperature_2m[10]}°C</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.cloudcover_mid[10]}%</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.relativehumidity_2m[10]}%</p>:null} </td>
              <td>{data.current_weather? <p>{data.current_weather.windspeed[10]} KMPH</p> :null}</td>
            </tr>
            <tr>
              <td>{data.hourly? <p>{data.hourly.time[11]}</p>:null}</td>
              <td> {data.hourly? <p>{data.hourly.temperature_2m[11]}°C</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.cloudcover_mid[11]}%</p>:null}</td>
              <td>{data.hourly? <p>{data.hourly.relativehumidity_2m[11]}%</p>:null} </td>
              <td>{data.current_weather? <p>{data.current_weather.windspeed[11]} KMPH</p> :null}</td>
            </tr>
            </tbody>
          </table>
        {data.hourly? <p>{data.hourly.time[11]}</p>:null} 
        </div>
        <div className="eve">
          <h2>Weather from Evening</h2>
        {data.hourly? <p>{data.hourly.time[12]}</p>:null} 
        {data.hourly? <p>{data.hourly.time[13]}</p>:null} 
        {data.hourly? <p>{data.hourly.time[14]}</p>:null} 
        {data.hourly? <p>{data.hourly.time[15]}</p>:null} 
        {data.hourly? <p>{data.hourly.time[16]}</p>:null} 
        {data.hourly? <p>{data.hourly.time[17]}</p>:null} 
        {data.hourly? <p>{data.hourly.time[18]}</p>:null}
        </div>  

      </div>
      </div>
      </>
    )
  }

export default Trial