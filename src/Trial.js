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
  
    return(
      <div className="app">
      <div className="search">
        <input value={latitude} onChange={event=>setLatitude(event.target.value)} onKeyPress={searchWeather} placeholder="Enter latitude" />
        <input value={longitude} onChange={event=>setLongitude(event.target.value)} onKeyPress={searchWeather}placeholder="Enter longitude"/>
      </div>
      <div className="cweather">
        <div className="temp">
        Temperature: {data.current_weather? <p>{data.current_weather.temperature}</p>:null}
        </div>
        <div className="wspeed">
        WindSpeed: {data.current_weather? <p>{data.current_weather.windspeed}</p> :null}
        </div>
        <div className="cloud">
          CloudCover: {data.hourly? <p>{data.hourly.cloudcover_mid[0]}</p>:null}
        </div>
        <div className="humidity">
          Relative Humidity: {data.hourly? <p>{data.hourly.relativehumidity_2m[0]}</p>:null} 
        </div>
      </div>
      </div>
    )
  }

export default Trial