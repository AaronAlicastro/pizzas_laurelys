import React from "react";
import "../styles/button.css";

function Button (props) {
    return <button className="buttons" onClick={props.onClick}> {props.children} </button>
}

export default Button;
