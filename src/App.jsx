import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

import polarBear from './animal-images/melting.png'
import snowyOwl from './animal-images/snowy-owl.png'
import rabbit from './animal-images/rabbit.png'
import arcticFox from './animal-images/arctic-fox.png'
import walrus from './animal-images/walrus.png'
import seal from './animal-images/seal.png'
import deer from './animal-images/deer.png'

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

    fetch('http://api.weatherapi.com/v1/current.json?key=9d5d9681b406421685723701230601&q=Burlington')
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  })

  const icons = [
    polarBear,
    snowyOwl,
    rabbit,
    arcticFox,
    walrus,
    seal,
    deer,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
    walrus,
  ]

  return (
    <>
      <div>
        {(weather) &&
        <img className='icon-image' src={icons[Math.round(weather[1])]}/>
      }
      </div>
      <div className='info'>
        <div>
          Location: {weather ? weather[0] : ""}
        </div>
        <div>
          Temperatue: {weather ? weather[1] : ""}℃
        </div>
      </div>
    </>
  )
}

export default Weather
