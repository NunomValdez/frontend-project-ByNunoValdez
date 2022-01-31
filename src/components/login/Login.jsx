import {useState} from 'react'
import Input from '../compo.tailwind/Input';
// import './login.css';
import { AppContext } from '../../App';
import { useContext } from 'react';


export default function Login() {

    const [inputName, setInputName] = useState(false);


    const { userName, setUserName } = useContext(AppContext);

    const handleChange=(e)=>{
        setUserName(e.target.value); 
        // sempre q se escreve, o onChange actualiza o setState, que dps 
        //podemos usar no handleClick p conseguimos usar o valor do value só aquando do click no botao 
        // console.log(e.target.value);
    }

    

    const handleClick= () => {
        window.localStorage.setItem(`user ${userName}`, userName);
        setInputName(true) ;
        console.log(inputName)
    }

    return (
        <section>
            <div className="flex">
                <Input name="nome" onChange={handleChange} />
                <input type="button" value="Ok" onClick={handleClick} className="p-1 bg-diospiro cursor-pointer bg-opacity-70 px-6 border-2 ml-2 rounded-2xl hover:bg-tangerine active:bg-brick"/>
            </div>  
               { 
                inputName && 
                <p className="mx-auto animate-pulse text-sm font-semibold w-fit text-green-100 px-4 backdrop-brightness-50 border rounded-xl m-2 p-1">
                    Your name was saved
                </p>
                }
        </section>
        )
}