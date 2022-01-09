import React from 'react'
import FoodCard from './FoodCard';

export default function FoodCards(props) {


    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-0.5">
                {
                    props.foodOptions.map(
                        (foodOption)=> <FoodCard
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