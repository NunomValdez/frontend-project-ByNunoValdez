import Button from '@material-tailwind/react/Button';
import React from 'react';
import './checkout.css';
import ShopButton from './ShopButton';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

export default function Checkout(props) {
    const navigate = useNavigate();

    // nesta página terá de vir, por props, um array de pratos selecionados pelo user - STORE/REDUX

    // tb tem de vir  a quantidade de pratos a comprar

    // const [counter, setCounter] = useState('')
// este counter vai ter de ser usado num useEffect? 
// pq quero q dependa da selecao do utilizador
    

    return (
    <section className="mx-auto mt-4 sm:justify-evenly">
            <section className="flex flex-col w-auto justify-between "> 
                        
                <h1 className="text-4xl p-2">Shopping Cart</h1>

                <div id="product-checkout" className="products flex flex-row border-b border-dashed border-black ">
                    <h2 className="text-safire text-lg">Produto</h2>
                    <p>Preço do produto</p>
                    
                </div>

                <div className="flex products flex-row border-b border-dashed  border-black">
                    < h2 className=" text-safire text-lg">Total</h2>
                    <p>preço da cena toda</p>
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
