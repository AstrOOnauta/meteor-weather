import styled from "styled-components";

const MainFooter = styled.footer`
    background-color: #151b27;
    margin-top: 1.5rem;
    width: 100%;
    min-width: 300px;
    min-height: 3.8rem;
`

const StyledTagP = styled.p`
    background-color: transparent;
    color: #fff;
    margin-top: 1.5rem;
    text-align: center;
    bottom: 1rem;
`

const StyledTagA = styled.a`
    background-color: transparent;
    color: #f8b34b;
    text-decoration: inherit;
`


export default function Footer(){

    return(
        <MainFooter>
            <StyledTagP>
                Desenvolvido por <StyledTagA
                                    href="https://github.com/AstrOOnauta"
                                    target="_blank"
                                    rel="nonoreferrer">AstrOOnauta</StyledTagA>
            </StyledTagP>
        </MainFooter>
    )
}