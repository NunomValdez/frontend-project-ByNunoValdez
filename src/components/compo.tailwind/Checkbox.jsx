import React, { useState } from "react";
import Checkbox from "@material-tailwind/react/Checkbox"
// import { AppContext } from "../../App";
// import { useContext } from "react";


export default function CheckboxExtra(props) {
    let {extra, id, handleSelectedDish} = props; //extraindo as props a usar mandadas pelo comp pai

// o estado inicial do state(changeCheckbox) será false, para q ao clicar o setChangeCheckbox o torne true na funcao handleChangeCheckbox
    const [changeCheckbox, setChangeCheckbox] = useState(false); 

    // const { changeCheckbox, setChangeCheckbox } = useContext(AppContext);

// neste ficheiro tenho de passar para o pai os extras escolhidos, para q o pai mande a 
// info à app.js dos pratos selecionados, e dos respectivos extras!

    const handleChangeCheckbox= (event)=>{
        // console.log(`${event.target.checked} do ${extra}`) 
        setChangeCheckbox(!changeCheckbox)
        // console.log(changeCheckbox) 
    }

//______ método para substituir o espaço por underscore, para o ID ser uma string única sem espaços!
    const parseExtraIngredient = ()=>{
        return extra.replace(' ', '_');
    }

     const handleSelected=()=>{
        handleSelectedDish(id)
    }

    // const handleSelected=(changeCheckbox)=>{
    //        handleSelectedDish(changeCheckbox)
    // }

    return (
        <Checkbox
            // className="p-6"
            color="lightGreen"
            text={extra}
            value={extra}
            id={`${id}-${parseExtraIngredient()}`}  //o id é do cartao, e o extra do extra relativo ao id 
            checked={changeCheckbox}
            onChange={ handleChangeCheckbox }
          onClick={handleSelectedDish}
        />
    )
}

// com o value igual ao extra e value a true, mando para o carrinho c um filter:
// se changeCheckbox=true e value=extra, envia po carrinho OU:
// se event.target.checked == true, manda po carrinho