import React, { useState } from 'react';
import { AppContext } from '../../App';
import { useContext } from 'react';


export default function Form() {

    const { userName, setUserName }= useContext(AppContext);

    //__ Definir os vários states dos Inputs de formulário:
    const [firstName, setFirstName]= useState('');
    const [enteredEmail, setEnteredEmail] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    // const [formIsValid, setFormIsValid] = useState(false);
    const [enteredAddress, setEnteredAddress]= useState('');
    // const [submit, setSubmit] = useState('')

    //ver como colocar o valor de cada input dentro de um objecto q englobe 
    //todos os valores dos inputs

//__Name
  const handleChangeName = (e) => {
    //   e.preventDefault();
    setFirstName( e.target.value);
  }
  console.log(firstName)
//__Email
const emailChangeHandler=(e)=>{
    // e.preventDefault();
    setEnteredEmail(e.target.value);
    // setFormIsValid(
    //     e.target.value.includes('@') && enteredEmail.trim().length>6
    // );
}
//__Password
const passwordChangeHandler=(e)=>{
    // e.preventDefault();
    setEnteredPassword(e.target.value);
}
//__ Address
const handleEnteredAddress=(e)=>{
    // e.preventDefault();
    setEnteredAddress(e.target.value);
    }

    const handleFormSubmit= (e) =>{
        e.preventDefault()
        console.log(e.target.value)
    }

  //   const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false});

return (
    <>
    <form className="flex flex-col align-middle" onSubmit={handleFormSubmit}>
        <div>
            <input type="text" 
            onChange={handleChangeName} 
            placeholder={userName.length>0? `${userName}` : 'Username'}
            value={firstName}
            id="first-name" 
            className="bg-zinc-100 border border-b border-slate-500 mt-4 p-2 " />
        </div>
        <div>
            <input type="email" 
            onChange={emailChangeHandler} 
            name="email" 
            placeholder="Type your email" 
            id="email" 
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2"/>
        </div>
        <div>
            <input 
            type="password" 
            onChange={passwordChangeHandler} 
            name="pass" placeholder="Password" 
            id="pass" 
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2"/>
        </div>
        <div>
            <input 
            onChange={handleEnteredAddress} 
            type="text" 
            name="address" 
            placeholder="Type your address" 
            id="address" 
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2"/>
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
