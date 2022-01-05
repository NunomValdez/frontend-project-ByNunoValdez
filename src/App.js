import './App.css';
import "@material-tailwind/react/tailwind.css";
import LandingPageHero from './landing-page-comp/LandingPageHero';
import HeaderLandingPage from './header-components/HeaderLandingPage';
import Dropdownn from './compo.tailwind/Dropdown';


function App() {
  return (
    <div className="App">
      <HeaderLandingPage />
      <LandingPageHero />
      <Dropdownn />
    </div>
  );
}

export default App;
