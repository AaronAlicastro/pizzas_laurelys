import React from "react";
import "./styles/pizzasCards.css"

function PizzasCards(props) {
    let key = 0;
    const desplegarCarta = e => {
        let padre = e.target.parentNode.parentNode.children[1];
        let desCard = e.target.parentNode.parentNode.children[0];
        if (e.target.innerText == "Consultar") {
            e.target.innerHTML = "꘍ Cerrar";
            desCard.style.display = "block";
            desCard.style.animation = "desplegarCarta 1.5s forwards";
            padre.style.borderBottomLeftRadius = "0";
            padre.style.borderBottomRightRadius = "0";
        } else {
            e.target.innerHTML = "Consultar";
            desCard.style.animation = "plegarCarta 1.5s forwards";
            padre.style.borderBottomLeftRadius = "12px";
            padre.style.borderBottomRightRadius = "12px";
            setTimeout(() => desCard.style.display = "none", 1499);
        }
    }

    return <div className="containerPizzasCards">
        {
            props.images.map((img, i) => {
                key++;
                return <div key={key} className="containerCards">
                    <div className="containerDesCards">
                        <div className="namePizza">
                            <h3>
                                <span> {props.des[i].name} </span>
                                <span> {props.des[i].precio} </span>
                            </h3>
                        </div>
                        {
                            props.des[i].des.map((ds, j) => {
                                key++;
                                return <div key={key} className={((j % 2) == 0) ? "des_desCrads" : "des_desCrads imparCard"}>
                                    {ds}
                                </div>
                            })
                        }
                        <div className="des_desCrads">
                            { props.eniarPedido(["1 pizza, " + props.des[i].name]) }
                        </div>
                    </div>
                    <div className="containerIMGcards">
                        <img src={img} alt={(img + "")} />
                        <button className="btnDesplegarCarta" onClick={desplegarCarta}>Consultar</button>
                    </div>
                </div>
            })
        }
    </div>
}

export default PizzasCards;