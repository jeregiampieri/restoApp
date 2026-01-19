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

export const CardCategorie = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 150px;
    padding: 2rem 0.5rem;
    border-radius: 15px;
    cursor: pointer;
    h2{
        font-size: 1rem;
    }
`