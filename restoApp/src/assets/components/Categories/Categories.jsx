import React from "react";
import { CardsContainer, CategoriesContainer } from "./CategoriesStyled";
import {categories} from "../../data/Categorias.js"

export const Categories = () => {
    return (
        <CategoriesContainer>
            <h1>Categorias</h1>
            <CardsContainer>
                {
                    categories.map((categoria) => {
                        
                    })
                }
            </CardsContainer>
        </CategoriesContainer>
    )
}