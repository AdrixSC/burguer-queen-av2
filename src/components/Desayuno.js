import React from "react";
import data from "./../data.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class Desayuno extends React.Component {
   render () {
     return (
       <section>
         <div className="App-container">
           <div className="row">
             <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
                <h1 className="App-logo">{data.nameRestaurant}</h1>
             </div>
           </div>
           <div className="App-container">
           <div className="row">
             <div className="col-md-8 col-sm-8">
                 <div className="App-background-titulo">
                     <h2 className="App-titulo">{data.Titles[0]}</h2>
                   </div>
                     <table className="table App-table-bordered">
 
                       <thead>
                         <tr>
                           <th scope="col">Productos</th>
                           <th scope="col">Precio</th>
                           <th scope="col">Agregar</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <th scope="row" dataname={data.Desayuno[0].alimento}>{data.Desayuno[0].alimento}</th>
                           <td data-name={data.Desayuno[0].precio}>${data.Desayuno[0].precio}</td>
                           <td><button type="button" data-name={data.Desayuno[0].alimento} data-precio={data.Desayuno[0].precio} onClick={this.handleClick.bind(this)} className="btn btn-success">Agregar</button></td>
                         </tr>
                         <tr>
                           <th scope="row" data-name={data.Desayuno[1].alimento}>{data.Desayuno[1].alimento}</th>
                           <td data-name={data.Desayuno[1].precio}>${data.Desayuno[1].precio}</td>
                           <td><button type="button" data-name={data.Desayuno[1].alimento} data-precio={data.Desayuno[1].precio} onClick={this.handleClick} className="btn btn-success">Agregar</button></td>
                         </tr>
                         <tr>
                           <th scope="row" data-name={data.Desayuno[2].alimento}>{data.Desayuno[2].alimento}</th>
                           <td data-name={data.Desayuno[2].precio}>${data.Desayuno[2].precio}</td>
                           <td><button type="button" data-name={data.Desayuno[2].alimento} data-precio={data.Desayuno[2].precio} onClick={this.handleClick} className="btn btn-success">Agregar</button></td>
                         
                         </tr>
                         <tr>
                           <th scope="row" data-name={data.Desayuno[3].alimento}>{data.Desayuno[3].alimento}</th>
                           <td data-name={data.Desayuno[3].precio}>${data.Desayuno[3].precio}</td>
                           <td><button type="button" data-name={data.Desayuno[3].alimento} data-precio={data.Desayuno[3].precio} onClick={this.handleClick} className="btn btn-success">Agregar</button></td>
                         </tr>
                       </tbody>
                     </table>
             </div>
           </div>
         </div>
         </div>
 
       </section>
    );
   }
 }
 
 export default Desayuno;
 

