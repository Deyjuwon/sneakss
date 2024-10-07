import { useEffect, useState } from 'react';
import base from '../api/base';

const AirtableComponent = () => {
  const [products, setProducts] = useState([]);

//   useEffect (() => {
//     base('products').select({view: 'Grid view'}).eachPage((records, fetchNextPage) => {
//         setProducts(records);
//         fetchNextPage();
        
//     })
//   })
  console.log(products)
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.fields.ProductName}</li> 
        ))}
      </ul>
    </div>
  );
};

export default AirtableComponent;
