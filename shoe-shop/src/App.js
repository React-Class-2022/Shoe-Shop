import Product from '../src/components/products/product'
import React,{useState} from 'react';
import './App.css';
import { Image1 }   from './logo192.png';
const product=[
{
  name : 'Sneakers',
  image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  Price : '$20',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Sneakers',
  image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  Price : '$20',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Sneakers',
  image: "https://www.bloomzon.com/public/uploads/all/5RuaAIIW4f3TItrIYTDVSlikS1jJjMVmrJtskg4Q.jpg",
  Price : '$20',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Sneakers',
  image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  Price : '$20',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Timberland',
  image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  Price : '$120',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Dolce and Gabanas',
  image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  Price : '$10',
 description:'This is an Original shoe from addidas for men',
}
];


const App=()=>
{
  const [cart,setCart] = useState(0);

   const AddtoCart =()=>
   {
     return(
       setCart(cart + 1)
     );
   }
    return(
      <div >
        <header>
           <div className = "head-wrap">
             <div className ="ShopTitle">
               <h1>Shoe-Shop</h1>
             </div>
            
             <div className ="Cart">
               <h1>Cart ({cart})</h1>
             </div>
             </div>
        </header>
       
    {product.map( data => {return(<div> <h1>{data.name}</h1><img src = {data.image} width ="100px" height ="80px" alt="BigCo Inc. logo" /><h1> {data.Price} </h1><button onClick ={AddtoCart}>Add</button></div>)})}
      </div>
    );
}

export default App;
