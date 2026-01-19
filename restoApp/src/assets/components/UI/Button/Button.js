import styled from "styled-components"
import {motion} from "framer-motion"

// Estilado del botón
export const ButtonStyled = styled(motion.button).attrs(() => ({
  whileTap: {scale: 0.98}}))`
    margin: 20px 0;
    width: auto;
    padding: 10px 30px;
    border-radius: ${({radius}) => `${radius}px`};
    color:white;
    background: linear-gradient(83deg, #ffa100,   #fb103d);
    border: none;
    cursor: pointer;
    text-transform:uppercase;
    &:hover{
        opacity: 95%
    }
    &:disabled{
        cursor: not-allowed;
        opacity: 0.5;
    }
`