import { useState, useEffect } from 'react'
import './App.css'

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

  const images = ["https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg"]
return (
  <>
  <div className='icon'>
  <img className='icon-image' src={images[0]}></img>
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
