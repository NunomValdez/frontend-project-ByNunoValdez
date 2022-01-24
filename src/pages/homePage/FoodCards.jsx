import React from 'react'
import FoodCard from './FoodCard';
// import { useContext } from 'react';
// import { AppContext } from '../../App';

export default function FoodCards(props) {

// const { setDishes } = useContext(AppContext)

// //____ função passada por props aos filhos para extrair a info dos pratos escolhidos
//    const handleSelectedDish =(dish)=>{ 
//     //    console.log(dish.target.id) //id do elemento
//     //    console.log(dish.target.checked) // se estiver checked, foi selecionado e é para ir po carrinho!
//     //    console.log(dish)
//        setDishes(dish.target);
//    }  
//    //____ o prato será identificado pelo 1º caractere do ID, e o extra escolhido pelo valor do value! 
// console.log(props.foodOptions)

    return (
    <>
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto grid-flow-row 
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