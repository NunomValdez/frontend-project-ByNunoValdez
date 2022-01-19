import './App.css';
import "@material-tailwind/react/tailwind.css";
import HomePage from './pages/homePage/HomePage';
import Checkout from './pages/checkout/Checkout';
// import { useReducer } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

//o context tem de ser definido aqui, para q os vários states sejam globais...! (?)
//fazendo createContext, podemos usar a tag ...Provider para providenciar states/props
// globais aos componentes filhos, e assim passar info de um lado para o outro

// const [state, dispatch] = useReducer(reducer, initialState, init)


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/checkout" element={<Checkout />} />
        </>
      </Routes>
    </BrowserRouter>

  );
}


