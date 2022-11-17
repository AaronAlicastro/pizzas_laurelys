import React, { Component } from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ListaAccionable from "./componentes/ListaAcciopnable";
import PizzasCards from "./componentes/PizzasCards";
import IMG_pizza1 from "./images/pizza1.jpeg";
import IMG_pizza2 from "./images/pizza2.jpeg";
import IMG_pizza3 from "./images/pizza3.jpeg";
import IMG_pizza4 from "./images/pizza4.jpeg";
import IMG_pizza5 from "./images/pizza5.jpeg";
import IMG_pizza6 from "./images/pizza6.jpeg";
import IMG_pizza7 from "./images/pizza7.jpeg";
import IMG_pizza8 from "./images/pizza8.jpeg";
import IMG_pizza9 from "./images/pizza9.jpeg";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         interfaz: "wellcome"
      };

      // bienvenida
      this.opcionesWelcome = ["ver carta / hacer pedido", "contacto"];
      this.conc = [
         <p className="rowAround">
            <IconContext.Provider value={{ size: "1.2em" }}>
               <FaWhatsapp />
            </IconContext.Provider>
            300 6285380
         </p>,
         <p className="rowAround">
            <IconContext.Provider value={{ size: "1.2em" }}>
               <FaPhoneAlt />
            </IconContext.Provider>
            302 4964680
         </p>,
         <p className="rowAround">
            <span>{"<<"}</span>
            <span>Volver</span>
         </p>
      ];

      // cartas
      this.imagesToCards = [
         IMG_pizza1,
         IMG_pizza2,
         IMG_pizza3,
         IMG_pizza4,
         IMG_pizza5,
         IMG_pizza6,
         IMG_pizza7,
         IMG_pizza8,
         IMG_pizza9,
      ];
      this.desToCards = [
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
         ["Salsa", "Queso"],
      ]

      this.ventana = {
         wellcome: (
            <div className="windowContainers">
               <div className="containerLogo">
                  <h2>logo</h2>
               </div>
               <div className="circuloPizza">
                  <span className="titulos">Pizzas Laurelys</span>
                  <div className="peperoni" style={{ top: "40px", right: "30px" }}></div>
               </div>
               <ListaAccionable lista={this.opcionesWelcome} onClick={index => {
                  if (index == 0) this.setState({ interfaz: "carta" });
                  else this.setState({ interfaz: "contacto" });
               }} />
            </div>
         ),
         contacto: (
            <div className="windowContainers">
               <h2 className="titulos">¡Contáctanos!</h2>
               <ListaAccionable lista={this.conc} onClick={index => {
                  if (index == 2) this.setState({ interfaz: "wellcome" });
               }} />
            </div>
         ),
         carta: (
            <div>
               <h1 className="titulos">Carta</h1>
               <PizzasCards images={this.imagesToCards} des={this.desToCards} />
            </div>
         )
      }
   }

   render() {
      return (
         <div className="App">
            {this.ventana[this.state.interfaz]}
         </div>
      );
   }
}

export default App;