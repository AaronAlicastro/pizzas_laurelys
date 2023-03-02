import React from "react";
import IMG_logo from "../images/logo.jpeg";

function Carga({ goToView }) {
    return <div className="totalPanel columnCenter">
        <div className="containerLogo rowCenter">
            <img src={IMG_logo} alt="Logo" />
        </div>
        <h1>Pizzas Laurelys</h1>
        <span aria-busy="true"></span>
        { setTimeout(() => goToView("main"), 2100) } %
    </div>
}

export default Carga;