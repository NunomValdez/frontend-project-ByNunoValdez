import {useState} from 'react'
import Input from '../compo.tailwind/Input';
// import './login.css';
import { AppContext } from '../../App';
import { useContext } from 'react';


export default function Login() {

    // const [state, setState] = useState('');

    const { userName, setUserName } = useContext(AppContext);


    const handleChange=(e)=>{
        setUserName(e.target.value); 
        // sempre q se escreve, o onChange actualiza o setState, que dps 
        //podemos usar no handleClick p conseguimos usar o valor do value só aquando do click no botao 
        // console.log(e.target.value);
    }

    const handleClick= () => {
        window.localStorage.setItem(`user ${userName}`, userName);
    }

    return (
            <section>
                <div className="flex">
                    <Input name="nome" onChange={handleChange} />
                    <input type="button" value="Ok" onClick={handleClick} className="p-1 bg-diospiro bg-opacity-70 border-2 ml-2 rounded-2xl hover:bg-tangerine active:bg-brick"/>
                </div>
            </section>
    )
}
//fazer: se o utilizador nao existir: pede registo, se existir: faz o login