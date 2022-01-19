import React, { useState } from "react";
import Checkbox from "@material-tailwind/react/Checkbox"
// import { AppContext } from "../../App";
// import { useContext } from "react";


export default function CheckboxExtra(props) {
    let {extra, id, handleDishExtras} = props; //extraindo a prop extra e id, das props q vêm do pai modalDetails

    const [changeCheckbox, setChangeCheckbox] = useState(false);
    // o estado inicial será false, para q ao clicar fique a true, para ficar checked

    // const { changeCheckbox, setChangeCheckbox } = useContext(AppContext);

// neste ficheiro tenho de passar para o pai os extras escolhidos, para o próprio pai mandar a 
// info à app.js dos pratos selecionados, e dos respectivos extras!


    const handleChangeCheckbox= (event)=>{
        console.log(`${event.target.checked} do ${extra}`)
        setChangeCheckbox(!changeCheckbox)
        // console.log(changeCheckbox) 
    }

    //  const handleExtras=()=>{
    //     handleDishExtras(id)
    // }

    // const handleSelected=(changeCheckbox)=>{
    //        handleSelectedDish(changeCheckbox)
    // }

    return (
        <Checkbox
            // className="p-6"
            color="lightGreen"
            text={extra}
            value={extra}
            id={`${id}-${extra}`}  //o id é do cartao, e o extra do extra relativo ao id 
            checked={changeCheckbox}
            onChange={ handleChangeCheckbox }
            // onClick={handleExtras}
        />
    )
}

// com o value igual ao extra e value a true, mando para o carrinho c um filter:
// se changeCheckbox=true e value=extra, envia po carrinho OU:
// se event.target.checked == true, manda po carrinho