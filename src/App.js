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

// const [state, dispatch] = useReducer(reducer, initialState, init)


function App() {
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

export default App;
