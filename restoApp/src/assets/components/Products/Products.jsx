import React from "react";
import { CardProduct, CardsProductsContainer, InfoProduct, ProductsContainer } from "./ProductsStyled";
import { products } from "../../data/Productos.js";
import {Button} from "../UI/Button/Button.jsx"

export const Products = () => {
    return (
        <ProductsContainer>
            <h1>Productos</h1>
            <CardsProductsContainer>
                 {
                products.map((productos) => {
                    return <CardProduct key={productos.id}>
                            <img src={productos.img} alt={`Imagen de ${productos.title}`} />
                            <h3>{productos.title.toUpperCase()}</h3>
                            <p>{productos.desc.toUpperCase()}</p>
                            <InfoProduct>
                                <p>${productos.price} </p>
                                <Button radius="10">COMPRAR</Button>
                            </InfoProduct>
                        </CardProduct>
                })
            }
            </CardsProductsContainer>
        </ProductsContainer>
    )
}