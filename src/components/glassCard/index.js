import styled, { keyframes } from "styled-components";

const MainGlassCard = styled.div`
    background-color: rgba( 255, 255, 255, 0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.35 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 80%;
    max-width: 80%;
    min-height: 35vh;
    margin: 1.5rem auto 1.5rem auto;
`

const ContainerGlassCard = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 2rem auto;
`

const TemperatureArea = styled.div`
    background-color: transparent;
    @media (max-width: 520px){
        margin: auto;
    }
    left: 0;
`

const TextCity = styled.h3`
    background-color: transparent;
`
const TextTemperature = styled.h1`
    background-color: transparent;
    font-size: 6rem;
`

const TextDescription = styled.h2`
    background-color: transparent;
`

const move = keyframes`
    0% {
        opacity: 50%;
		transform: translateX(0);
	}
	50% {
        opacity: 75%;
		transform: translateX(-2rem);
	}
	100% {
        opacity: 100%;
		transform: translateX(0);
	}
`

const IconArea = styled.div`
animation: ${move} 3s alternate infinite;
    color: #25C0B7;
    font-size: 8rem;
    background-color: transparent;
    @media (max-width: 600px){
        margin: 1rem auto;
    }
    right: 0;
`



export default function GlassCard(props){
    let iconWeather
    let descriptionWeather

    if(props.weather.weather[0].description === "clear sky"){
        iconWeather = "fas fa-sun"
        descriptionWeather = "Limpo"
    }else if (props.weather.weather[0].description === "few clouds"){
        iconWeather = "fas fa-cloud-sun"
        descriptionWeather = "Parcialmente nublado"
    }else if (props.weather.weather[0].description === "scattered clouds"){
        iconWeather = "fas fa-cloud"
        descriptionWeather = "Nublado"
    }else if (props.weather.weather[0].description === "broken clouds"){
        iconWeather = "fas fa-cloud"
        descriptionWeather = "Nublado"
    }else if (props.weather.weather[0].description === "shower rain"){
        iconWeather = "fas fa-cloud-showers-heavy"
        descriptionWeather = "Chuvoso"
    }else if (props.weather.weather[0].description === "rain"){
        iconWeather = "fas fa-cloud-sun-rain"
        descriptionWeather = "Chuvoso"
    }else if (props.weather.weather[0].description === "thunderstorm"){
        iconWeather = "fas fa-poo-storm"
        descriptionWeather = "Tempestade"
    }else if (props.weather.weather[0].description === "snow"){
        iconWeather = "fas fa-snowflake"
        descriptionWeather = "Neve"
    }else if (props.weather.weather[0].description === "mist"){
        iconWeather = "fas fa-smog"
        descriptionWeather = "Névoa"
    }

    return(
        <MainGlassCard>
            <ContainerGlassCard>
                <TemperatureArea>
                    <TextCity>Clima em {props.weather.name}</TextCity>
                    <TextTemperature>{(props.weather.main.temp).toFixed(0)}°C</TextTemperature>
                    <TextDescription>{descriptionWeather}</TextDescription>
                </TemperatureArea>
                <IconArea className={iconWeather} />
            </ContainerGlassCard>
        </MainGlassCard>  
    )
}