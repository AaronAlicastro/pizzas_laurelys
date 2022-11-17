import React from "react";
import "./styles/pizzasCards.css"

function PizzasCards(props) {
    let key = 0;
    return <div className="containerPizzasCards">
        {
            props.images.map((img, i) => {
                key++;
                return <div key={key} className="containerCards">
                    <div className="containerDesCards">
                        {
                            props.des.map(ds => {
                                key++;
                                return <div key={key} className="des_desCrads"> {ds} </div>
                            })
                        }
                    </div>
                    <div className="containerIMGcards">
                        <img src={img} alt={(img + "")} />
                    </div>
                </div>
            })
        }
    </div>
}

export default PizzasCards;