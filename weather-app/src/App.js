import { React } from "react"
import Turkey from "./Components/Turkey"
import "./index.css"
import WeatherContextProvider from "./Context/WeatherContext";



function App() {
  return (
    <>
      <WeatherContextProvider>
        <div className="background"></div>
        <div className="main">
          <Turkey />
        </div>

      </WeatherContextProvider>
    </>
  );
}

export default App;
