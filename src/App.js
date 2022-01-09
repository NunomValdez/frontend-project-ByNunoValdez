import './App.css';
import "@material-tailwind/react/tailwind.css";
import LandingPage from './pages/homePage/HomePage';
import Checkout from './pages/checkout/Checkout';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/checkout" element={<Checkout />} />
        </>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
