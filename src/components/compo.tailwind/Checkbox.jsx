import React, { useState } from "react";
import Checkbox from "@material-tailwind/react/Checkbox"
// import { AppContext } from "../../App";
// import { useContext } from "react";


export default function CheckboxExtra(props) {
    let {extra, id, handleExtras, name} = props; //extraindo as props a usar mandadas pelo comp pai

// o estado inicial do state(changeCheckbox) será false, para q ao clicar o setChangeCheckbox o torne true na funcao handleChangeCheckbox
    const [changeCheckbox, setChangeCheckbox] = useState(false); 

    // const { changeCheckbox, setChangeCheckbox } = useContext(AppContext);

//----- neste ficheiro tenho de passar para o pai os extras escolhidos, para q o pai mande a 
// ---- info à app.js dos pratos selecionados, e dos respectivos extras!

    const handleChangeCheckbox= (event)=>{
            setChangeCheckbox(!changeCheckbox) //deste modo, ao clicar no input fica o oposto do estado actual => checked ou unchecked
    }

//______ método para substituir o espaço por underscore, para o ID ser uma string única sem espaços!
    const parseExtraIngredient = ()=>{
        return extra.replace(' ', '_');
    }

    return (
        <Checkbox
            name={name}
            color="lightGreen"
            text={extra}
            value={extra}
            id={`${id}-${parseExtraIngredient()}`}  //o id é do cartao, e o extra do extra relativo a esse id 
            checked={changeCheckbox}
            onChange={ handleChangeCheckbox }
          onClick={(event)=>handleExtras(event,extra)} //____ funcao de handle q é executada no componente pai, e q vem buscar ao filho a info 
//_______________do id do q o user clicou - passar info de filhos p pais!
        />
    )
}
