import React from "react";
import {NavbarContainer, LinksContainer, UserContainerStyled, HomeContainerStyled, MenuContainerStyled, LinkContainer, ImgContainer, SpanStyled} from "./NavbarStyle";
import {motion, scale} from "framer-motion"
import { ImHome } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

// Creación del componente NAVBAR
export const Navbar = () => {
    return (
        <NavbarContainer>
            {/* Para esto no creo componentes, ya que como NO voy a estilarlos, entonces puedo crearlos
            directamente acá al saber que van a ser estáticos */}
            <ImgContainer>
                <a href="#">
                    <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png" 
                    alt="Logo" />
                </a>
            </ImgContainer>
            <LinksContainer>   
                <HomeContainerStyled>
                    {/* Acá estoy utilizando la librería de framer motion */}
                    <motion.div whileTap={{scale: 0.93}}>
                    <a href="#">
                        <LinkContainer home>
                            <ImHome />
                        </LinkContainer>
                        Home
                    </a>
                    </motion.div>
                </HomeContainerStyled>
                <UserContainerStyled>
                    <motion.div whileTap={{scale: 0.93}} 
                    style = {{display:"flex", gap:"10px", cursor:"pointer"}}>
                        <LinkContainer>
                            <FaCircleUser />
                        </LinkContainer>
                        <SpanStyled>Iniciar sesión</SpanStyled>
                    </motion.div>
                </UserContainerStyled>   
                <MenuContainerStyled>
                    <motion.div whileTap={{scale: 0.93}}>
                        <RxHamburgerMenu />
                    </motion.div>
                </MenuContainerStyled>
            </LinksContainer>
        </NavbarContainer>
    )
}