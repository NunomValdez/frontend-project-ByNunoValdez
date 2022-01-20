import Button from '@material-tailwind/react/Button';
import React from 'react';
import './checkout.css';
import ShopButton from './ShopButton';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

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
//Quando o user selecionar os pratos e quantidades dos mesmos para fazer a compra, pode-se usar esse nr
// de pratos a comprar para se alterar a API, com a quantidade de stock - método PUT da API, no postman!
// faz-se PUT do elemento a alterar (através do id:  "".../Menu/id" -> clique no PUT), e actualiza-se o nr de stock
//caso stock ==0, mostrar msg ao user q nao há