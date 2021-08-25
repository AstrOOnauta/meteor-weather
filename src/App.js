import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Loading from "./components/loading";
import GlassCard from "./components/glassCard";
import SolidCard from "./components/solidCard";
import Footer from "./components/footer";
import AllowPage from "./components/allowPage";
import InputAddress from "./components/inputAddress";

function App() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)
  const [inputAddress, setInputAddress] = useState("")
  const [weatherInput, setWeatherInput] = useState(false)

  //Axios request API to get the local weather data
  const getWeather = async (lat, long) => {
    const weatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: "f5d2a079d040b7359dd2bcbaa35fae40",
        lang: 'en',
        units: 'metric'
      }
    })
    .catch((error)=>{
      console.log("Ocorreu um "+error)
    })
    setWeather(weatherResponse.data)  //Storage the local weather data
  }

  //Axios request API to get the requested address weather data
  const getInputWeather = async (lat, long) => {
    const inputWeatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: "f5d2a079d040b7359dd2bcbaa35fae40",
        lang: 'en',
        units: 'metric'
      }
    })
    .catch((error)=>{
      console.log("Ocorreu um "+error)
    })
    setWeatherInput(inputWeatherResponse.data)  //Storage the requested address weather data
  }

  //Axios request API to get the requested address geolocation data
  const getLocation = async ()=>{
    const addressFormated = inputAddress.replace(/\s/g, "+")
    const locationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${addressFormated}&key=7ec01aa9d74846bebf4ea981d758b2c0`, {
    })
    .catch((error)=>{ 
      console.log("Ocorreu um "+error)
    })

    //Call the function which will do the requested address weather data from requested address geolocation data
    getInputWeather(locationResponse.data.results[0].geometry.lat, locationResponse.data.results[0].geometry.lng)
  }

  //Function to catch the local geolocation obtained from location request browser
  function handleLocation(){
    navigator.geolocation.getCurrentPosition((position) => {

      //Call the function which will do the local weather data
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true) //Report which the local localization is enabled
    })
  }

  //Function to start the request to API to forward geolocation of typing address in input field after submit
  function handleSubmit(e){
    e.preventDefault()
    getLocation() //Call the function which will do the local weather data
    setInputAddress("") //Clean input field after an search
  }

  //Funciton to catch the input field value seached and update the HOOK inputAddress
  function handleChangeInput(e){
    setInputAddress(e.target.value)
  }

  //React Effect to start the localization request
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  //Conditional to show the web app content
  if (location === false) { //Show the allow page to localization request
    return (
      <>
        <Header />
        <AllowPage onClick={handleLocation} />
        <Footer />
      </>
    )
  } else if (weather === false) { //Show the loading page after accepted the localization request
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    )
  } else {  //Show the local weather data after response of the API
    return (
      <>
        <Header country={weather.sys.country} />
        <InputAddress weatherInput={weatherInput}
                      onSubmit={handleSubmit}
                      value={inputAddress}
                      onChange={handleChangeInput} />
        <GlassCard weather={weather} />
        <SolidCard weather={weather} />
        <Footer />
      </>
    )
  }
}

export default App
