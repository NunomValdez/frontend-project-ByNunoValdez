import React from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";




export default function PaginationCatalog({itemsPerPage, totalItems, paginate,
     currentPage, handleLeftClick, handleRightClick}) {

   

//o nr de páginas é dado pela divisao do total de items na api, pelo nr de items q 
//queremos por página (6) ===> 25/6= nr q temos de arredondar por cima, para caberem tds
    const pageNumbers = []; 
    const numberOfPages = Math.ceil(totalItems/itemsPerPage);

    for(let i = 1; i <= numberOfPages; ++i ){
        pageNumbers.push(i); 
        //assim vamos colocando o nr da página dentro do array de páginas
    }  

    return (
        <>
        <Pagination>
            <PaginationItem ripple="dark" onClick={()=>handleLeftClick()} className="cursor-pointer">
                <Icon name="keyboard_arrow_left" />
           </PaginationItem>
                {pageNumbers.map( number => {
                return( 
                    <PaginationItem 
                        color={currentPage === number ? "lime" : "gray" }
                        ripple="light" 
                        key={number}
                        className="cursor-pointer"
                        onClick={()=>{
                            paginate(number)
                        }}
                        > {number} 
                        </PaginationItem>)
                    })}     
            <PaginationItem ripple="dark" onClick={()=>handleRightClick()} className="cursor-pointer"> 
                <Icon name="keyboard_arrow_right" />
            </PaginationItem>
        </Pagination>
        </>
    );
}

// vai receber por props o nr total de items, e o nr de items por pagina
// para fazermos o calculo do nr de páginas a renderizar---- 
// saber a length do array(- )enviado por props
// pelo componente pai - HomePage), 
// fazer a divisao da length pelo nr de items por pagina (6), 
// com esse nr, fazer uma renderização dinamica com um while ou map