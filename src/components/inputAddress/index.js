import styled, { keyframes } from "styled-components";


const MainInputAddress = styled.section`
    background-color: #25C0B7;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.35 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 80%;
    max-width: 80%;
    min-width: 300px;
    min-height: 15vh;
    margin: 1.5rem auto;
`

const Form = styled.form`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    min-width: 200px;
    margin: 1.5rem auto;
`

const Input = styled.input`
    min-width: 150px;
    padding: 1rem 0;
    text-align: center;
    font-size: large;
    border-radius: 2rem 0 0 2rem;
    border: none;
`

const Button = styled.button`
    min-width: 50px;
    padding: 1rem 1rem 1rem 0;
    text-align: center;
    font-size: large;
    border-radius: 0 2rem 2rem 0;
    border: none;
`

const ContainerCard = styled.div`
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
    color: #151b27;
    font-size: 8rem;
    background-color: transparent;
    @media (max-width: 600px){
        margin: 1rem auto;
    }
    right: 0;
`

const TextArea = styled.div`
    background-color: transparent;
    padding: 1rem;
    margin: .5rem 0;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.5 );
`
const IconCard = styled.i`
    padding-right: .4rem ;
    color: #151b27;
    font-size: 1.2rem;
    background-color: transparent;
`

const TextCard = styled.h4`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    background-color: transparent;
    text-align: center;
`

const TextSpan = styled.span`
    color: #fff;
    background-color: transparent;
`


export default function InputAddress(props){

    //Conditional to show the data if any address is searched
    if(props.weatherInput===false){ //Show only the input for to search
        return(
            <MainInputAddress>
                <Form onSubmit={props.onSubmit}>
                    <Input size="100" placeholder="Buscar cidade..." value={props.value} onChange={props.onChange} required/>
                    <Button className="fas fa-search" type="submit"></Button>
                </Form>
            </MainInputAddress>
        )
    }else{  //Show the input for new search and the data of the address searched beforely
        let iconWeather
        let descriptionWeather

        //Conditional to show the weather icon according with address searched
        if(props.weatherInput.weather[0].description === "clear sky"){
            iconWeather = "fas fa-sun"
            descriptionWeather = "Limpo"
        }else if (props.weatherInput.weather[0].description === "few clouds"){
            iconWeather = "fas fa-cloud-sun"
            descriptionWeather = "Parcialmente nublado"
        }else if (props.weatherInput.weather[0].description === "scattered clouds"){
            iconWeather = "fas fa-cloud"
            descriptionWeather = "Nublado"
        }else if (props.weatherInput.weather[0].description === "broken clouds"){
            iconWeather = "fas fa-cloud"
            descriptionWeather = "Nublado"
        }else if (props.weatherInput.weather[0].description === "shower rain"){
            iconWeather = "fas fa-cloud-showers-heavy"
            descriptionWeather = "Chuvoso"
        }else if (props.weatherInput.weather[0].description === "rain"){
            iconWeather = "fas fa-cloud-sun-rain"
            descriptionWeather = "Chuvoso"
        }else if (props.weatherInput.weather[0].description === "thunderstorm"){
            iconWeather = "fas fa-poo-storm"
            descriptionWeather = "Tempestade"
        }else if (props.weatherInput.weather[0].description === "snow"){
            iconWeather = "fas fa-snowflake"
            descriptionWeather = "Neve"
        }else if (props.weatherInput.weather[0].description === "mist"){
            iconWeather = "fas fa-smog"
            descriptionWeather = "Névoa"
        }

        return(
            <MainInputAddress>
                <Form onSubmit={props.onSubmit}>
                    <Input size="100" placeholder="Buscar cidade..." value={props.value} onChange={props.onChange} required/>
                    <Button className="fas fa-search" type="submit"></Button>
                </Form>
                <ContainerCard>
                    <TemperatureArea>
                        <TextCity>Clima em {props.weatherInput.name}</TextCity>
                        <TextTemperature>{(props.weatherInput.main.temp).toFixed(0)}°C</TextTemperature>
                        <TextDescription>{descriptionWeather}</TextDescription>
                    </TemperatureArea>
                    <IconArea className={iconWeather} />
                </ContainerCard>
                <ContainerCard>
                <TextArea>
                    <TextCard>
                        <IconCard className="fas fa-temperature-high" />
                        Temperatura máxima:&nbsp;<TextSpan>{(props.weatherInput.main.temp_max).toFixed(1)}°C</TextSpan>
                    </TextCard>
                </TextArea>
                <TextArea>
                    <TextCard>
                        <IconCard className="fas fa-temperature-low" />
                        Temperatura minima:&nbsp;<TextSpan>{(props.weatherInput.main.temp_min).toFixed(1)}°C</TextSpan>
                    </TextCard>
                </TextArea>
                <TextArea>
                    <TextCard>
                        <IconCard className="fas fa-compress-arrows-alt" />
                        Pressão:&nbsp;<TextSpan>{((props.weatherInput.main.pressure)/1.333).toFixed(1)}mmHg</TextSpan>
                    </TextCard>
                </TextArea>
                <TextArea>
                    <TextCard>
                        <IconCard className="fas fa-eye" />
                        Visibilidade:&nbsp;<TextSpan>{(props.weatherInput.visibility).toFixed(1)}m</TextSpan>
                    </TextCard>
                </TextArea>
                <TextArea>
                    <TextCard>
                        <IconCard className="fas fa-tint" />
                        Umidade:&nbsp;<TextSpan>{(props.weatherInput.main.humidity).toFixed(1)}%</TextSpan>
                    </TextCard>
                </TextArea>
                <TextArea>
                    <TextCard>
                        <IconCard className="fas fa-wind" />
                        Vento:&nbsp;<TextSpan>{((props.weatherInput.wind.speed)*3.6).toFixed(1)}km/h</TextSpan>
                    </TextCard>
                </TextArea>
                </ContainerCard>
            </MainInputAddress>
        )
    }
}