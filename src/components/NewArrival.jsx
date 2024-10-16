import NewProductCard from "./NewProductCard"
import base from "../api/base"
import { useState, useEffect } from "react"
import Spinner from "../components/Spinner";

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        base('products').select({view: 'Grid view'}).eachPage((records, fetchNextPage) => {
            setProducts(records);
            fetchNextPage();
            setLoading(false)  
            
        })
      },[])

  return (
    <div className="px-5 py-10">
        <h1 className="text-xl font-bold py-4">New Arrivals</h1>
        <div className="flex w-full gap-10 overflow-x-auto">
            { loading ? <Spinner /> :
                products.map((product) => (
                    <NewProductCard key={product.id}  ProductID={product.fields.ProductID} shoeName={product.fields.ProductName} 
                    shoeGender={product.fields.Category} 
                    shoePrice={product.fields.Price} 
                    shoeImg={product.fields.ProductImage[0].url} 
                    shoeColor={product.fields.Color}  />
                ))
            }

        </div>
        
    
    </div>
  )
}

export default NewArrival
