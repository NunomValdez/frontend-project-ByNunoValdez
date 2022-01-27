import React from 'react'
import FoodCard from './FoodCard';
// import { useContext } from 'react';
// import { AppContext } from '../../App';

export default function FoodCards(props) {



    return (
    <>

    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto grid-flow-row 
            gap-10  min-w-min place-content-evenly p-4">
        {
        props.foodOptions.map(
            (foodOption)=> 
                <FoodCard
                id={foodOption.id}
                image={foodOption.image}
                name={foodOption.name}
                price={foodOption.price}
                description = {foodOption.Description}
                extras={foodOption.Extras}
                stock={foodOption.stock}
                // handleSelectedDish={handleSelectedDish} 
                //esta função serve para ir buscar info dos pratos/extras a um neto
                key={foodOption.id}
                className="col-auto"
                />
            )
        }
        </section>
    </>
    )
}