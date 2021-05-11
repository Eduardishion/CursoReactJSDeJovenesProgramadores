import React from "react";
import {Container,Row} from 'reactstrap';
import "./App.css";
import Producto from "./Componentes/Producto";
import Navigation from "./Componentes/Navigation";
import {listaProductos} from './listaProductos.json'


//version con clase y mapeo de archivo json y carga en arreglo y muestro a la vista recorriendo cada componente con un map 
//y guardandolo en el arreglo
//verificamos si se ha cargado la lista de productos 
console.log(listaProductos);
class App extends React.Component{

  //constructor de clase
  constructor(){
    super();
    //estado del componente
    this.state={
      listaProductos
    };
  }

  render(){
      const arregloComponentes = this.state.listaProductos.map(
        (listaProductos , i)=>{
          //console.log(i);
          return(
            <Producto 
              //asociamos el indice del producto a sus props para evitar el wairning 
              key= {i}
              titulo = {listaProductos.titulo}
              imagen = {listaProductos.imagen}
              descripcion ={listaProductos.descripcion}
              precio ={listaProductos.precio}
              stock={listaProductos.stock}
            />
          )
        }
      );
      return(
        <Container>
          <Navigation titulo="Mi primer sitio de compras en react" />
          <Row>
               {arregloComponentes}    
          </Row>
        </Container>
      );

    
  }
}

//version con funcion
// function App() {
//   return (
//     <div>
//       
//       <Container>
//         <Navigation titulo="Mi primer sitio de compras" />
//         <Row>
//           <Producto
//             titulo="iphone s4"
//             imagen="https://http2.mlstatic.com/D_NQ_NP_756696-MLM42543784317_072020-O.webp"
//             precio="7000"
//             descripcion="iphone s4 con camara de alta deficion "
//           />
//           <Producto
//             titulo="iphone s5"
//             imagen="https://resources.claroshop.com/medios-plazavip/mkt/5aaad569abf0c_ipod-touch-blue_2jpg.jpg"
//             precio="8500"
//             descripcion="iphone s5 con camara de alta deficion"
//           />
//           <Producto
//             titulo="Xaomi"
//             imagen="https://s13emagst.akamaized.net/products/30943/30942473/images/res_a47842d791725a7e0570a13b23ce4aea.jpg"
//             precio="4000"
//             descripcion="Xaomi con camara de alta deficion"
//           />
//           <Producto
//             titulo="iphone s6"
//             imagen="https://s13emagst.akamaized.net/products/478/477523/images/res_05ecd80d248aa3d961b97a7037f45bd9.jpg"
//             precio="10000"
//             descripcion="iphone s6 con camara que permite grabar en hd"
//           />
//         </Row>
//       </Container>
//     </div>
//   );
// }

export default App;
