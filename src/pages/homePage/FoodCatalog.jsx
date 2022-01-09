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

    // na API fornecida vamos ter de ver se ha items em stock, se houver os pratos estarão disponiveis para compra, senao
    //nao se pode comprar e o card deve aparecer indisponivel !
    
    console.log(foodItems)
    return ( 
    <>
        <h1 className="row-span-full text-2xl p-7 bg-slate-50">Food Catalog</h1>
        <div className="flex"> 
            <FoodCards foodOptions={foodItems} /> 
            {/* o FoodCards vai receber o foodOption como props, e trabalhar o array dentro do cards */}
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
