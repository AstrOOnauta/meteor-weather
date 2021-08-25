import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Loading from "./components/loading";
import GlassCard from "./components/glassCard";
import SolidCard from "./components/solidCard";
import Footer from "./components/footer";
import AllowPage from "./components/allowPage";

function App() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  const getWeather = async (lat, long) => {
    const weatherResponse = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: "f5d2a079d040b7359dd2bcbaa35fae40",
        lang: 'en',
        units: 'metric'
      }
    })
    .catch((error)=>{
      console.log("Ocorreu um erro: "+error)
    })
    setWeather(weatherResponse.data);
  }

  function handleLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if (location === false) {
    return (
      <>
        <Header />
        <AllowPage onClick={handleLocation} />
        <Footer />
      </>
    )
  } else if (weather === false) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header country={weather.sys.country} />
        <GlassCard weather={weather} />
        <SolidCard weather={weather} />
        <Footer />
      </>
    )
  }
}

export default App
