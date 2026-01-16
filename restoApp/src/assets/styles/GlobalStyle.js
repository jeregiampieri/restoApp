import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: #131415;
        color: white;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
    }
    a {
        text-decoration: none;
    }
    a:visited{
        color: white;
    }
    li{
        list-style: none;
    }
`