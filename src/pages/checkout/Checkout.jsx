import Button from '@material-tailwind/react/Button';
import React from 'react';
import './checkout.css';
import ShopButton from './ShopButton';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Checkout(props) {
    const navigate = useNavigate();

// nesta página terá de vir, por props, um array de pratos selecionados pelo user - STORE/REDUX
// tb tem de vir  a quantidade de pratos a comprar

// const [counter, setCounter] = useState('')
// este counter vai ter de ser usado num useEffect? 
// pq quero q dependa da selecao do utilizador

// const selectedDishes = useContext(AppContext)  
//---- dps aqui usamos apenas o nome da acção, e o context
//---- q está no pai é que vai fazer o que tem a fazer, consoante a acção q lhe passamos no filho q usa o context.
    
    const { dishes, setDishes } = useContext(AppContext)
    // console.log(dishes)

    //saber o preço TOTAL DOS PRATOS
    let totalPrice = 0; 
    const dishPrice = dishes.map(dish=>{
        const price = parseInt(dish.price.split(' ')[1].split('$')[0])
        totalPrice += price
    })
        // console.log(totalPrice)

        // const numberOfDishes=(dishes)=>{
        //     setNumberOfDishes(dishes.length)
        // }
const handleDeleteDish=(id)=>{
    setDishes(dishes.filter(dish=> dish.id!==id))
}
  

    return (
    <section className="checkout mx-auto mt-4 sm:justify-evenly">
            <section className="flex flex-col w-auto justify-between "> 
                        
                <h1 className="text-4xl p-2 titleCheckout">Shopping Cart</h1>
                    {
                        dishes.map((dish,i)=>{ 
                           return <div 
                           id="product-checkout" 
                           className="products flex flex-row border-b border-dashed border-slate-400 "
                           key={i}>
                            <div className="flex">
                              <span className="mr-3 text-red-400 active:text-red-700 cursor-pointer" id="trash" onClick={()=>handleDeleteDish(dish.id)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        </span>
                                <h4 className="text-safire text-md flex">{`${dish.name} 
                                ${dish.extra.length ===0 ? '' : ` with ${dish.extra} ` } `} </h4> 
                            </div>
                                <p>{dish.price}</p> 
                            </div>
                        })
                    } 
                <div className="flex products flex-row border-b border-dashed  border-slate-400">
                    < h2 className=" text-tangerine text-md">Orders: {dishes.length>=2 ? `${dishes.length} dishes`: `${dishes.length} dish`}</h2>
                    {/* se o user escolher mais que 1 prato, aparecerá no plural, se escolher 1 ou 0 pratos, aparecerá singular */}
                    <p className="text-lime-600 font-extrabold">Price: {totalPrice}$</p>
                </div>
                
            </section>
            <div className="my-14 w-4/5 mx-auto">
                <Form />
            </div>
             <section className="flex justify-evenly mt-8">
                <Button onClick={()=>navigate('/')}>Home</Button>
                <ShopButton nameButton="Order"/>
            </section>
    </section>
    )
}
//Quando o user selecionar os pratos e quantidades dos mesmos para fazer a compra, pode-se usar esse nr
// de pratos a comprar para se alterar a API, com a quantidade de stock - método PUT da API, no postman!
// faz-se PUT do elemento a alterar (através do id:  "".../Menu/id" -> clique no PUT), e actualiza-se o nr de stock
//caso stock ==0, mostrar msg ao user q nao há