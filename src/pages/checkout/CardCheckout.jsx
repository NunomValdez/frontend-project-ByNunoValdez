import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'

export default function CardCheckout({dish, id, i, handleDeleteDish, handleDecrement, handlePlus, getPriceValue, stock}) {

    // const {stock, setStock}=useContext(AppContext);

   let instantStock= stock.get(dish.id)
    return (
        <>
            <div id={id} className="products flex flex-row border border-dashed border-slate-50 bg-white bg-opacity-60 shadow-lg rounded-xl overflow-hidden p-4 py-4">
                <section className="flex">
                    <span className="mr-2 self-center text-red-400 hover:text-orange-800 cursor-pointer"  onClick={()=>handleDeleteDish(i)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </span>
                    <img className="h-14 w-16 mr-3" src={`../assets/images${dish.image}`}/>
                    <div className="flex flex-col">
                    <h4 className="text-safire text-md flex">{`${dish.name} 
                        ${dish.extra.length ===0 ? '' : ` with ${dish.extra} ` } `}
                        </h4> 
                    <div className="flex ml-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleDecrement(dish, i, dish.id)} className="h-4 w-4 ml-1 cursor-pointer  text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handlePlus(dish, dish.id)} className="h-4 w-4 cursor-pointer text-lime-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </div>
                    </div>

                    <div className="ml-3">{dish.quantity}</div>
{/* tira a quantidade de pratos adicionados, ao stock */}
                </section>
                    <div className="flex flex-col justify-between">
                        <div className="text-xs text-slate-400">Stock: {stock.get(dish.id)}</div>
                        <p className="text-sky-900 bg-zinc-50 shadow-slate-900 text-lg shadow-lg rounded-md p-0.5">{`Price: ${getPriceValue(dish.price)*dish.quantity}`}</p> 
                    </div>
            </div>
        </>
    )
}
