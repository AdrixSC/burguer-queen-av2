import React from "react";
import data from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Comida from './components/Comida';
import Desayuno from './components/Desayuno';
import Home from './components/Home';


 class App extends React.Component {
   constructor(props){
     super( );
     this.state = { product: data.Desayuno[0].precio }
   }
   handleClick(event){
     this.setState({
       product: this.state.product + 5
     })

     console.log(event.target.dataset.name);
     //console.log(event.target.dataset.precio);
     console.log(this.state.product)
   }

  render () {
    return (
      <section>
        <Home />
        <Switch>
          <Route path="/" exact render = {() => {return(<Home />)} } />
          <Route path="/desayuno" components = {Desayuno} />
          <Route path="/comida" components = {Comida} />
        </Switch>
        
      </section>
      
      
   );
  }
}

export default App;
