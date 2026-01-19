import React from "react";
import { BorderDecoration, CardCategorie, CardsContainer, CategoriesContainer } from "./CategoriesStyled";
import {categories} from "../../data/Categorias.js"

export const Categories = () => {
    return (
        <CategoriesContainer>
            <h1>Categorias</h1>
            <CardsContainer>
                {
                    categories.map((categoria) => {
                        return <CardCategorie>
                            <img src= {categoria.img} alt={`Imagen de ${categoria.img}`}/>
                            {/* Acceso a una propiedad del objeto categoria */}
                            <h2>{categoria.title}</h2>
                            <BorderDecoration></BorderDecoration>
                        </CardCategorie>
                    })
                }
            </CardsContainer>
        </CategoriesContainer>
    )
}