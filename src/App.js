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
   export const AppContext = createContext([]);
//agora q fiz o context para todos os filhos de App.js, posso passar os states dos componentes aqui 
//e os devidos componentes vão usar os states definidos aqui neste App, embora os usem lá dentro de si mesmos 
//através do useContext --> usar contexto dentro do elemento, contexto esse q é criado no pai de todos!
   export default function App() { 
    const [ dishes, setDishes ] = useState([]);
    // const [isDeleted, setIsDeleted]= useState(false);

    const [stock, setStock]= useState(new Map())



// console.log(dishes)
    //Usar o nome de Utilizador que o user colocou na landingPage, para o levar para o formulário:
    const [userName, setUserName] = useState('');
    // console.log(userName);
    
    //saber a quantidade de pedidos p pôr no botao do carrinho
    let numberOfOrders = dishes.length; 
    
//_____Hook reducer que agrega a funcao dishReducer, e gerencia os states / actions - desta maneira sabe-se onde 
//_____ estão a ser declarados os estados iniciais, e a funcao reducer q orquestra tudo

  return (
  <AppContext.Provider value={{ dishes, setDishes, numberOfOrders, userName, setUserName, stock, setStock}}>
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


