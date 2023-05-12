import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./menu.css"
import Button from "../Button";
// import ButtonLink from "./componentes/ButtonLink";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo do TechFlix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;