import React, { useState } from 'react';

// const emailReducer =(state, action)=>{  //criado fora do componente pq n precisa de info gerada por ele
//         return {value:'', isValid:false}
// };

export default function Form() {

    //__ Definir os vários states dos Inputs de formulário:
    const [firstName, setFirstName]= useState('');
    const [enteredEmail, setEnteredEmail] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    // const [formIsValid, setFormIsValid] = useState(false);
    const [enteredAddress, setEnteredAddress]= useState('');

//__Name
  const handleChangeName = (e) => {
      e.preventDefault();
    setFirstName(e.target.value);
  }
  const handleClickName= (e)=>{
    e.preventDefault();
     setFirstName(e.target.value)
  }

//__Email
const emailChangeHandler=(e)=>{
    e.preventDefault();
    setEnteredEmail(e.target.value);
    // setFormIsValid(
    //     e.target.value.includes('@') && enteredEmail.trim().length>6
    // );
}
//__Password
const passwordChangeHandler=(e)=>{
    e.preventDefault();
    setEnteredPassword(e.target.value);
}
const handlePassClick=(e)=>{
    e.preventDefault();
    setEnteredPassword(enteredPassword);
}
//__ Address
const handleEnteredAddress=(e)=>{
    e.preventDefault();
    setEnteredAddress(e.target.value);
}
const handleClickAddress=(e)=>{
    e.preventDefault();
    setEnteredAddress(enteredAddress);
}

  //   const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false});

return (
    <form className="flex flex-col ">

        <div>
            <input type="text" onChange={handleChangeName} placeholder="Type your name" id="first-name" className="bg-zinc-100 border border-b border-slate-500 mt-4 p-6 " />
            <button className="bg-safire text-white p-2 rounded-2xl mx-1.5" value={firstName} onClick={handleClickName}>Ok</button>
        </div>
        <div>
            <input type="email" onChange={emailChangeHandler} name="email" placeholder="Type your email" id="email" className="bg-zinc-100 border border-b border-slate-500 mt-4 p-6"/>
            <button onClick={handleEnteredAddress} className="bg-safire text-white p-2 rounded-2xl mx-1.5">Ok</button>
        </div>
        <div>
            <input type="password" onChange={passwordChangeHandler} name="pass" placeholder="Password" id="pass" className="bg-zinc-100 border border-b border-slate-500 mt-4 p-6"/>
            <button onClick={handlePassClick} className="bg-safire text-white p-2 rounded-2xl mx-1.5">Ok</button>
        </div>
        <div>
            <input onChange={handleEnteredAddress} type="text" name="address" placeholder="Type your address" id="address" className="bg-zinc-100 border border-b border-slate-500 mt-4 p-6"/>
            <button onClick={handleClickAddress} className="bg-safire text-white p-2 rounded-2xl mx-1.5">Ok</button>
        </div>
        
    </form>
)
}
