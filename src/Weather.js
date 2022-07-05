import React, { Component, setState } from "react";

class Weather extends Component{
  
  constructor(props){
    super(props)
    this.state={
      latitude:undefined,
      longitude:undefined,
      current_weather:undefined,
      
 
    }
  }
  componentDidMount(){
   
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=-1.40&longitude=36.68&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&daily=sunrise,sunset&current_weather=true&timezone=Africa%2FNairobi`)
    .then(res=>res.json())
    .then(json =>{
      this.setState({
        isLoaded: true,
        items: json,  
        
      })
      console.log(json)
    })
    
  }
  render(){
    var{isLoaded,items}=this.state;
    if (!isLoaded) {
      return<div>
        Loading ....
      </div>;
    }
    else{
return(
  <div className="weather">
    <div className='Container'>
    <div className='row'>
      <div className='loc'>
        <p>latitude:{items.latitude} longitude:{items.longitude}</p>
      </div>
      <div className='current'>
        <h4>Current Weather</h4>
        <li>{items.current_weather.temperature}
        </li>
        <li>{items.current_weather.windspeed}</li>
      </div>
      </div>
      <div className='bottom'>
      <div className='temp'>
       <h4>Temperature</h4>
       <li>{items.hourly.temperature_2m}</li>
      </div>
      <div className='wind'>
        <h4>wind speed</h4>
        <li>{items.hourly.windspeed_120m}</li>
      </div>
      <div className='humidity'>
        <h4>Humidity</h4>
        <li>{items.hourly.relativehumidity_2m}</li>
      </div>
      <div className='cloud'>
        <h4>Cloud</h4>
        <li>{items.hourly.cloudcover_mid}</li>
      </div>
 
      </div>
  </div>
  </div>
)
    }
  }
}
export default Weather