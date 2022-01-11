import React from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

export default function PaginationCatalog() {
    return (
        <Pagination>
            <PaginationItem href="#last" ripple="dark">
                <Icon name="keyboard_arrow_left" />
            </PaginationItem>
            <PaginationItem color="lime" href="#1" ripple="light">1</PaginationItem>
            <PaginationItem href="#2" ripple="dark">2</PaginationItem>
            <PaginationItem href="#3" ripple="dark">3</PaginationItem>
            <PaginationItem href="#4" ripple="dark">4</PaginationItem>
            <PaginationItem href="#5" ripple="dark">5</PaginationItem>
            <PaginationItem href="#last" ripple="dark">
                <Icon name="keyboard_arrow_right" />
            </PaginationItem>
        </Pagination>
    );
}

// vai receber por props o nr total de items, e o nr de items por pagina
//para fazermos o calculo do nr de páginas a renderizar---- 
//saber a length do array(- )enviado por props
// pelo componente pai o tamanho do array), 
//fazer a divisao da length pelo nr de items por pagina (6), 
// com esse nr, fazer uma renderização dinamica com um while ou map