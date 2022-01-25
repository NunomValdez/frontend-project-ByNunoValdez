import {useState, useEffect} from 'react'
import PaginationCatalog from '../../components/compo.tailwind/Pagination';
import FoodCards from './FoodCards'
import { useContext } from 'react';
import { AppContext } from '../../App';


export default function FoodCatalog() {
//___ estados e setEstados do componente:
    const [foodItems, setfoodItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage]= useState(6);

//Saber qual o Item actual:
//____________________//////////_________________________
//este componente vai ser o pai do catálogo de comidas, e dará aos filhos
//as props que terão em si o array de pratos vindos do fetch à API, que de inicio é um array vazio,
//mas assim que o JSON é trabalhado, o array é populado com os pratos- 'https://61ddf19df60e8f0017668b31.mockapi.io/api/Menu'
//___________________///////////__________________________
const { setStock } = useContext(AppContext);

useEffect(() => {
    fetch('https://61ddf19df60e8f0017668b31.mockapi.io/api/Menu')
    .then(resp=>resp.json())
    .then(data=> {
        setfoodItems(data)
        
        const stockArr = new Map()
        
        data.map(item => {
            stockArr.set(item.id, item.stock)
            // console.log(`{id: ${item.id}, stock: ${item.stock}}`) 
            setStock(stockArr) // set to context para actualizar o context do stock:
        })
            // console.log(stockArr)
            // console.log(stockArr.get('15'))
        })
    }, []);
    // console.log(stock.get(`${dish.id}`))
    
// console.log(stock)
   
// na API fornecida vamos ter de ver se ha items em stock, se houver os pratos estarão disponiveis para compra, senao
//nao se pode comprar e o card deve aparecer indisponivel ! --> a fazer 
    // console.log(foodItems);
    
//_________   Lógica da paginação para apresentar 6 cards por página:
    const indexOfLastItem = currentPage * itemsPerPage; // (qd currentPage =2, itemsPerPage= 2*6)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // (o 1º elem da pagina é = ao index do ultimo elem - o nr de elementos por pagina)
    const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem); //delimita os elem q aparecem em cada pagina, consoante o seu index


    const numberOfPages = Math.ceil((foodItems.length)/itemsPerPage);
//_________ como fiz na paginação, desta maneira temos o nr de páginas a serem renderizadas (arredondando por cima)

//_____metodo para mudar a página (recebe o nr da página do filho):
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
//_____ decremento da página
    const handleLeftClick = ()=>{
        if(currentPage > 1 ){
        setCurrentPage(currentPage - 1)
    }}
//_____ incremento da página
    const handleRightClick= ()=>{
        if(currentPage <  numberOfPages){
            setCurrentPage(currentPage +1)
        }
    }

    return ( 
    <>
    <h1 className="row-span-full text-stone-800 text-4xl shadow-sm p-7 bg-slate-50">Food Catalog</h1>
    <div className="flex justify-center"> 
        <FoodCards foodOptions={currentItems} /> 
        {/* o FoodCards vai receber o foodOption como props, e trabalhar o array dentro do cards */}
    </div>
    <div>
        <PaginationCatalog 
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        itemsPerPage={itemsPerPage} 
        totalItems={foodItems.length}
        paginate={paginate}
        currentPage={currentPage}/>
    </div>
    </>
    )         
}

