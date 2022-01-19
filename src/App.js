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


export const AppContext = createContext();


export default function App() {

  // const [changeCheckbox, setChangeCheckbox] = useState(false);

  return (
  <AppContext.Provider value={'x'}>
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


