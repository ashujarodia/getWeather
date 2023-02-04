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
     
    })

    setLocation('')
  }
  return (
    <div className='App'>
      <div className="input-button">

        <div className="form__group field ">
          <input type="text" className="form__field" placeholder="Enter Your City Name" name="name" id='name'
            value={location}
            onChange={event => setLocation(event.target.value)} />
          <label htmlFor="name" className="form__label">Enter Your City Name</label>

        </div>

        <button disabled={!location} onClick={searchLocation}>Search</button>
      </div>


      <div>
        <div className="contain">
          <div className="cityName">
            <h1>{data.name}</h1>
          </div>

          <div className='tempData'>
            <p className='temp'>
              {data.main ? data.main.temp.toFixed() : null}
            </p>
            <div className='tempUnit'>
              <p>°C</p>
              <p>{data.weather ? data.weather[0].main : null}</p>
            </div>
          </div>

        </div>
        <div className='date'>{<DateCom />}</div>

        <div className="max-min">
          <div className="max">
            <p>Max. Temp.</p>
            <p>{data.main ? data.main.temp_max : null}°C</p>
          </div>
          <div className="min">
            <p>Min. Temp.</p>
            <p>{data.main ? data.main.temp_min : null}°C</p>
          </div>
        </div>
        <div className="forFooter">
          <div className="weatherDetailsContainer">
            <div className="weatherDetails">
              <div>
                <p className='font-size-small'>Feels Like</p>
                <p className='font-size-large'>{data.main ? data.main.feels_like.toFixed() : null}°C</p>
              </div>
              <div>
                <p className='font-size-small'>Humidity</p>
                <p className='font-size-large'>{data.main ? data.main.humidity : null}%</p>
              </div>
              <div>
                <p className='font-size-small'>Wind Speed</p>
                <p className='font-size-large'>{data.wind ? data.wind.speed : null} km/h</p>
              </div>
            </div>
            <div className="weatherDetails">
              <div>
                <p className='font-size-small'>Desc.</p>
                <p className='font-size-large'>{data.weather ? data.weather[0].description : null}</p>
              </div>
              <div>
                <p className='font-size-small'>Visibility</p>
                <p className='font-size-large'>{data.visibility / 1000}km</p>
              </div>
              <div>
                <p className='font-size-small'>Air Pressure</p>
                <p className='font-size-large'>{data.main ? data.main.pressure : null} hPa</p>
              </div>
            </div>


          </div>
          <div className="footer">Made with Love by Ashu Jarodia</div>
        </div>
      </div>


    </div>

  );
}

export default App;
