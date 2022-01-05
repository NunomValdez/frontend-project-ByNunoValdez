import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"

export default function Dropdownn() {

    
    return (
        <Dropdown
            color="deepOrange"
            placement="bottom-start"
            buttonText="Dropdown"
            buttonType="outline"
            size="regular"
            rounded={false}
            block={false}
            ripple="dark"
        >
            <DropdownItem color="deepOrange" ripple="light">
                Action
            </DropdownItem>
            <DropdownLink
                href="#"
                color= 'deepOrange'
                ripple="light"
                onClick={(e) => e.preventDefault()}
            >
                Another Action
            </DropdownLink>
            <DropdownItem color="deepOrange" ripple="light">
                Something else
            </DropdownItem>
        </Dropdown>
    )
}