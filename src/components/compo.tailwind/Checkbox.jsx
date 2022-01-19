import React, { useState } from "react";
import Checkbox from "@material-tailwind/react/Checkbox"
// import { AppContext } from "../../App";
// import { useContext } from "react";


export default function CheckboxExtra(props) {
    let {extra, id} = props; //extraindo a prop extra e id, das props q vêm do pai modalDetails

    const [changeCheckbox, setChangeCheckbox] = useState(false);
    // o estado inicial será false, para q ao clicar fique a true, para ficar checked

//    console.log(extra);

    // const { changeCheckbox, setChangeCheckbox } = useContext(AppContext);


    const handleChangeCheckbox= (event)=>{
        console.log(`${event.target.checked} do ${extra}`)
        setChangeCheckbox(!changeCheckbox)
        // console.log(changeCheckbox)
    }

    return (
        <Checkbox
            // className="p-6"
            color="lightGreen"
            text={extra}
            value={extra}
            id={`${id}-${extra}`}  //o id é do cartao, e o extra do extra relativo ao id 
            checked={changeCheckbox}
            onChange={ handleChangeCheckbox }
        />
    )
}

// com o value igual ao extra e value a true, mando para o carrinho c um filter:
// se changeCheckbox=true e value=extra, envia po carrinho OU:
// se event.target.checked == true, manda po carrinho