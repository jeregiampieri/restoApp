import styled from 'styled-components'

// Creación del contenedor del Navbar (HEADER)
export const NavbarContainer = styled.header`
    height: 100px;
    background-color: #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
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
    font-size: 1.2rem;
    color: ${(color) => (color.home ? "#ff9d01" : "#ff9300")};
    align-items: center;
`

// Aplico herencia para que UserContainerStyled herede los estilos que ya están en LinkContainer
export const UserContainerStyled = styled(LinkContainer)`
    display: flex;
`
// Aplico herencia para que HomeContainerStyled herede los estilos que ya están en LinkContainer
export const HomeContainerStyled = styled(LinkContainer)`
    display: flex;
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