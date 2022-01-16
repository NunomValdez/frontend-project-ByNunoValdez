import {useState, useEffect} from 'react'
import PaginationCatalog from '../../components/compo.tailwind/Pagination';
import FoodCards from './FoodCards'


export default function FoodCatalog() {

    const [foodItems, setfoodItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage]= useState(6);

    //Saber qual o Item actual:
    
    //este componente vai ser o pai do catálogo de comidas, e dará aos filhos
    //as props que terão em si o array de pratos vindos do fetch à API, que de inicio é um array vazio,
    //mas assim que o JSON é trabalhado, o array é populado com os pratos- 'https://61ddf19df60e8f0017668b31.mockapi.io/api/Menu'
    
    useEffect(() => {
        fetch('https://61ddf19df60e8f0017668b31.mockapi.io/api/Menu')
        .then(resp=>resp.json())
        .then(data=> setfoodItems(data))
    }, []);
    
    // na API fornecida vamos ter de ver se ha items em stock, se houver os pratos estarão disponiveis para compra, senao
    //nao se pode comprar e o card deve aparecer indisponivel !
    
    console.log(foodItems);
    
    const indexOfLastItem = currentPage * itemsPerPage; // (qd currentPage =2, itemsPerPage= 2*6)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // (o 1º elem da pagina é = ao index do ultimo elem - o nr de elementos por pagina)
    const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem); //delimita os elem q aparecem em cada pagina

    const numberOfPages = Math.ceil((foodItems.length)/itemsPerPage);
    //como fiz na paginação, desta maneira temos o nr de páginas a serem renderizadas (arredondando por cima)


    //metodo para mudar a página (recebe o nr da página do filho):
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleLeftClick = ()=>{
        console.log('ok entrei no clique')
        if(currentPage > 1 ){
        setCurrentPage(currentPage - 1)
    }}

    const handleRightClick= ()=>{
        if(currentPage <  numberOfPages){
            setCurrentPage(currentPage +1)
        }
    }

    return ( 
    <>
        <h1 className="row-span-full text-2xl p-7 bg-slate-50">Food Catalog</h1>
        <div className="flex"> 
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
{/* <h1>Food cards </h1>
{
    grid grid-cols-3 grid-rows-3 col-auto
   images.map(image=><p key={image.id}>{image.name}</p>)
}
<FoodCards foodCards={images} /> */}
