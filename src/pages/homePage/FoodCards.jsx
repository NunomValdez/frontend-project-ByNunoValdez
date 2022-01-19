import React from 'react'
import FoodCard from './FoodCard';


export default function FoodCards(props) {

//____ função passada por props aos filhos para extrair a info dos pratos escolhidos
   const handleSelectedDish=(dish)=>{ 
       console.log(dish)
   } 

//______ 

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto grid-flow-row 
                 gap-10 bg-slate-100 min-w-min place-content-evenly p-4">
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
                    key={foodOption.id}

                    className="col-auto"
                    
                    />
                )
            }
            </div>
        </>
    )
}