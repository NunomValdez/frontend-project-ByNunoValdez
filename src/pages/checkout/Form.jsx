import React, { useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { useContext } from 'react';


export default function Form() {

    const { userName, setUserName }= useContext(AppContext);

    //ver como colocar o valor de cada input dentro de um objecto q englobe 
    //todos os valores dos inputs

    const inicialValues={ 
        username:'', 
        email:'', 
        password:'' , 
        address:''
    };

    const [formValues, setFormValues]= useState(inicialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);

//__Name
  const handleChange = (e) => {
      const {name, value}=e.target;
      setFormValues({...formValues, [name]: value})
    console.log(formValues);
  }

    const handleFormSubmit= (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate=(values)=>{
        const errors={}
        if(!values.username){
            errors.username="Username is required";
        }
        if(!values.email){
            errors.email="E-mail is required";
        }
        if(!values.password){
            errors.password="Type your password";
         }else if(values.password >4) {
            errors.password = "Must have more than 4 characters";
         }else if(values.password <10){
             errors.password= "Must have less than 10 characters";
         }
         if(!values.address){
             errors.address="Address is required"
         }
        return errors;
    }


return (
    <>
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
