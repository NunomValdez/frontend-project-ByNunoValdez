import React from 'react';
import Button from '@material-tailwind/react/Button';
import { useNavigate } from 'react-router-dom';


// recebe por props do pai, a quantidade de produtos a comprar pelo user para renderizar o nr de items à dta no botao

export default function ShopButton(props) {
    const navigate = useNavigate();
    return (
        <Button
            color="blueGray"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={()=>navigate('/checkout')}
        >
            <span id="cart-image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </span>
            {props.nameButton}

            <span className="font-bold text-lg p-0.5 m-0.5 rounded-full bg-gradient-to-r from-lime-400 to-green">{props.numberShop}</span>
        </Button>
    )
}

//O span do botao tem de ter a quantidade de produtos a comprar, de forma dinamica {counter}, p.ex