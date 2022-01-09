import React from "react";
import InputIcon from "@material-tailwind/react/InputIcon";

export default function Input(props) {
    return (
        <InputIcon
            type="text"
            color="teal"
            size="regular"
            outline={true}
            placeholder="Username"
            iconFamily="material-icons"
            iconName="person"
            onChange={props.onChange}
        />
    )
}