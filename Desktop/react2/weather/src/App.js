import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import DateCom from './components/DateCom'






function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState(' ')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=84a00489cb64bbde713845ada265ef73&units=metric`;


  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data)
    })

    setLocation('')
  }
  return (
    <div className='App'>


     




      <div className='container d-flex flex-column'>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Your City Name" aria-label="Enter Your City Name" aria-describedby="button-addon2"
          value={location}
          onChange={event => setLocation(event.target.value)} />
        <button className="btn btn-danger" type="button" id="button-addon2"
          disabled={!location} onClick={searchLocation}>Search</button>
      </div>
        <div className="cityName ">

          <h1>{data.name}</h1>
        </div>
        <div className="container d-flex flex-column mb-5">


          <div className='tempData d-flex flex-row '>
            <div className=" temp">

              {data.main ? data.main.temp.toFixed() : null}

            </div>
            <div className='tempUnit m-auto'>
              <p>°C</p>
              <p>{data.weather ? data.weather[0].main : null}</p>
            </div>
          </div>

        </div>
        <div className='date'>{<DateCom />}</div>

        <div className="max-min justify-content-around w-100 p-2 d-flex flex-row mb-4 mt-4 m-auto">
          <div className="max">
            <p>Max. Temp.</p>
            <p>{data.main ? data.main.temp_max : null}°C</p>
          </div>
          <div className="min">
            <p>Min. Temp.</p>
            <p>{data.main ? data.main.temp_min : null}°C</p>
          </div>
        </div>

        <div className="weatherDetailsContainer d-flex flex-column mb-3 w-100">
          <div className="p-2 d-flex flex-row mb-3 justify-content-around">
            <div className='p-2'>
              <p className='font-size-small'>Feels Like</p>
              <p className='font-size-large'>{data.main ? data.main.feels_like.toFixed() : null}°C</p>
            </div>
            <div className='p-2'>
              <p className='font-size-small'>Humidity</p>
              <p className='font-size-large'>{data.main ? data.main.humidity : null}%</p>
            </div>
          </div>
          <div className="p-2 d-flex flex-row mb-3 justify-content-around">
            <div className='p-2'>
              <p className='font-size-small'>Wind Speed</p>
              <p className='font-size-large'>{data.wind ? data.wind.speed : null} km/h</p>
            </div>

            <div className='p-2'>
              <p className='font-size-small'>Desc.</p>
              <p className='font-size-large'>{data.weather ? data.weather[0].description : null}</p>
            </div>
          </div>
          <div className="p-2 d-flex flex-row mb-3 justify-content-around">
            <div className='p-2'>
              <p className='font-size-small'>Visibility</p>
              <p className='font-size-large'>{data.visibility / 1000}km</p>
            </div>
            <div className='p-2'>
              <p className='font-size-small'>Air Pressure</p>
              <p className='font-size-large'>{data.main ? data.main.pressure : null} hPa</p>
            </div>
          </div>



          <div className="footer">Made with Love by Ashu Jarodia</div>
        </div>
      </div>


    </div>

  );
}

export default App;
