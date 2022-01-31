
import {useState} from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import ModalDetails from "../../components/compo.tailwind/ModalDetails";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function FoodCard(props) {

    const [modalOpen, setModalOpen] = useState(false);
    // const { setExistingStock }= useContext(AppContext);

    // setExistingStock(props.stock)

    return (
        <Card className="shadow-md bg-gray-100 max-w-sm min-w-fit">
            <CardImage
            className="h-40 mx-auto max-w-xs sm:max-w-xs "
                src={`/assets/images${props.image}`}
                alt="Card Image"
            />
            <CardBody >
                <H6 color="teal">{props.name}</H6>
                <Paragraph color="gray" className="font-bold text-lg">{props.description}</Paragraph>
                <Paragraph className="text-lime-600 font-extrabold">{props.price}</Paragraph>
            </CardBody>

            <CardFooter>
                    <ModalDetails 
                    // stock={props.stock}
                    image={props.image}
                    name={props.name}  
                    price={props.price}
                    description = {props.description} 
                    extras={props.extras}
                    opened={modalOpen} 
                    id={props.id}
                    //  handleSelectedDish={props.handleSelectedDish}
                    />
            </CardFooter>
        </Card>
    );
}
