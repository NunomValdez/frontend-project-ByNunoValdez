import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function ModalDetails(props) {
//____ mostrar o modal
    const [showModal, setShowModal] = useState(false);

    const setShowModalCode =(value)=>{
        setShowModal(value);
    }
//__________//
    //usar context definido na app.js
    const { dishes, setDishes } = useContext(AppContext) 

    const extraArray=[]; //os extras têm de ser um array, para q o user possa escolher mais q 1
       
    const handleExtras = (extra)=>{
        extraArray.push(extra); 
    }   //ao clicar no extra, fazer push desse extra pra dentro do array

const handleSelectedDish =()=>{  
//colocar dentro do array o q ja houver de dishes, e adicionar o obj com as propriedades q quero usar 
       setDishes(
           [...dishes, 
            {
           name: props.name,
           price: props.price,
           extra: extraArray
            }
        ]);
   } 

    return (
        <>
            <Button
                color="lime"
                type="button"
                onClick={(e) => setShowModalCode(true)}
                ripple="light"
            >
               Product Details
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)} >
                    {props.name}
                </ModalHeader>
                <ModalBody >
                    <div className="text-base leading-relaxed text-gray-600 font-light flex">
                    <img src={`/assets/images${props.image}`} alt="product image" className="w-24"/>
                       "{props.description}"
                        </div>

                        <div id="dish-extras" className="font-extralight text-sm">
                           <span className="flex text-left mt-2"> Choose some extras:</span>
                            {
                                props.extras.map((extra,i) =>{ 
                                    // console.log(extra)
                                    return <Checkbox 
                                    handleExtras={handleExtras} 
                                    key={i} 
                                    extra={extra} 
                                    id={props.id}
                                    name={props.name}
                                    />
                                })
                            }
                        </div>
                        
                <div className="flex justify-center my-4">
                    <Button
                    className="flex w-fit mt-6 font-light"
                    color="purple"
                    size="sm"
                    onClick={handleSelectedDish}
                    >
                        Add to cart -  
                         {props.price}

                    </Button>
                </div>
                </ModalBody>
                <ModalFooter>
                <div className="flex flex-row items-center">
                    <Button 
                        color="brown"
                        buttonType="link"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="lime"
                        className="ml-14"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </div>
            </ModalFooter>
            </Modal>
        </>
    );
}