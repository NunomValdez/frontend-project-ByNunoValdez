import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ShopButton from "../../pages/checkout/ShopButton";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function ModalDetails(props) {

    const [showModal, setShowModal] = useState(false);

    const setShowModalCode =(value)=>{
        setShowModal(value);
    }

    const extraArray=[];
const handleExtras = (extra)=>{
    extraArray.push(extra);
}
    

    const { dishes, setDishes } = useContext(AppContext)
//____ função passada por props aos filhos para extrair a info dos pratos escolhidos
const handleSelectedDish =()=>{ 
    //    console.log(dish.target.id) //id do elemento
    //    console.log(dish.target.checked) // se estiver checked, foi selecionado e é para ir po carrinho!
    //    console.log(dish)
       setDishes([...dishes, {
           name: props.name,
           price: props.price,
           extra: extraArray
       }]);
   } 
   //____ o prato será identificado pelo 1º caractere do ID, e o extra escolhido pelo valor do value! 

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