import {useState} from 'react'
import Input from '../compo.tailwind/Input';
// import './login.css';


export default function Login() {

    const [state, setState] = useState('');

    const handleChange=(e)=>{
        setState(e.target.value); 
        // sempre q se escreve, o onChange actualiza o setState, que dps 
        //podemos usar no handleClick p conseguimos usar o valor do value só aquando do click no botao 
        // console.log(e.target.value);
    }

    const handleClick= () => {
        window.localStorage.setItem(`user ${state}`, state);
    }

    return (
            <section>
                <div className="flex">
                    <Input name="nome" onChange={handleChange} />
                    <input type="button" value="Ok" onClick={handleClick} className="p-1 bg-brick bg-opacity-70 border-2 rounded-lg hover:bg-tangerine"/>
                </div>
            </section>
    )
}
//fazer: se o utilizador nao existir: pede registo, se existir: faz o login