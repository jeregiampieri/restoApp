import React from "react";
import { ButtonStyled } from "./Button.js";

// Creo este componente ya que este mismo botón se repite varias veces, esto me permite reutilizarlo y ahorrar código
// React le pasa un objeto PROPS al componente cuando le pasamos los datos, es por esta razón que va entre llaves
// Este componente recibe los parámetros que se le pasaron en el componente Hero (en este caso no fue necesario pasarle)
// pero los toma y se los envía al ButtonStyled
export const Button = ({radius = "15", disabled = false, children}) => {
    return (
        // Acá se toman los parámetros y se los envía al ButtonStyled
        <ButtonStyled
        disabled={disabled}
        radius={radius}>
            {children}</ButtonStyled>
    )
} 