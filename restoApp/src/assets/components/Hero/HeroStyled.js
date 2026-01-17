import styled from "styled-components"

// Contenedor general del hero
export const HeroContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 30px;
    width: 100%;
    h1 {
        margin-bottom: 2rem;
    }
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

// Contenedor de la imagen del hero
export const HeroImgContainer = styled(HeroContainer)`

`