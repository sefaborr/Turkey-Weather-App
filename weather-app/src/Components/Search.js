import { React, useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext';



export default function Search() {

    const { getWeather } = useContext(WeatherContext)

    return (
        <div className="search-area">
            <input onKeyPress={(e) => getWeather(e)} className="search-input" type="text" placeholder='Search from cities or select your city from map' />
        </div>
    )
}


