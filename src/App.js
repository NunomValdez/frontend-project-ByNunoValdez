import './App.css';
import "@material-tailwind/react/tailwind.css";
import HomePage from './pages/homePage/HomePage';
import Checkout from './pages/checkout/Checkout';
import { createContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

//o context tem de ser definido aqui, para q os vários states sejam globais...! (?)
//fazendo createContext, podemos usar a tag ...Provider para providenciar states/props
// globais aos componentes filhos, e assim passar info de um lado para o outro

//agora q fiz o context para todos os filhos de App.js, posso passar os states dos componentes aqui 
//e os devidos componentes vão usar os states definidos aqui neste App, embora os usem lá dentro de si mesmos 
//através do useContext --> usar contexto dentro do elemento, contexto esse q é criado no pai de todos!

   export const AppContext = createContext([]);

   export default function App() { 
    const [ dishes, setDishes ] = useState([]);
    // const [numberDishes, setNumberOfDishes] = useState(0);
    
    //saber a quantidade de pedidos p pôr no botao do carrinho
    let numberOfOrders = dishes.length; 

//   const dishReducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_DISH':
//         return {
//          ...state,
//}
//       case 'REMOVE_DISH':
//         return {
//         ...state
//}
//       default: state;
//     }
//  }
// const inicialSelectedDishes = {   //variavel q define os states iniciais
//  dish1: 0,
//  dish2 :0,
// }

// const [dish, setDish] = useReducer(dishReducer, inicialSelectedDishes) 

//_____Hook reducer que agrega a funcao dishReducer, e gerencia os states / actions - desta maneira sabe-se onde 
//_____ estão a ser declarados os estados iniciais, e a funcao reducer q orquestra tudo

  return (
  <AppContext.Provider value={{ dishes, setDishes, numberOfOrders }}>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/checkout" element={<Checkout />} />
          </>
        </Routes>
      </BrowserRouter>
  </AppContext.Provider>

  );
}


