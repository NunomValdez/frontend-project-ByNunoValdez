import Button from '@material-tailwind/react/Button';
import React from 'react';
import './checkout.css';
import ShopButton from './ShopButton';
import Form from './Form';
import CardCheckout from './CardCheckout';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect} from 'react';
import { AppContext } from '../../App';

export default function Checkout(props) {
    const navigate = useNavigate();

    const [counter, setCounter] = useState(1) //counter da quantidade de pratos selecionados;
    const [showForm, setShowForm]=useState(false);
    // nesta página terá de vir, por props, um array de pratos selecionados pelo user - STORE/REDUX/useCONTEXT
    // tb tem de vir  a quantidade de pratos a comprar _______//______
    const { dishes, setDishes, stock, setStock} = useContext(AppContext)
    //---- dps aqui usamos apenas o nome da função q actualiza o state/context q está no pai(dishes)
    

    //função que retira o valor do preço de um prato selecionado (preço na API está em string)
    let getPriceValue =(dolarPrice)=>{
  return  parseInt(dolarPrice.split(' ')[1].split('$')[0])
    }

    //saber o preço TOTAL dos pratos
    let totalPrice = 0; 
    const dishPrice = dishes.map(dish=>{
    totalPrice += (getPriceValue(dish.price)*dish.quantity)
    })

// Apagar um prato do carrinho:
const handleDeleteDish=(i,id)=>{
    const newDishes = [...dishes]
        newDishes.splice(i, 1)
        setDishes(newDishes) //retorna os pratos que tiverem o id DIFERENTE
        console.log(stock.set(id, stock.get(id)+1)) //quando o prato é apagado, incrementa o stock desse prato(id) em 1
}

// console.log(stock.get(selectedId))
//Para termos as quantidades de cada pratos seleccionados:
// let instantStock = stock.get(selectedId);
const handlePlus=(dish, id)=>{
    console.log(stock.get(id)) //para conseguirmos ver a quantidade de stock associado a determinado id, temos de fazer o stock.get(id)
     if(stock.get(id)>0){
        setCounter(dish.quantity +=1)
        console.log(stock.set(id,stock.get(id)-1)) //se o stock.get>0, entao temos de actualizar o stock, fazendo o set desse mm stock, para aquele id usado
        // stock.set(id) -=1 
    }
    // setStock(stock-1)
    // console.log(stock)
    }
// se a quantidade for >1, decrementa, se for menor que 1, apaga o elemento -> o filter removia todos os elementos, 
// por isso achei melhor usar o splice mas, uma vez que este altera o array original, fiz uma cópia deste, e depois o setDishes
// actualiza o estado do array dishes, passando-lhe o valor do array copiado e alterado! assim temos um novo array sem o elemento decrementado até ser = a 1:
const handleDecrement=(dish, i, id)=>{  
    if(dish.quantity>1){
        console.log(id)       
        console.log(stock.set(id,stock.get(id)+1))
        console.log(stock.get(id))
        setCounter(dish.quantity -= 1)

    }else{
        const newDishes = [...dishes]
        newDishes.splice(i, 1)
        setDishes(newDishes)
        console.log(stock.set(id,stock.get(id)+1))
    }
}

// useEffect(()=>{
// const handleClickOrder=()=>{
//     console.log(setShowForm(showForm))
// }}, [])
const handleClickOrder=()=>{
    setShowForm(!showForm)
}


    return (
    <section className="checkout mx-auto mt-4 sm:justify-evenly">
        <section className="flex flex-col w-auto justify-between ">            
            <h1 className="text-4xl p-2 titleCheckout">Shopping Cart</h1>
                {
                dishes.map((dish,i)=>
                 <CardCheckout
                    id={`${i}-${dish.id}CardCheckoutId`}
                    key={i}
                    className="h-12"
                    dish={dish} 
                    stock={stock}
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
        <div className="">
            {
                showForm && 
                <section className="mx-auto">
                    <Form />
                </section>
            }  
         </div>
          <section className="flex justify-evenly mt-8 form_div">
            <Button className="rounded-2xl" onClick={()=>navigate('/')}>Home</Button>
            <ShopButton nameButton="Order" numberShop={dishes.length} onClick={handleClickOrder}/>
        </section>
    </section>
    )
}
//Quando o user selecionar os pratos e quantidades dos mesmos para fazer a compra, pode-se usar esse nr
// de pratos a comprar para se alterar a API, com a quantidade de stock - método PUT da API, no postman!
// faz-se PUT do elemento a alterar (através do id:  "".../Menu/id" -> clique no PUT), e actualiza-se o nr de stock
//caso stock ==0, mostrar msg ao user q nao há