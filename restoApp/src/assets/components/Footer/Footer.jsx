import React from "react";
import { FooterInfoStyled, FooterOwnerStyled, FooterStyled } from "./FooterStyled";

export const Footer = () => {
    return (
        <FooterStyled>
            <FooterInfoStyled>
                <p>Términos de uso</p>
                <p>Trabaja con nosotros</p>
                <p>Soporte</p>
            </FooterInfoStyled>
            <FooterOwnerStyled>
                <p>Hecho por <span><strong>Giampieri Navarro, Jeremías Caleb</strong></span></p>
            </FooterOwnerStyled>
        </FooterStyled>
    )
}