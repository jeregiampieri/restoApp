import React from "react";
import { HeroContainer, HeroImgContainer, HeroTextContainer } from "./HeroStyled.js";
import { Button } from "../UI/Button/Button.jsx";

export const Hero = () => {
    return (
        <HeroContainer>
            {/* Div del texto del hero */}
            <HeroTextContainer>
                <h1>Si tenés Zappi,</h1>
                <h2>tenes comida.</h2>
                <p>Buscá lo que quieras y nunca te quedes con antojos.</p>
                {/* A este botón le puedo pasar (en este caso no es necesario) radius, disabled como parámetros
                y los va a recibir el componente button */}
                <Button>Ver más</Button>
            </HeroTextContainer>
            {/* Div de la imagen del hero */}
            <HeroImgContainer>
                    <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png" 
                    alt="Imagen de una pizza" />
            </HeroImgContainer>
        </HeroContainer>
    )
}