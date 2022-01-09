import {useState, useEffect} from 'react'
import Dropdownn from '../../components/compo.tailwind/Dropdown';
import './HomePage.css';
import Login from '../../components/login/Login';
import FoodCatalog from './FoodCatalog';
import Footer from './Footer';

export default function LandingPage() {

    

    return (
        <>
            <article className="h-4/6">
                <section className=" bg-hero-pattern bg-fixed bg-no-repeat bg-center bg-cover min-h-screen" >
                    <div className="flex justify-end text-white p-1 pr-4">
                        <Login />
                    </div> 
                    <div className="flex flex-col items-center py-16 text-white text-opacity-75 my-12" >
                        <h1 className="text-7xl font-light">Good Food</h1>
                        <h2>Your best food market</h2>
                    </div> 
                </section>
                <section>
                    <div className="grid ">
                        <FoodCatalog />
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </article>
        </>
    )
}

// flex items-center justify-center py-9