import React from "react";
import {styled} from "styled-components"
import {motion} from "framer-motion"

// Contenedor del footer
export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0 2rem 0;
`
// Contenedor del footer info
export const FooterInfoStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    gap: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px){
        flex-direction: column;
        gap: 0px;
    }
    p{
        font-weight: 100;
        color: #7d7d7d;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    p:hover{
        color: white;
        text-decoration: underline;
    }
`
// Contenedor del owner 
export const FooterOwnerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    p{
        font-weight: 100;
        color: white;
    }
    p span{
        font-weight: 800;
    }
    @media (max-width: 421px) {
        display: none;
    }
`