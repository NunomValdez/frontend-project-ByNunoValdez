import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function ModalDetails(props) {
    const [showModal, setShowModal] = React.useState(false);

    const setShowModalCode =(value)=>{
        setShowModal(value);
    }


    return (
        <>
            <Button
                color="amber"
                type="button"
                onClick={(e) => setShowModalCode(true)}
                ripple="light"
            >
               Product Details
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-light">
                        I always felt like I could do anything. That’s the main thing people
                        are controlled by! Thoughts- their perception of themselves! They're
                        slowed down by their perception of themselves. If you're taught you
                        can’t do anything, you won’t do anything. I was taught I could do
                        everything.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="lightGreen"
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