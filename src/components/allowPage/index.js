import styled from "styled-components";

const MainAllowPage = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    height: 70.4vh;
    margin: 1.5% auto;
`

const TextAllowPage = styled.h3`
    background-color: transparent;
    text-align: center;
`

const AllowPageButton = styled.button`
    background-color: #25C0B7;
    cursor: pointer;
    color: #fff;
    font-size: x-large;
    padding: 1rem 0;
    min-width: 300px;
    margin: 1rem auto;
    border: none;
    border-radius: .4rem;
`

export default function AllowPage(props){

    return(
        <MainAllowPage>
            <TextAllowPage>Por favor habilitar a localização para continuar !!!</TextAllowPage>
            <AllowPageButton onClick={props.onClick} >Habilitar Localização</AllowPageButton>
        </MainAllowPage>
    )
}