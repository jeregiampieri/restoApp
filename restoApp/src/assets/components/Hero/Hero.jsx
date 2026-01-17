import React from "react";
import { HeroContainer, HeroTextContainer } from "./HeroStyled.js";

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroTextContainer>
                <h1>Si tenés Zappi,</h1>
                <h2>tenes comida.</h2>
                <p>Buscá lo que quieras y nunca te quedes con antojos.</p>
            </HeroTextContainer>
        </HeroContainer>
    )
}