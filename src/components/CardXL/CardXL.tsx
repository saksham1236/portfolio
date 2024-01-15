import { JSXElement } from "@babel/types";
import { ReactNode } from "react";
import "./CardXL.scss"

type cardXL_props = {
    children?: ReactNode
}

export default function CardXL({children}:cardXL_props){
    return (
        <div className="CardXL">
            {children}
        </div>
    )
}