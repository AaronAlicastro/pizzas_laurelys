import React from "react";
import "./styles/listaAccionable.css";

function ListaAccionable (props) {
    let key = 0;
    return <div className="containerLista">
        {
            props.lista.map((ls, i) => {
                key++;
                return <div key={key} className="seccionList" onClick={() => props.onClick(i)}> {ls} </div>
            })
        }
    </div>
}

export default ListaAccionable;