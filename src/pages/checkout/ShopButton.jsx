import React from 'react';
import Button from '@material-tailwind/react/Button';


// recebe por props do pai, a quantidade de produtos a comprar pelo user para renderizar o nr de items à dta no botao

export default function ShopButton(props) {
    return (
        <Button
            color="red"
            buttonType="filled"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
        >

            {props.nameButton}

            <span className="font-bold text-lg p-1.5 m-0.5 rounded-full bg-gradient-to-r from-orange-400 to-orange">3</span>
        </Button>
    )
}

//O span do botao tem de ter a quantidade de produtos a comprar, de forma dinamica {counter}, p.ex