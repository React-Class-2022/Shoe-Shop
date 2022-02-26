import {productData} from './DummyData/Data.jsx';

const Product =()=>
{ 
    return(
        <div>
           {productData.map(product=>(<h1 key = {product.id}>{product.title }</h1> ))}
        </div>
    )
}

export default Product;