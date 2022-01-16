import {useState, useEffect} from 'react'
import Dropdownn from '../../components/compo.tailwind/Dropdown';
import './HomePage.css';
import Login from '../../components/login/Login';
import FoodCatalog from './FoodCatalog';
import Footer from './Footer';
import ShopButton from '../checkout/ShopButton';
import PaginationCatalog from '../../components/compo.tailwind/Pagination';

// pôr nesta página a Store/redux, para que todos os componentes tenham acesso aos respectivos states q precisam
// ver useContext

export default function HomePage() {

    return (
        <>
            <main className="h-4/6">
                <section className=" bg-hero-pattern bg-fixed bg-no-repeat bg-center bg-cover min-h-screen sm:min-h-screen " >
                    <div className="flex flex-col items-center py-7 text-white text-opacity-75 " >
                        <h1 className="text-7xl font-light my-40">Good Food</h1>
                        <h2>The best food market</h2>
                    </div> 
                    <div className="flex justify-start text-white p-3 pl-8 m-6">
                        <Login />
                    </div> 
                </section>
                <section>
                    <div>
                        <FoodCatalog />
                    </div>
                    {/* <div>
                        <PaginationCatalog />
                    </div>*/}
                </section> 
                <section className="flex shrink justify-center p-2.5">
                    <ShopButton nameButton="Go to cart" />
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