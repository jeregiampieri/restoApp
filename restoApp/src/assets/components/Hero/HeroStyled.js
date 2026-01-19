import styled from "styled-components"

// Contenedor general del hero
export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    h1 {
        margin-bottom: 2rem;
    }
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

// Contenedor del texto del hero
export const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    h1 {
        font-size: 4rem;
        margin: 50px 0px 10px 0px;
        font-weight: 100;
    }
    h2{
        font-size: 2.5rem;
        margin: 0px 0px 10px 0px;
        font-weight: 100;
    }
    p{
        font: 1.2rem;
        margin: 10px 0;
        font-weight: 100;
        color: #bebebe;
    }
    @media (max-width: 1000px){
        /* Esto es para alinear el botón (ver más) */
        align-items: center;
        width: 80%;
        /* Esto es para alinear el texto en si (h1,h2,p) */
        text-align: center;
    }
`

// Contenedor de la imagen del hero
export const HeroImgContainer = styled.div`
    display: flex;
    width: 40%;
    transition: all 0.5s ease;
    img {
        width: 100%;
        padding-bottom: 75px;
    }
    &:hover{
        transform: scale(0.98);
    }
    @media (max-width: 1000px){
        display: none;
    }
`