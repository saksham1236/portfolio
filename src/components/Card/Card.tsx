import { ReactNode } from "react";
import "./Card.scss"

type cardXL_props = {
    children?: ReactNode
}

export default function Card({children}:cardXL_props){
    return (
        <div className="Card">
            {children}
        </div>
    )
}