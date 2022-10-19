import { React, useContext } from 'react'
import TurkeyMap from 'turkey-map-react';
import { WeatherContext } from '../Context/WeatherContext';
import Search from "./Search"

import wind from "../icons/wind.png";
import arrow from "../icons/up-arrow.png";
import windock from "../icons/windock.png";

export default function Turkey() {

    const { selectedPlateNumber, selectedWeather, handleClick, show } = useContext(WeatherContext)

    return (
        <>
            <Search />
            <div className="turkey-map">
                <TurkeyMap onClick={(e) => handleClick(e)} />
            </div >

            <div className="city-detail" style={{ opacity: `${show}` }}>
                <div className="detail-left">
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${selectedWeather.weather && selectedWeather.weather[0].icon}@2x.png`} alt="sunny" />
                    <h1 className="orange-text"> {selectedWeather.name} </h1>
                    <h4> Plate Number:  {selectedPlateNumber} </h4>
                </div>
                <div className="detail-mid">
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${selectedWeather.weather && selectedWeather.weather[0].icon}@2x.png`} alt="sunny" />
                    <h1 className="orange-text"> {Math.round(selectedWeather.main?.temp)} °C</h1>
                    <h4> {selectedWeather.weather && selectedWeather.weather[0].main} </h4>
                    <h4> {selectedWeather.weather && selectedWeather.weather[0].description}</h4>
                    <div className="max-min">
                        <h5 className="max"> Max: {Math.round(selectedWeather.main?.temp_max)} °C </h5>
                        <h5 className="min"> Min: {Math.round(selectedWeather.main?.temp_min)} °C </h5>
                    </div>
                </div>
                <div className="detail-right">
                    <img className="wind-icon" src={wind} alt="wind" />
                    <div className="wind-details">
                        <div className="wind-deg">
                            <img className="arrow-icon" style={{ transform: `rotate(${selectedWeather.wind?.deg}deg)` }} src={arrow} alt="wind" />
                            <h5>{selectedWeather.wind?.deg} </h5>
                        </div>
                        <div className="wind-speed">
                            <img className="speed-icon" src={windock} alt="wind" />
                            <h5>{selectedWeather.wind?.speed} km</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
