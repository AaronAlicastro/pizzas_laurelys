import React from "react";
import icon_pizza from "../../images/icon_pizza.png"
import {
    GiSaucepan,
    GiCheeseWedge,
    GiHamShank,
    GiBacon,
    GiCorn,
    GiSaltShaker,
    GiPlainCircle,
    GiMushroomGills,
    GiBellPepper,
    GiPineapple,
    GiRoastChicken
} from "react-icons/gi";

const pizzaList = {
    icon: <img src={icon_pizza} alt="icon pizza" />,
    data: [
        {
            name: "Primavera",
            valor: 25000,
            ingre: [{
                name: "Salsa napolitana",
                icon: <GiSaucepan />
            }, {
                name: "Queso mozzarella",
                icon: <GiCheeseWedge />
            }, {
                name: "Jamón",
                icon: <GiHamShank />
            }, {
                name: "Tocineta",
                icon: <GiBacon />
            }, {
                name: "Maíz dulce",
                icon: <GiCorn />
            }, {
                name: "Orégano",
                icon: <GiSaltShaker />
            }]
        }, {
            name: "Laurelys",
            valor: 35000,
            ingre: [{
                name: "Salsa napolitana",
                icon: <GiSaucepan />
            }, {
                name: "Queso mozzarella",
                icon: <GiCheeseWedge />
            }, {
                name: "Jamón",
                icon: <GiHamShank />
            }, {
                name: "Pepperoni",
                icon: <GiPlainCircle />
            }, {
                name: "Champiñón",
                icon: <GiMushroomGills />
            }, {
                name: "Pimentón",
                icon: <GiBellPepper />
            }, {
                name: "Tocineta",
                icon: <GiBacon />
            }, {
                name: "Maíz dulce",
                icon: <GiCorn />
            }, {
                name: "Orégano",
                icon: <GiSaltShaker />
            }]
        }, {
            name: "Hawuyana",
            valor: 25000,
            ingre: [{
                name: "Salsa napolitana",
                icon: <GiSaucepan />
            }, {
                name: "Queso mozzarella",
                icon: <GiCheeseWedge />
            }, {
                name: "Jamón",
                icon: <GiHamShank />
            }, {
                name: "Piña",
                icon: <GiPineapple />
            }, {
                name: "Maíz dulce",
                icon: <GiCorn />
            }, {
                name: "Orégano",
                icon: <GiSaltShaker />
            }]
        }, {
            name: "Margarita",
            valor: 20000,
            ingre: [{
                name: "Salsa napolitana",
                icon: <GiSaucepan />
            }, {
                name: "Queso mozzarella",
                icon: <GiCheeseWedge />
            }, {
                name: "Jamón",
                icon: <GiHamShank />
            }, {
                name: "Maíz dulce",
                icon: <GiCorn />
            }, {
                name: "Orégano",
                icon: <GiSaltShaker />
            }]
        }, {
            name: "Pollo",
            valor: 30000,
            ingre: [{
                name: "Salsa napolitana",
                icon: <GiSaucepan />
            }, {
                name: "Queso mozzarella",
                icon: <GiCheeseWedge />
            }, {
                name: "Jamón",
                icon: <GiHamShank />
            }, {
                name: "Pollo cocido",
                icon: <GiRoastChicken />
            }, {
                name: "Champiñón",
                icon: <GiMushroomGills />
            }, {
                name: "Maíz dulce",
                icon: <GiCorn />
            }, {
                name: "Orégano",
                icon: <GiSaltShaker />
            }]
        },
    ]
};

export default pizzaList;