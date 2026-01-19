import React from "react";
import { CardProduct, CardsProductsContainer, ProductsContainer } from "./ProductsStyled";
import { products } from "../../data/Productos.js";

export const Products = () => {
    return (
        <ProductsContainer>
            <h1>Productos</h1>
            <CardsProductsContainer>
                 {
                products.map((productos) => {
                    return <CardProduct>
                            <img src={productos.img} alt={`Imagen de ${productos.title}`} />
                            <h3>{productos.title.toUpperCase()}</h3>
                            <p>{productos.desc.toUpperCase()}</p>
                        </CardProduct>
                })
            }
            </CardsProductsContainer>
        </ProductsContainer>
    )
}