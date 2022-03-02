import Product from '../src/components/products/product'
const data =
 [
 "i am a data 1",
"i am a data 2",
"i am a data 3",
"i am a data 4",
];
const App=()=>
{
    return(
      <div >
            {data.map( data => <h1>{data}</h1>)}
      </div>
    );
}

export default App;
