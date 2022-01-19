import React, { useState } from "react";
import Checkbox from "@material-tailwind/react/Checkbox"

export default function CheckboxExtra(props) {
    let {extra, id} = props; //extraindo a prop extra e id, das props q vêm do pai modalDetails

    const [change, setChange] = useState(
        false
        // new Array(extra.length).fill(false)
    );
    //o estado inicial será false, para q ao clicar fique a true, para ficar checked

//    console.log(extra);

    const handleChange= (event)=>{
        console.log(`${event.target.checked} do ${extra}`)
        setChange(!change)

    }

    return (
        <Checkbox
            color="lightGreen"
            text={extra}
            value={extra}
            id={`${id}-${extra}`}  //o id é do cartao, e o extra do extra relativo ao id 
            checked={change}
            onChange={ handleChange }
        />
    )
}

// com o value igual ao extra e value a true, mando para o carrinho c um filter:
// se change=true e value=extra, envia po carrinho OU:
// se event.target.checked == true, manda po carrinho