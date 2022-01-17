// import React from 'react'
// import ButtonIcon from '../../components/compo.tailwind/Button';



// export default function FoodCard(props) {
    
//     let {name, username, email, address}=props.food;

//     return (
//         <>
//             <article className="flex p-3 flex-col border-safire border-2 ">
//                 <h2>{name}</h2>
//                 <p>{username}</p>
//                 <p>{email}</p>
//                   <ButtonIcon />
//             </article>
//         </>
//     )
// }

import {useState} from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import ModalDetails from "../../components/compo.tailwind/ModalDetails";

export default function FoodCard(props) {


    const [modalOpen, setModalOpen] = useState(false);

        // const handleClickCard= ()=>{
        //     setModalOpen(true);
        // }


    return (
        <Card>
            <CardImage
            className="h-40 max-w-xs sm:max-w-xs"
                src={`/assets/images${props.image}`}
                alt="Card Image"
                
            />

            <CardBody>
                <H6 color="lime">{props.name}</H6>
                <Paragraph color="gray">{props.description}</Paragraph>
            </CardBody>

            <CardFooter>
                    <ModalDetails 
                    name={props.name}  
                    price={props.price}
                    description = {props.description}
                    extras={props.extras}
                    opened={modalOpen} />
            </CardFooter>
            
        </Card>
    );
}
