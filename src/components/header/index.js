import styled from "styled-components"

const MainHeader = styled.header`
    background-color: #151b27;
    width: 100%;
    min-width: 300px;
    min-height: 5rem;
`

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 80%;
    margin: auto;
    background-color: transparent;
`

const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
`

const Logo = styled.i`
    font-size: 3rem;
    color: #f8b34b;
    background-color: transparent;
    margin: 1rem 1rem 1rem 0;
`

const TextLogo = styled.h2`
    font-weight: 800;
    background-color: transparent;
    color: #fff;
    text-align: center;
    margin: .4rem;
`

const SpanTextLogo = styled.span`
    background-color: transparent;
    color: #fff;
    font-weight: 600;
    letter-spacing: .3rem;
    font-size: 1.4rem;
    margin-left: .3rem;
`

const CountryArea = styled.h2`
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    margin: 1.5rem 0;
`


export default function Header(props){
    return(
        <MainHeader>
            <ContainerHeader>
                <ContainerLogo>
                    <Logo className="fas fa-meteor" />
                    <TextLogo>METEOR<br /><SpanTextLogo>Weather</SpanTextLogo></TextLogo>
                </ContainerLogo>
                <ContainerLogo>
                    <CountryArea>{props.country}</CountryArea>
                </ContainerLogo>
            </ContainerHeader>
        </MainHeader>
    )
}