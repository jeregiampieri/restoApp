import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components"

// Contenedor de las categorias
export const CategoriesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    margin-left: 112px;
    h1{
        font-weight: 100;
    }
    @media (max-width: 1000px){
        align-items: center;
        text-align: center;
        margin-left: 0;
        padding-top: 30px;
    }
`
// Contenedor de las cards
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`

// Línea decorativa dentro de la card
export const BorderDecoration = styled.div`
    display: flex;
    width: 30%;
    height: 5px;
    border-radius: 15px;
    background: linear-gradient(83deg, #ffa100,   #fb103d);
`

// Contenedor de cada card
export const CardCategorie = styled(motion.div).attrs(() => ({whileTap: {scale: 0.98}}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 225px;
    padding: 2rem 0.5rem;
    border-radius: 15px;
    background-color: #363636c3;
    cursor: pointer;
    transition: all 0.5s ease;
    h2{
        font-size: 1.25rem;
    }
    &:hover{
        background-color: #c8c8c8d5;
        color: black;
        ${BorderDecoration}{
            background: linear-gradient(83deg, #131415, #979da4);
        }
    }
`