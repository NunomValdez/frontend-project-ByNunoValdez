import React from 'react'
import FoodCard from './FoodCard';

export default function FoodCards(props) {


    return (
        <>
            <div className="grid grid-cols-3 auto-rows-auto grid-rows-3 grid-flow-row 
             gap-10 bg-slate-100 min-w-min place-content-evenly">
                {
                    props.foodOptions.map(
                        (foodOption)=> 
                        <FoodCard
                        food={foodOption}
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