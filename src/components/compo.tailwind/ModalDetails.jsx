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
    // const [stock, setStock]= useState(props.stock);


    const setShowModalCode =(value)=>{
        setShowModal(value);
    }
//__________//
    //usar context definido na app.js
    const { dishes, setDishes, stock, setStock } = useContext(AppContext);

    
    const extraArray=[]; //os extras têm de ser um array, para q o user possa escolher mais q 1
// acrescentar o extra APENAS se o target=checked e o extra n existir já no array! se existir, 
//fazer o splice do extra (extra é o indice neste caso, e 1 para o remover apenas a si mm)
    const handleExtras = (event, extra)=>{ 
        if(!extraArray.includes(extra)&&(event.target.checked)){
            extraArray.push(extra)
        }else{
            extraArray.splice(extra,1)
        }
        console.log(extraArray); 
    }  
    

    const handleSelectedDish =()=>{  
    //colocar dentro do array o q ja houver de dishes, e adicionar o obj com as propriedades q quero usar 
    if(stock.get(props.id)>0){
        let newStock = stock.get(props.id)
            console.log(newStock)
        setDishes(
           [...dishes, 
            {
           name: props.name,
           price: props.price,
           extra: extraArray,
           stock: newStock,
           id: props.id,
           image: props.image,
           quantity: 1
            }
        ])
        setStock(stock.set(props.id, newStock-1)) //get- vai buscar o valor, e o set- faz o set do valor
        // console.log(props.id)
    }
    // console.log(stock.get(props.id))
   } 
// console.log(stock)

    return (
        <>
            <Button
                color={stock.get(props.id)<=0 ? "gray": "lime"}
                disabled={stock<=0}
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
                    <img src={`/assets/images${props.image}`} alt={props.name} className="w-24"/>
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
                                    stock={props.stock}
                                    />
                                })
                            }
                        </div>
                        
                <div className="flex justify-center my-4">
                    <Button
                    className="flex w-fit mt-6 font-light"
                    color={stock.get(props.id)<=0? "gray" : "purple"}
                    size="sm"
                    onClick={handleSelectedDish}
                    >
                        Add to cart -  
                         {props.price}

                    </Button>
                    <span className="text-xs text-slate-400" >Stock: {stock.get(props.id)}</span>
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