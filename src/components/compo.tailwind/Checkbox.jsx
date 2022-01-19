import React, { useState } from "react";
import Checkbox from "@material-tailwind/react/Checkbox"

export default function CheckboxExtra(props) {
    let {extra} = props; //extraindo a prop extra, das props q vêm do pai modalDetails

    const [click, setClick] = useState(false);
    //o estado inicial será false, para q ao clicar fique a true, para ficar checked
   
    console.log(extra)

    const handleClick= ()=>{
        setClick(!click);
    }

    return (
        <Checkbox
            
            color="lightGreen"
            text={extra}
            id="checkbox"
            checked={click}
            onChange={ handleClick }
        >
            {/* {extra} */}
        </Checkbox>
    )
}