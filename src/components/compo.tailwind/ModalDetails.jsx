import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ShopButton from "../../pages/checkout/ShopButton";
import Checkbox from "./Checkbox";

export default function ModalDetails(props) {

    const [showModal, setShowModal] = useState(false);

    const setShowModalCode =(value)=>{
        setShowModal(value);
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
                        {/* <select name="Extras" id="extras-dish">
                            {
                                //props.extras.map((extra)=>{
                                    <option>ingredient {extra}</option>
                                })
                            }
                        </select> */}
                        </div>
                        <div id="dish-extras" className="font-extralight text-sm">
                           <span className="flex text-left mt-2"> Choose some extras:</span>
                            {
                                props.extras.map(extra =>{
                                    //console.log(extra)
                                    return <Checkbox key={extra} extra={extra}/>
                                })
                            }
                        </div>

                <div className="flex justify-center my-4">
                    <Button
                    className="flex w-fit mt-6 font-light"
                    color="purple"
                    size="sm"
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