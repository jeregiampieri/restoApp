import React from "react";
import { LayoutStyle } from "./LayoutStyle.js";

export const Layout = ({children}) => {
    return (
        <LayoutStyle>
            {children}
        </LayoutStyle>
    )
}