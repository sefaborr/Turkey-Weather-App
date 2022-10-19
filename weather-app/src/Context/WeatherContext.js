import { React, createContext, useState } from "react"


export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {

    const [selectedPlateNumber, setSelectedPlateNumber] = useState("")
    const [selectedWeather, setSelectedWeather] = useState({});
    const [show, setShow] = useState("0")




    const handleClick = (e) => {
        setSelectedPlateNumber(e.plateNumber)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.name}&units=metric&lang=tr&appid=4a1d7d1ed8b376493e2cc78012f2c38d`)
            .then((data) => data.json())
            .then((result) => {
                setSelectedWeather(result)
                setShow("1")
            })
    }


    const getWeather = (e) => {
        if (e.key === "Enter")
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&lang=tr&appid=4a1d7d1ed8b376493e2cc78012f2c38d`)
                .then((data) => data.json())
                .then((result) => {
                    setSelectedWeather(result)
                    setShow("1")
                })
    }


    return (
        <WeatherContext.Provider value={{ selectedPlateNumber, handleClick, selectedWeather, show, setShow, getWeather }} >
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;