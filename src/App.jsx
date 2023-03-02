import React, { Component } from "react";
import "./App.css";
import Carga from "./pages/Carga";
import Main from "./pages/Main.jsx";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         interfaz: "carga"
      };

      this.ventana = {
         carga: () => <Carga goToView={(v) => this.changeView(v)} />,
         main: () => <Main />,
      }
   }

   changeView(interfaz) {
      this.setState({ interfaz });
   }

   render() {
      return this.ventana[this.state.interfaz]();
   }
}

export default App;