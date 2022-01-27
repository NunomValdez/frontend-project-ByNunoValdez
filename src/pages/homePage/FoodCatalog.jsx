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
    const [filtered, setFiltered] = useState([])

//Saber qual o Item actual:
//____________________//////////_________________________
//este componente vai ser o pai do catálogo de comidas, e dará aos filhos
//as props que terão em si o array de pratos vindos do fetch à API, que de inicio é um array vazio,
//mas assim que o JSON é trabalhado, o array é populado com os pratos- 'https://61ddf19df60e8f0017668b31.mockapi.io/api/Menu'
//___________________///////////__________________________
const { setStock, stock } = useContext(AppContext);

useEffect(() => {
    fetch('https://61ddf19df60e8f0017668b31.mockapi.io/api/Menu')
    .then(resp=>resp.json())
    .then(data=> {
        // let dataFilteredByName = data.map(obj=>obj.name)
        setfoodItems(data)
        // console.log(dataFilteredByName)
        setFiltered(data) //assim actualizamos o filtered array para tudo o q vem da api e filtramos isto

        if(stock.size===0){ //a verificacao do size tem de ser do stock, q vem por context, pq é nele q se armazena o state, e o stockArr é so um auxiliar para popular o map no inicio
            const stockArr = new Map()
         data.map(item =>{
            stockArr.set(item.id, item.stock)
// para verificar se o stock tem alguma coisa lá dentro, temos de usar mm o context do stock,
// pq este vai ser actualizado no inicio da APP, e actualizamos o setStock com o map stockArr inicial, 
//dentro do if, pq so vai entrar neste if CASO O STOCK.SIZE SEJA ZERO
// console.log(stockArr.size)
                    })  
                setStock(stockArr) 
                // console.log(stockArr)
            }
        })
    }, []);
    // console.log(stock.get(`${dish.id}`))
    
// console.log(stock)
// let iterator = stock.entries();
// console.log(iterator)
   
// na API fornecida vamos ter de ver se ha items em stock, se houver os pratos estarão disponiveis para compra, senao
//nao se pode comprar e o card deve aparecer indisponivel ! --> a fazer 
    // console.log(foodItems);
    


//_________   Lógica da paginação para apresentar 6 cards por página:
    const indexOfLastItem = currentPage * itemsPerPage; // (qd currentPage =2, itemsPerPage= 2*6)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // (o 1º elem da pagina é = ao index do ultimo elem - o nr de elementos por pagina)
    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem); //delimita os elem q aparecem em cada pagina, consoante o seu index
    const numberOfPages = Math.ceil((filtered.length)/itemsPerPage); //como fiz na paginação, desta maneira temos o nr de páginas a serem renderizadas (arredondando por cima)


//_____metodo para mudar a página (recebe o nr da página no filho):
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


 //mudando de pagina n funcionava - temos de actualizar a pagina current
const handleChangeSearch=(e)=>{
    let inputUser = e.target.value;
    let foodsFiltered = foodItems.filter(foodItem => foodItem.name.toLowerCase().includes(inputUser.toLowerCase()))
    setFiltered(foodsFiltered)
    console.log(foodsFiltered)
    setCurrentPage(1)
}



    return ( 
    <>
        <h1 className="row-span-full text-stone-800 text-4xl shadow-sm p-7 bg-slate-50">Food Catalog</h1>
        <section className="mb-8  max-w-fit h-10 border-b-2 border-gray-300 mx-auto flex">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
            <input type="text" name="input" placeholder="Search any dish" onChange={handleChangeSearch}  />
        </section>  

        <div className="flex justify-center"> 
            <FoodCards foodOptions={currentItems} /> 
            {/* o FoodCards vai receber o foodOption como props, e trabalhar o array de dishes dentro do cards */}
        </div>
        <div>
            <PaginationCatalog 
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
            itemsPerPage={itemsPerPage} 
            totalItems={filtered.length}
            paginate={paginate}
            currentPage={currentPage}/>
        </div>
        </>
        )      
    // return(
    //     <div>Loading....</div>
    // )   
}

