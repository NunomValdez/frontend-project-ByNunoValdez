import {useState, useEffect} from 'react'
import './HomePage.css';
import Login from '../../components/login/Login';
import FoodCatalog from './FoodCatalog';
import Footer from './Footer';
import ShopButton from '../checkout/ShopButton';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';


// import PaginationCatalog from '../../components/compo.tailwind/Pagination';

// pôr nesta página a Store/redux, para que todos os componentes tenham acesso aos respectivos states q precisam
// ver useContext



export default function HomePage() {
    const navigate = useNavigate();
    const { numberOfOrders } = useContext(AppContext)

    return (
        <>
            <main className="h-4/5">
                <section className=" bg-hero-pattern bg-fixed bg-no-repeat bg-center bg-cover h-4/5 sm:min-h-screen " >
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center py-7 text-white text-opacity-75 " >
                            <h1 className="text-7xl font-light my-40">Good Food</h1>
                            <h2 className="text-xl">The best food market</h2>
                        </div>
                        <div className="flex justify-start text-white p-3 pl-8 m-6">
                            <Login />
                        </div>
                        <a href="#food-catalog" className="hover:animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="h-36 w-4/6" fill="none" viewBox="0 0 24 24" stroke="lime">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </section>
                <section  id="food-catalog">
                    <div>
                        <FoodCatalog />
                    </div>
                    {/* <div>
                        <PaginationCatalog />
                    </div>*/}
                </section> 
                <section className="flex shrink justify-center p-2.5">
                    <ShopButton 
                    onClick={()=>navigate('/checkout')} 
                    nameButton="Go to cart" 
                    numberShop={numberOfOrders}/>
                </section>
                <section >
                    <Footer />
                </section>
            </main>
        </>
    )
}

// flex items-center justify-center py-9

// className="grid sm:grid-col-1 md:grid-col-2 xl:grid-col-3 h-fit "   - foodCatalog