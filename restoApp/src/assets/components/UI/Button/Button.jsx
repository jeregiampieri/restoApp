import React from "react";
import { ButtonStyled } from "./Button.js";

// Creo este componente ya que este mismo botón se repite varias veces, esto me permite reutilizarlo y ahorrar código
export const Button = ({children}) => {
    return (
        <ButtonStyled>{children}</ButtonStyled>
    )
} 