import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faCalculator, faBinoculars, faUserPlus, faBars, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {

    const setData = function (data) {
      const returnData = [
        data.location.name,
        data.current.temp_c
      ]
      setWeather(returnData);
    }

    fetch('http://api.weatherapi.com/v1/current.json?key=9d5d9681b406421685723701230601&q=London')
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  })

  const images = []
return (
  <>
  <div className='icon'>
  <img className='icon-image' src={}></img>
  </div>

    <div className='info'>
      <div>
        Location: {weather ? weather[0]: ""}
      </div>
      <div>
        Temperatue: {weather ? weather[1]: ""}
      </div>
    </div>
  </>
)
}

export default Weather
