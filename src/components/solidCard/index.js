import styled from "styled-components";

const MainSolidCard = styled.section`
    background-color: #25C0B7;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.35 );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 80%;
    max-width: 80%;
    min-height: 25vh;
    margin: auto;
`

const ContainerSolidCard = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: 1.5rem auto;
`

const TextArea = styled.div`
    background-color: transparent;
    padding: 1rem;
    margin: .5rem 0;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.5 );
`
const IconSolidCard = styled.i`
    padding-right: .4rem ;
    color: #151b27;
    font-size: 1.2rem;
    background-color: transparent;
`

const TextSolidCard = styled.h4`
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


export default function SolidCard(props){

    return(
        <MainSolidCard>
            <ContainerSolidCard>
                <TextArea>
                    <TextSolidCard>
                        <IconSolidCard className="fas fa-temperature-high" />
                        Temperatura máxima:&nbsp;<TextSpan>{(props.weather.main.temp_max).toFixed(1)}°C</TextSpan>
                    </TextSolidCard>
                </TextArea>
                <TextArea>
                    <TextSolidCard>
                        <IconSolidCard className="fas fa-temperature-low" />
                        Temperatura minima:&nbsp;<TextSpan>{(props.weather.main.temp_min).toFixed(1)}°C</TextSpan>
                    </TextSolidCard>
                </TextArea>
                <TextArea>
                    <TextSolidCard>
                        <IconSolidCard className="fas fa-compress-arrows-alt" />
                        Pressão:&nbsp;<TextSpan>{((props.weather.main.pressure)/1.333).toFixed(1)}mmHg</TextSpan>
                    </TextSolidCard>
                </TextArea>
                <TextArea>
                    <TextSolidCard>
                        <IconSolidCard className="fas fa-eye" />
                        Visibilidade:&nbsp;<TextSpan>{(props.weather.visibility).toFixed(1)}m</TextSpan>
                    </TextSolidCard>
                </TextArea>
                <TextArea>
                    <TextSolidCard>
                        <IconSolidCard className="fas fa-tint" />
                        Umidade:&nbsp;<TextSpan>{(props.weather.main.humidity).toFixed(1)}%</TextSpan>
                    </TextSolidCard>
                </TextArea>
                <TextArea>
                    <TextSolidCard>
                        <IconSolidCard className="fas fa-wind" />
                        Vento:&nbsp;<TextSpan>{((props.weather.wind.speed)*3.6).toFixed(1)}km/h</TextSpan>
                    </TextSolidCard>
                </TextArea>
            </ContainerSolidCard>
        </MainSolidCard>
    )

}