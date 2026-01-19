import React from "react";
import {styled} from "styled-components"
import {motion} from "framer-motion"

// Contenedor de los productos
export const ProductsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 15px;
    margin-left: 112px;
    margin-bottom: 50px;
    h1 {
        font-weight: 100;
    }
    @media (max-width: 1000px) {
        text-align: center;
    }
`

export const CardsProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
`

export const CardProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border-radius: 15px;
    background-color: #2b2b2c;
    align-items: flex-start;
    margin-left: 20px;
    padding: 15px;
    img {
        margin-top: 15px;
        margin-left: 14.5px;
        width: 90%;
        height: 125px;
    }
    h3{
        font-weight: 100;
    }
    p{
        color: #7d7d7d;
    }
`
export const InfoProduct = styled.div`
    display: flex;
    width: 100%;
`
