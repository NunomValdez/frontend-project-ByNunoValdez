import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function ButtonIcon() {
    return (
        <Button
            color="blueGray"
            buttonType="outline"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="dark"
        >
            <Icon name="favorite" size="sm" />
        </Button>
    )
}