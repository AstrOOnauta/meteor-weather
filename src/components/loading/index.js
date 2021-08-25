import styled, { keyframes } from "styled-components"

const MainLoading = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    height: 70.3vh;
    margin: 1.5% auto;
`

const Loader = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 12rem;
    height: 5rem;
    margin: 1rem;
    padding-top: 1rem;
    overflow-y: hidden;
`

const move = keyframes`
    from{
        transform: translateY(-1.2rem)
    }
    to{
        transform: translateY(1.2rem)
    }
`

const SpanLoader = styled.span`
    animation: ${move} 1s alternate infinite;
    background-color: #f8b34b;
    margin-top: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border: 1px solid #151b27;
    border-radius: 50%;
    &:nth-child(1){
        animation-delay: 0s;
    }
    &:nth-child(2){
        animation-delay: -0.1s;
    }
    &:nth-child(3){
        animation-delay: -0.2s;
    }
    &:nth-child(4){
        animation-delay: -0.3s;
    }
`


export default function Loading(){

    return(
        <MainLoading>
            <Loader>
                <SpanLoader/>
                <SpanLoader/>
                <SpanLoader/>
                <SpanLoader/>
            </Loader>
                Carregando o Clima...
        </MainLoading>
    )
}