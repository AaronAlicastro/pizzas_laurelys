import React, { useState } from "react";
import dataFrom from "./componentes/dataForms";
import { IconContext } from "react-icons";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import IMG_logo from "../images/logo.jpeg";
import pizzaHumo from "../images/pizzaHumo.jpg";
import { useAlert } from "react-alert";
import pizzaList from "./componentes/pizzaList";

function Main() {
    let alert = useAlert();
    let [view, setView] = useState("carta");
    let [dataView, setDataView] = useState({});
    let [totalCarrito, setTotalCarrito] = useState(0);
    let [productosCarrito, setProductosCarrito] = useState([]);
    let key = 0;

    const setVistaNav = (target, v) => {
        for (let btn of document.querySelectorAll(".btnNav")) {
            btn.classList.add("secondary");
        } target.classList.remove("secondary");
        setView(v);
    }
    const agregarAlCarrito = (pr, count) => {
        productosCarrito.push({
            name: pr.name,
            valor: pr.valor,
            count
        });
        setProductosCarrito(productosCarrito);
        setTotalCarrito(totalCarrito + count);
        setView("carta");
        alert.show("¡Agregado!");
    }
    const vista = {
        carta: () => <div className="grid_cardPizzas">
            {
                pizzaList.data.map(dt => {
                    key++;
                    return <article key={key} className="cardPizzas columnCenter">
                        {pizzaList.icon}
                        <h3 className="textoCentrado">{dt.name}</h3>
                        <button onClick={() => {
                            setDataView(dt);
                            setView("cortinaAgregarCarrito");
                        }}>Consultar</button>
                    </article>
                })
            }
        </div>,
        contacto: () => <div className="totalPanel columnCenter">
            <h2>¡Contátanos!</h2>
            <h6>3006285380</h6>
            <h6>3024964680</h6>
        </div>,
        cortinaAgregarCarrito: (producto) => <div className="cortinaPizza rowAround">
            <img src={pizzaHumo} alt="pizza humo" />
            <div>
                <div className="rowCenter">
                    <span onClick={() => setView("carta")}>
                        <IconContext.Provider value={{ size: "2.7em" }}>
                            <FaTimes />
                        </IconContext.Provider>
                    </span>
                </div>
                <h2 style={{ margin: "15px 0" }} className="textoCentrado">{producto.name}</h2>
                <h3 style={{ margin: "15px 0" }} className="textoCentrado">{producto.valor}</h3>
                <ul>
                    Ingredientes:
                    {
                        producto.ingre.map(ingre => {
                            key++;
                            return <li key={key}>
                                <span>{ingre.icon}</span>
                                <span>{ingre.name}</span>
                            </li>
                        })
                    }
                </ul>
                <form id="formAgregarProCarrito">
                    <input type="number" name="count" placeholder="Cantidad" />
                    <button onClick={e => {
                        e.preventDefault();
                        let { campos, camposLlenos } = dataFrom("#formAgregarProCarrito");
                        if (camposLlenos) agregarAlCarrito(producto, parseInt(campos.count));
                        else alert.show("Debes ingresar la cantidad");
                    }}>Agregar al carrito</button>
                </form>
            </div>
        </div>,
        carrito: () => {
            let totalCheck = 0;
            return <div className="totalPanel columnCenter">
                {
                    (productosCarrito.length) ? <div>
                        {
                            productosCarrito.map((pr, i) => {
                                key++; totalCheck += (pr.valor * pr.count);
                                return <article key={key} className="rowAround">
                                    <h3 style={{ margin: "0 15px 0 0" }}>{pr.name}</h3>
                                    <span style={{ margin: "0 15px 0 0" }}>({pr.count})</span>
                                    <button
                                        className="secondary btnPequeno"
                                        onClick={() => {
                                            let pre = window.confirm("¿Desea quitarlo?");
                                            if (pre) {
                                                setTotalCarrito(totalCarrito - pr.count);
                                                productosCarrito.splice(i, 1);
                                                setProductosCarrito(productosCarrito);
                                                setDataView((dataView) ? false : true);
                                            }
                                        }}
                                    >
                                        <IconContext.Provider value={{ size: "1.3em" }}>
                                            <FaTimes />
                                        </IconContext.Provider>
                                    </button>
                                </article>
                            })
                        }
                        <article className="totalCount rowCenter">Total: {totalCheck}</article>
                        <div className="rowCenter">
                            <button className="btnPequeno" onClick={() => {
                                let mensaje = "Hola, me gustaría hacerte el siguiente pedido \n \n";
                                mensaje += productosCarrito.map(pr => `${pr.count} -- ${pr.name}`);
                                window.open(`https://api.whatsapp.com/?phone='573006285380'?send='${mensaje}'`);
                            }}>Enviar pedido</button>
                        </div>
                    </div> :
                        <h3>No hay productos agregados</h3>
                }
            </div>
        }
    }

    return <div className="totalPanel">
        <div className="containerLogo rowCenter">
            <img src={IMG_logo} alt="Logo" />
        </div>
        <nav style={{ marginTop: "20px" }}>
            <ul><li className="cursive normalNegrita">Pizzas Laurelys</li></ul>
            <ul>
                <li>
                    <button
                        className="btnNav"
                        onClick={e => setVistaNav(e.target, "carta")}
                    >Carta</button>
                </li>
                <li>
                    <button
                        className="btnNav secondary"
                        onClick={e => setVistaNav(e.target, "contacto")}
                    >Contacto</button>
                </li>
                <li className="shoppingCar">
                    <div>{totalCarrito}</div>
                    <span onClick={() => setView("carrito")}>
                        <IconContext.Provider value={{ size: "1.7em" }}>
                            <FaShoppingCart />
                        </IconContext.Provider>
                    </span>
                </li>
            </ul>
        </nav>
        {vista[view](dataView)}
    </div>
}

export default Main;