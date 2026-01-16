import React from "react";
import {NavbarContainer, LinksContainer} from "./NavbarStyle";

// Creación del componente NAVBAR
export const Navbar = () => {
    return (
        <NavbarContainer>
            {/* Para esto no creo componentes, ya que como NO voy a estilarlos, entonces puedo crearlos
            directamente acá al saber que van a ser estáticos */}
            <div>
                <a href="#">
                    <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png" 
                    alt="Logo" />
                </a>
            </div>
            <LinksContainer>
                
            </LinksContainer>
        </NavbarContainer>
    )
}