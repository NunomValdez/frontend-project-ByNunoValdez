import React, { useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { useContext } from 'react';


export default function Form() {

    const { userName, setUserName }= useContext(AppContext); //Vamos pré-preencher o username caso o user já tenha colocado na página principal

    //ver como colocar o valor de cada input dentro de um objecto q englobe 
    //todos os valores dos inputs

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
      setFormValues({...formValues, [name]: value})
    console.log(formValues);
  }

//   let email, password, address ='';
    const handleFormSubmit= (e) =>{
        e.preventDefault();

        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(formValues)
        console.log(formValues.username)
        // sessionStorage.setItem([userName], formValues.username)
        sessionStorage.setItem(`${userName}`,JSON.stringify(formValues))
        // sessionStorage.setIgem(email, formValues.email)
        // sessionStorage.setItem(password, formValues.password)
        // sessionStorage.setItem(address, formValues.address)
    }
    
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

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


return (
    <>
    {(Object.keys(formErrors).length === 0) && isSubmit ? (<div className="text-lg border border-solid rounded-lg p-2 text-lime-600 mx-auto shadow-lg w-fit">Signed in successfully!</div>) 
    : (<div className="text-sm">Type your info please</div>) }
    <form className="flex flex-col align-middle border rounded-2xl shadow-lg mx-auto w-fit p-6"
     onSubmit={handleFormSubmit}>
        <div>
            <input type="text" 
            onChange={handleChange} 
            name="username"
            placeholder={userName.length>0? `${userName}` : 'Username'}
            value={formValues.userName}
            id="first-name" 
            className="bg-zinc-100 border border-b border-slate-500 mt-4 p-2 " />
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
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2"/>
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
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2 "/>
             <p className="text-diospiro">{formErrors.password}</p>
        </div>
        <div>
            <input 
            onChange={handleChange} 
            type="text" 
            name="address" 
            placeholder="Type your address" 
            id="address" 
            className="bg-zinc-100 border border-b border-slate-500 mt-2 p-2"/>
            <p className="text-diospiro">{formErrors.address}</p>
        </div>
   
    <button 
        type="submit"
        onClick={handleFormSubmit}
        className="bg-safire text-white p-2 w-fit rounded-2xl mx-auto mt-4"
     >
         Submit</button> 
     
    </form>
    {/* {isSubmit &&(
        <div>Signed in!</div>
    )} */}
    </>
)
}
