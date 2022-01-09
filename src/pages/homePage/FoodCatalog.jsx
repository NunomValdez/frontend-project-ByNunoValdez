import {useState, useEffect} from 'react'
import FoodCards from './FoodCards'


export default function FoodCatalog() {

    const [foodItems, setfoodItems] = useState([]);

    //este componente vai ser o pai do catálogo de comidas, e dará aos filhos
    //as props que terão em si o array de pratos vindos do fetch à API, que de inicio é um array vazio,
    //mas assim que o JSON é trabalhado, o array é populado com os pratos

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp=>resp.json())
        .then(data=> setfoodItems(data))
    }, [])
    
    console.log(foodItems)
    return ( 
    <>
        <h1 className="row-span-full">Food Catalog</h1>
        <div className="flex"> 
            <FoodCards foodOptions={foodItems} />
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
