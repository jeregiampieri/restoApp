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
        align-items: center;
    }
`
// Contenedor de las cards productos
export const CardsProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
`
// Contenedor de cada card
export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background-color: #2b2b2c;
  padding: 15px;

  img {
    margin: 15px auto 0;
    width: 90%;
    height: 125px;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    margin-top: 20px;
    font-weight: 100;
  }

  p {
    margin-top: 15px;
    color: #7d7d7d;
  }
`
// Contenedor de la info (precio y botón comprar) de la card
export const InfoProduct = styled.div`
    display: flex;
    width: 100%;
    margin-top: 17px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    p{
        margin: 0;
        font-weight: 100;
        font-size: 19px;
        line-height: 1;
        color: white;
    }
`
