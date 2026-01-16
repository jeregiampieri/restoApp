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

// Creación del contenedor para los ICONOS home e inicio de sesión, vamos a utilizar el mismo div para  
// ambos, ya que la única diferencia entre ambos es el background-color, y para manejar esto utilizo PROPS
export const LinkContainer = styled.div`
    font-size: 1.2rem;
    color: ${(color) => (color.home ? "#ff9d01" : "#ff9300" )};
`

// Aplico herencia para que UserContainerStyled herede los estilos que ya están en LinkContainer
export const UserContainerStyled = styled(LinkContainer)`

`