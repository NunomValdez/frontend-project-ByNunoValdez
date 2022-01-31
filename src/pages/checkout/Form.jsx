import React, { useState, useEffect, useRef } from 'react';
import { AppContext } from '../../App';
import { useContext } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {

    const { userName, setUserName, dishes }= useContext(AppContext); //Vamos pré-preencher o username caso o user já tenha colocado na página principal

    //ver como colocar o valor de cada input dentro de um objecto q englobe 
    //todos os valores dos states iniciais
    const inicialValues={  
        username:'', 
        email:'', 
        password:'' , 
        address:''
    };

    const [formValues, setFormValues]= useState(inicialValues);
    const [formErrors, setFormErrors]= useState({});
    const [isSubmit, setIsSubmit]= useState(false);

//__Name
  const handleChange = (e) => {
      const { name, value } = e.target; //destructuring dos atributos disponiveis no event.target! 
      setFormValues({...formValues, ...dishes, [name]: value})
    console.log(formValues);
  }

  //usando o useRef, para podermos ligar o formulário ao EmailJS (fazer referencia ao formulário), assim o 3º parametro aceite pela funcao vai ser o formulário preenchido pelo user!
    const form = useRef();
  
//ao clicar no submit, preciso de ter todos os dados do user e transformar isso em String para pôr na sessionStorage:
    const handleFormSubmit= (e) =>{
        e.preventDefault();
        console.log(e.target);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(formValues)
        sessionStorage.setItem(`${userName}`,JSON.stringify(formValues))
        emailjs.sendForm(
            'nuno_valdez_fernandes',
            'template_m0h37uj', 
            form.current, 
            'user_Ls4TorVRwOpQFoAEpLhBP'
            ).then(response=>{
                console.log(response.json)
            }).catch( error=> error)
    }

    
    useEffect(()=>{
        // se o obj que tem os erros estiver a zeros e submit for true:
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    //para verificar se há erros no preenchimento do formulário, ha que ver os valores do input do user
    const validate=(values)=>{
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //regular expression tirada da net!
        if(!values.username){
            errors.username="Username is required";
        }
        if(!values.email){
            errors.email="E-mail is required";
        }else if(!regex.test(values.email)){
            errors.email=  'This is not a valid email'
        }
        if(!values.password){
            errors.password="Type your password";
         }else if(values.password.length <4) {
            errors.password = "Must have more than 4 characters";
         }else if(values.password.length >10){
             errors.password= "Must have less than 10 characters";
         }
         if(!values.address){
             errors.address="Address is required"
         }

        return errors;
    }

// console.log(`object.keys = ${Object.keys(formErrors)}`) //Object.keys retorna um array de props enumeraveis de um objecto, tipo for...In ( MDN- Object.keys() ) 
// assim podemos usar a length do array, e fazer a verificação: se tiver erros, lengtth>0, se nao tiver erros, length===0

return (
    <>
    {(Object.keys(formErrors).length === 0) && isSubmit ? (<div className="text-lg border border-solid rounded-lg p-2 text-lime-600 mx-auto shadow-lg w-fit">Signed in successfully!</div>) 
    : (<div className="text-sm">Type your info please</div>) } 
 {/* Se o objecto dos erros estiver vazio (length===0) e isSubmit for verdade, entao apresenta a div com Signed Successfully, se tiver erros (length>0, apresenta 'Type info please) */}
    <form ref={form} className="form_div flex flex-col align-middle border rounded-2xl shadow-lg mx-auto w-fit p-6"
     onSubmit={handleFormSubmit}>
        <div>
            <input type="text" 
            onChange={handleChange} 
            name="username"
            placeholder={userName.length>0? `${userName}` : 'Username'}
            // este placeholder vai ter o nome q o user escreveu na landing page, e vai ser tb usado como key do valor q vai ser enviado para a session storage
            value={formValues.userName}
            id="first-name" 
            className="bg-zinc-100 border border-b border-slate-500 mt-4 p-2 rounded-lg  focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300" />
            <p className="text-diospiro">{formErrors.username}</p>
        </div>
        <div>
            <input 
            type="email" 
            onChange={handleChange} 
            name="email" 
            placeholder="Type your email" 
            id="email" 
            value={formValues.email}
            className=" bg-zinc-100 border border-b border-slate-500 mt-2 p-2 rounded-lg  focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"/>
             <p className="text-diospiro">{formErrors.email}</p>
        </div>
        <div>
            <input 
            type="password" 
            onChange={handleChange} 
            name="password" 
            placeholder="Password" 
            value={formValues.password}
            id="pass" 
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2 rounded-lg  focus:ring-indigo-300 focus:ring-1 focus:border-indigo-300"/>
             <p className="text-diospiro">{formErrors.password}</p>
        </div>
        <div>
            <input 
            onChange={handleChange} 
            type="text" 
            name="address" 
            placeholder="Type your address" 
            id="address" 
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2 rounded-lg  focus:ring-indigo-300 focus:ring-1 focus:border-indigo-300"/>
            <p className="text-diospiro">{formErrors.address}</p>
        </div>
   
    <button 
        type="submit"
        onClick={handleFormSubmit}
        className="bg-safire text-white p-2 w-fit rounded-2xl mx-auto mt-4"
     >
         Submit</button> 
     
    </form>
    </>
)
}
