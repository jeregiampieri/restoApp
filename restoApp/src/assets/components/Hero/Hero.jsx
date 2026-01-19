import React from "react";
import { HeroContainer, HeroTextContainer } from "./HeroStyled.js";
import { Button } from "../UI/Button/Button.jsx";

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroTextContainer>
                <h1>Si tenés Zappi,</h1>
                <h2>tenes comida.</h2>
                <p>Buscá lo que quieras y nunca te quedes con antojos.</p>
                {/* A este botón le puedo pasar (en este caso no es necesario) radius, disabled como parámetros
                y los va a recibir el componente button */}
                <Button>Ver más</Button>
            </HeroTextContainer>
        </HeroContainer>
    )
}