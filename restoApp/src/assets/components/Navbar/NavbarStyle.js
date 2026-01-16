import styled from 'styled-components'

// Creación del contenedor del Navbar (HEADER)
export const NavbarContainer = styled.header`
    height: 70px;
    background-color: #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
`

// Creación del contenedor de la imagen
export const ImgContainer = styled.div`
    display: flex;
    margin-top: 5px;
    height: 50px;
    align-items: center;
    justify-content: center;
`

// Creación del contenedor donde se encuentra home e inicio sesión
export const LinksContainer = styled.div`
    display: flex;
    gap: 40px;
    color: white;
    justify-content: center;
    align-items: center;
`

// Es un contenedor GENERAL que creo ya que voy a tener otros dos contenedores que comparten los mismos estilos,
// solamente diferen en uno solo y es por esta razón que utilizo PROPS
export const LinkContainer = styled.div`
    font-size: 1.05rem;
    color: ${(color) => (color.home ? "#ff9d01" : "#ff9300")};
    align-items: center;
`

// Aplico herencia para que UserContainerStyled herede los estilos que ya están en LinkContainer
export const UserContainerStyled = styled(LinkContainer)`
    span {
        color: white;
    }
    @media (max-width:768px){
        display: none;
    }
`
// Aplico herencia para que HomeContainerStyled herede los estilos que ya están en LinkContainer
export const HomeContainerStyled = styled(LinkContainer)`
    display: flex;
    a {
        display: flex;
        padding: 0.75rem 1.5rem;
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        border: 2px solid #473820;
        border-radius: 1rem;
        transition: all 0.5s ease;
    }
    a:hover{
        background-color: #b5b5b5;
        color: #131415;
        border: 2px solid #131415;
    }
    @media (max-width: 769px){
        display: none;
    }
`
// Aplico herencia para que MenuContainerStyled herede los estilos que ya están en LinkContainer
export const MenuContainerStyled = styled(LinkContainer)`
    /* Recordar que los iconos los puedo estilar (su tamaño) con font-size */
    display: none;
    cursor: pointer;
    @media (max-width: 769px){
        display: flex;
    }
`

export const SpanStyled = styled.span`
    &:hover{
        text-decoration: underline;
    }
`