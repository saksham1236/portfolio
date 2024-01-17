
import "./Button.scss";
import { PropsWithChildren } from "react";

//Importing Dependecies
import { ReactSVG } from "react-svg";
import { Link, To } from "react-router-dom";
import { Children, ReactNode } from "react";
import { JSXElement } from "@babel/types";

//Types
type buttonProps = {
    icon?: string,
    imgAlt?: string,
    link?: To,
    label?: string,
    onClick?: any,
    more?: any
}

export default function Button(props: buttonProps) {
    const {icon, link, label, imgAlt, ...more} = props;
     if(icon){
        if(link){
            return <Link to = {link} className="button" {...more}><button className="button__inner">{label}<img alt = {imgAlt} className="button__inner__icon" src = {icon} /></button></Link>
        } else {
            return <div className="button" {...more}><button className="button__inner">{label}<img alt = {imgAlt} className="button__inner__icon" src = {icon} /></button></div>
        }
    } else {
        if(link){
            return <Link to = {link} className="button" {...more}><button className="button__inner">{label}</button></Link>
        } else {
            return <div className="button" {...more}><button className="button__inner">{label}</button></div>
        }
    }
}

