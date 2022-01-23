import Button from '@material-tailwind/react/Button';
import React from 'react';
import './checkout.css';
import ShopButton from './ShopButton';
import Form from './Form';
import CardCheckout from './CardCheckout';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../../App';

export default function Checkout(props) {
    const navigate = useNavigate();

// nesta página terá de vir, por props, um array de pratos selecionados pelo user - STORE/REDUX
// tb tem de vir  a quantidade de pratos a comprar

    const [counter, setCounter] = useState(1)

//---- dps aqui usamos apenas o nome da acção, e o context
//---- q está no pai é que vai fazer o que tem a fazer, consoante a acção q lhe passamos no filho q usa o context.
    
    const { dishes, setDishes } = useContext(AppContext)
    // console.log(dishes)

    //função que retira o valor do preço de um prato selecionado
    let getPriceValue =(dolarPrice)=>{
  return  parseInt(dolarPrice.split(' ')[1].split('$')[0])
    }

    //saber o preço TOTAL dos pratos
    let totalPrice = 0; 
    const dishPrice = dishes.map(dish=>{
    totalPrice += (getPriceValue(dish.price)*dish.quantity)
    })

// Apagar um prato do carrinho:
const handleDeleteDish=(i)=>{
    const newDishes = [...dishes]
        newDishes.splice(i, 1)
        setDishes(newDishes) //retorna os pratos que tiverem o id DIFERENTE

}

//Para termos as quantidades de cada pratos seleccionados:
const handlePlus=(dish)=>{
    setCounter(dish.quantity +=1)
    }
const handleDecrement=(dish, i)=>{
    if(dish.quantity>1){
        setCounter(dish.quantity -= 1)
    }else{
        const newDishes = [...dishes]
        newDishes.splice(i, 1)
        setDishes(newDishes)
    }
}

    return (
    <section className="checkout mx-auto mt-4 sm:justify-evenly">
        <section className="flex flex-col w-auto justify-between ">            
            <h1 className="text-4xl p-2 titleCheckout">Shopping Cart</h1>
                {
                dishes.map((dish,i)=>
                 <CardCheckout
                    id={`${i}-${dish.id}cardCheckoutId`}
                    key={i}
                    className="h-12"
                    dish={dish} 
                    i={i} 
                    handleDecrement={handleDecrement} 
                    handlePlus={handlePlus} 
                    getPriceValue={getPriceValue}
                    handleDeleteDish={handleDeleteDish}/>
                    )
                } 
            <div className="flex products flex-row border-b border-dashed  border-slate-400">
                < h2 className=" text-tangerine text-md">Orders: {dishes.length>=2 ? `${dishes.length} dishes`: `${dishes.length} dish`}</h2>
                {/* se o user escolher mais que 1 prato, aparecerá no plural, se escolher 1 ou 0 pratos, aparecerá singular */}
                <p className="text-lime-600 font-extrabold">Total: {totalPrice}$</p>
            </div>
            
        </section>
        {/* <div className="my-14 w-4/5 mx-auto">
            <Form />
        </div> */}
            <section className="flex justify-evenly mt-8">
            <Button className="rounded-2xl" onClick={()=>navigate('/')}>Home</Button>
            <ShopButton nameButton="Order"/>
        </section>
    </section>
    )
}
//Quando o user selecionar os pratos e quantidades dos mesmos para fazer a compra, pode-se usar esse nr
// de pratos a comprar para se alterar a API, com a quantidade de stock - método PUT da API, no postman!
// faz-se PUT do elemento a alterar (através do id:  "".../Menu/id" -> clique no PUT), e actualiza-se o nr de stock
//caso stock ==0, mostrar msg ao user q nao há