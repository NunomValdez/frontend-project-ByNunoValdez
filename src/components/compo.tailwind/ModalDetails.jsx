import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import ShopButton from "../../pages/checkout/ShopButton";

export default function ModalDetails(props) {
    const [showModal, setShowModal] = useState(false);

    const setShowModalCode =(value)=>{
        setShowModal(value);
    }


    return (
        <>
            <Button
                color="orange"
                type="button"
                onClick={(e) => setShowModalCode(true)}
                ripple="light"
            >
               Product Details
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    {props.name}
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-light">
                        {props.description}
                        {/* <select name="Extras" id="extras-dish">
                            {
                                //props.extras.map((extra)=>{
                                    <option>ingredient {extra}</option>
                                })
                            }
                        </select> */}
                <Button
                className="flex w-fit"
                color="purple"
                size="sm"
                >
                    Add to cart
                        {/* <ShopButton numberShop={3} nameButton={'Add to cart'} /> */}
                </Button>
                    </p>
                </ModalBody>
                <ModalFooter>
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
                        onClick={(e) => setShowModalCode(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                  
                </ModalFooter>
            </Modal>
        </>
    );
}