import React, { Component } from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ListaAccionable from "./componentes/ListaAcciopnable";
import PizzasCards from "./componentes/PizzasCards";
import Button from "./componentes/elementos/Button";
import IMG_logo from "./images/logo1.jpg";
// pizzas
import IMG_pizza1 from "./images/pizza1.jpeg";
import IMG_pizza2 from "./images/pizza2.jpeg";
import IMG_pizza3 from "./images/pizza3.jpeg";
import IMG_pizza8 from "./images/pizza8.jpeg";
import IMG_pizza9 from "./images/pizza9.jpeg";
import IMG_basePizza from "./images/basePizza.jpeg";
// ingredientes
import IMG_champi from "./images/champi.jpeg";
import IMG_jamon from "./images/jamon.jpg";
import IMG_maizDulce from "./images/maizDulce.jpg";
import IMG_mosarela from "./images/mosarela.png";
import IMG_oregano from "./images/oregano.jpeg";
import IMG_peperoni from "./images/peperoni.jpeg";
import IMG_pimenton from "./images/pimenton.jpeg";
import IMG_pina from "./images/pina.jpeg";
import IMG_pollo from "./images/pollo.jpeg";
import IMG_salsaNap from "./images/salsaNap.jpeg";
import IMG_tocineta from "./images/tocineta.jpg";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         interfaz: "wellcome",
         tiemposPedir: 0,
         listaSeleccionadaTiempos: [],
         ingredientesSeleccionados: {
            names: [],
            images: []
         }
      };
      this.eniarPedido = messages => <Button onClick={() => {
         messages = [
            "Hola, te escribo para hacer el siguiente pedido \n",
            ...messages
         ];
         let aEnviar = (messages.map(m => (m + "\n")) + "").replaceAll(",", " ");
         window.navigator.clipboard.writeText(aEnviar);
         let pre = window.confirm("Su pedido se ha copiado en su porta papeles, ahora procederemos a abrir el whatsapp en cuestión para que haga el envío");
         if (pre) window.open("https://api.whatsapp.com/send?phone=573006285380");
      }}>¡Enviar Pedido!</Button>

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
         IMG_pizza8,
         IMG_pizza9,
      ];
      this.desToCards = [
         { name: "Primavera", des: ["Salsa napolitana", "Queso mozzarella", "Jamón ahumado", "Tocineta", "Maíz dulce", "Orégano"], precio: 25000 },
         { name: "Laurelys", des: ["Salsa napolitana", "Queso mozzarella", "Jamón ahumado", "peperoni", "champiñon", "pimenton", "tocineta", "Maíz dulce", "Orégano"], precio: 20000 },
         { name: "Hawuyana", des: ["Salsa napolitana", "Queso mozzarella", "Jamón ahumado", "Piña en almibal", "Maíz dulce", "Orégano"], precio: 25000 },
         { name: "Margarita", des: ["Salsa napolitana", "Queso mozzarella", "Jamón ahumado", "Maíz dulce", "Orégano"], precio: 20000 },
         { name: "Pollo con champiñon", des: ["Salsa napolitana", "Queso mozzarella", "Jamón ahumado", "Pollo cocido", "Champiñón", "maíz dulce", "Orégano"], precio: 25000 },
      ]

      this.ventana = {
         wellcome: () => {
            return (
               <div className="windowContainers">
                  <div className="containerLogo">
                     <img src={IMG_logo} alt="logo" />
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
            );
         },
         contacto: () => {
            return (
               <div className="windowContainers">
                  <h2 className="titulos">¡Contáctanos!</h2>
                  <ListaAccionable lista={this.conc} onClick={index => {
                     if (index == 2) this.setState({ interfaz: "wellcome" });
                     else if (index == 0) window.open("https://api.whatsapp.com/send?phone=573006285380");
                     else {
                        window.navigator.clipboard.writeText("3024964680");
                        window.alert("¡Numero copiado!");
                     }
                  }} />
               </div>
            );
         },
         carta: () => {
            return (
               <div>
                  <h1 className="titulos">Carta</h1>
                  <PizzasCards images={this.imagesToCards} des={this.desToCards} eniarPedido={this.eniarPedido} />
                  <div className="rowCenter">
                     <Button onClick={() => {
                        this.setState({
                           interfaz: "pedirTiempos",
                           tiemposPedir: 2,
                        });
                     }}>¡Pedir 2 tiempos!</Button>
                     <Button onClick={() => {
                        this.setState({
                           interfaz: "makeEspecial",
                           ingredientesSeleccionados: {
                              names: [],
                              images: []
                           }
                        });
                     }}>¡Pedir una especial!</Button>
                     <Button onClick={() => {
                        this.setState({
                           interfaz: "pedirTiempos",
                           tiemposPedir: 4,
                        });
                     }}>¡Pedir 4 tiempos!</Button>
                  </div>
                  <div className="rowCenter">
                     <Button onClick={() => this.setState({ interfaz: "wellcome" })}>{"<<"} salir</Button>
                  </div>
               </div>
            );
         },
         pedirTiempos: () => {
            let indexReal = [];
            let listaName = this.desToCards.filter((ds, i) => {
               if (!this.state.listaSeleccionadaTiempos.includes(ds.name)) {
                  indexReal.push(i);
                  return true;
               }
               return false;
            }).map((ds, i) => { return { name: ds.name, i: indexReal[i] } });
            return (
               <div>
                  <p className="des titulos">
                     De nuestra Variedad, puede elegir {this.state.tiemposPedir}. Precio:
                     {(this.state.tiemposPedir == 2) ? " 30000" : " 35000"}
                  </p>

                  <div className="dividirDos">
                     <div className="dividirDos_div">
                        {
                           (this.state.listaSeleccionadaTiempos.length) ? <div>
                              <h2 className="textoCentrado">Seleccionadas</h2>
                              <ListaAccionable lista={this.state.listaSeleccionadaTiempos} onClick={index => {
                                 this.state.listaSeleccionadaTiempos.splice(index, 1);
                                 this.setState({
                                    listaSeleccionadaTiempos: this.state.listaSeleccionadaTiempos
                                 });
                              }} />
                           </div> : <h2>No ha seleccionado aún</h2>
                        }
                     </div>
                     <div className="dividirDos_div divElegir">
                        {
                           (this.state.listaSeleccionadaTiempos.length == this.state.tiemposPedir) ?
                              <h2>Límite alcanzado</h2> :
                              <ListaAccionable
                                 lista={listaName.map(ls => ls.name)}
                                 onClick={index => {
                                    this.state.listaSeleccionadaTiempos.push(this.desToCards[listaName[index].i].name);
                                    this.setState({
                                       listaSeleccionadaTiempos: this.state.listaSeleccionadaTiempos
                                    });
                                 }}
                              />
                        }
                     </div>
                  </div>

                  <div className="rowCenter">
                     <Button onClick={() => {
                        this.state.listaSeleccionadaTiempos = [];
                        this.setState({ interfaz: "carta" })
                     }}>{"<<"} volver</Button>
                     {
                        (this.state.listaSeleccionadaTiempos.length == this.state.tiemposPedir) ?
                           this.eniarPedido([
                              (this.state.tiemposPedir == 2) ?
                                 ("1 pizza 2 tiempos de " + this.state.listaSeleccionadaTiempos).replaceAll(",", ", ") :
                                 ("1 pizza 4 tiempos de " + this.state.listaSeleccionadaTiempos).replaceAll(",", ", ")
                           ]) : ""
                     }
                  </div>
               </div>
            );
         },
         makeEspecial: () => {
            let key = 0;
            const addIngrediente = (name, img) => {
               this.state.ingredientesSeleccionados.names = [name, ...this.state.ingredientesSeleccionados.names];
               this.state.ingredientesSeleccionados.images = [img, ...this.state.ingredientesSeleccionados.images];
               this.setState({ ingredientesSeleccionados: this.state.ingredientesSeleccionados });
            }
            const deleteIngrediente = index => {
               this.state.ingredientesSeleccionados.images.splice(index, 1);
               this.state.ingredientesSeleccionados.names.splice(index, 1);
               this.setState({ ingredientesSeleccionados: this.state.ingredientesSeleccionados });
            }

            return (
               <div>
                  <Button onClick={() => this.setState({ interfaz: "carta" })}>{"<<"} volver</Button>
                  <h1 className="titulos">¡Haz tu pizza!</h1>
                  <div className="dividirDos" style={{ margin: "30px var(--margen)", boxSizing: "border-box" }}>
                     <p style={{ flexGrow: "1", fontSize: "var(--textoMediano)" }}>Cada ingrediente que agregues, le aumentará el valor de la pizza según su valor de porción</p>
                     {
                        (this.state.ingredientesSeleccionados.images.length) ?
                           <div style={{ flexGrow: "1" }}>
                              {
                                 this.eniarPedido([
                                    "Una pizza especial con los siguientes ingredientes",
                                    ...this.state.ingredientesSeleccionados.names
                                 ])
                              }
                           </div> : ""
                     }
                  </div>
                  <div className="dividirDos">
                     <div className="dividirDos_div makeEspecial_div_left">
                        {
                           (this.state.ingredientesSeleccionados.images.length) ?
                              this.state.ingredientesSeleccionados.images.map((ing, i) => {
                                 key++;
                                 return <div key={key} className="secciones_makeEspecial">
                                    <img src={ing} alt="ingredientes" className="IMG_ingredientes" onClick={() => deleteIngrediente(i)} />
                                 </div>
                              }) : ""
                        }
                        <img style={{ background: "none" }} src={IMG_basePizza} alt="base de pizza" />
                     </div>
                     <div className="dividirDos_div makeEspecial_div_right">
                        {/* INGREDIENTES: 
                           salsanapolitana,
                           queso mozzarela,
                           jamon ahumado,
                           maiz dulce,
                           oregano,
                           tocineta,
                           piña,
                           pollo,
                           champiñon,
                           pepperoni,
                           pimenton,
                     */}
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Salsa napolitana", IMG_salsaNap)}>
                              <img src={IMG_salsaNap} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Salsa napolitana</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Queso mozzarella", IMG_mosarela)}>
                              <img src={IMG_mosarela} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Queso mozzarella</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Jamon ahumado", IMG_jamon)}>
                              <img src={IMG_jamon} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>jamon ahumado</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Maiz dulce", IMG_maizDulce)}>
                              <img src={IMG_maizDulce} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Maíz dulce</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Oregano", IMG_oregano)}>
                              <img src={IMG_oregano} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Orégano</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Tocineta", IMG_tocineta)}>
                              <img src={IMG_tocineta} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Tocineta</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Piña", IMG_pina)}>
                              <img src={IMG_pina} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>piña</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Pollo", IMG_pollo)}>
                              <img src={IMG_pollo} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Pollo</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Champiñon", IMG_champi)}>
                              <img src={IMG_champi} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Champiñón</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Pepperoni", IMG_peperoni)}>
                              <img src={IMG_peperoni} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Pepperoni</span>
                        </div>
                        <div className="containerCajaIngredientes">
                           <div className="cajaIngredientes" onClick={() => addIngrediente("Pimenton", IMG_pimenton)}>
                              <img src={IMG_pimenton} alt="ingredientes" className="IMG_ingredientes" />
                           </div>
                           <span>Pimenton</span>
                        </div>
                     </div>
                  </div>
               </div>
            );
         }
      }
   }

   render() {
      return (
         <div className="App">
            {this.ventana[this.state.interfaz]()}
         </div>
      );
   }
}

export default App;