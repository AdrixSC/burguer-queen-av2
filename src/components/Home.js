import React from "react";
import data from "./../data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import {Link} from "react-router-dom"

class Home extends React.Component {
    render () {
        return (<div className="App-container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
             <h1 className="App-logo">{data.nameRestaurant}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <Link to="/desayuno" className="desayuno">Desayuno</Link>
          </div>
          <div className="col-md-5">
            <Link to="/comida" className="comida">Comida</Link>              
         </div>
        </div>
      </div>)
    }
}      

export default Home