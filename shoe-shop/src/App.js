import Product from '../src/components/products/product'

const data =[
{
  name : 'Sneakers',
  image: 'sneakers.jpg',
  Price : '$20',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Timberland',
  image: 'Timberland.jpg',
  Price : '$120',
 description:'This is an Original shoe from Nike for men',
},
{
  name : 'Dolce and Gabanas',
  image: 'D&G.jpg',
  Price : '$10',
 description:'This is an Original shoe from addidas for men',
}
];
const App=()=>
{
    return(
      <div >
            {data.map( data => {return(<div> <h1>{data.name}</h1><h1><img src = {data.image} /></h1><h1> {data.Price} </h1></div>)})}
      </div>
    );
}

export default App;
