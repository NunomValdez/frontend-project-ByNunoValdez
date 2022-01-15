import React from 'react'
import FoodCard from './FoodCard';

export default function FoodCards(props) {

    


    return (
        <>
            <div className="grid sm:grid-col2-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto grid-rows-3 grid-flow-row 
             gap-10 bg-slate-100 min-w-min place-content-evenly sm:grid-col-1 md:grid-col-2 xl:grid-col-3 p-4">
                {
                    props.foodOptions.map(
                        (foodOption)=> 
                        <FoodCard

                        image={foodOption.image}
                        name={foodOption.name}
                        price={foodOption.price}
                        description = {foodOption.Description}
                        extras={foodOption.Extras}
                        stock={foodOption.stock}

                        key={foodOption.id}

                        className="col-auto"
                        
                        />
                    )
                }
            </div>
        </>
    )
}
// flex flex-row border-gray-900 grow flex-wrap      