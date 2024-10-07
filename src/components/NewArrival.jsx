import NewProductCard from "./NewProductCard"
import pro4 from '../assets/products/pro4.jpg'
import pro1 from '../assets/products/pro1.jpg'
import pro2 from '../assets/products/pro2.jpg'
import pro3 from '../assets/products/pro3.jpg'
import pro6 from '../assets/products/pro6.jpg'
import pro7 from '../assets/products/pro7.jpg'
import pro8 from '../assets/products/pro8.jpg'
import base from "../api/base"
import { useState, useEffect } from "react"

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        base('products').select({view: 'Grid view'}).eachPage((records, fetchNextPage) => {
            setProducts(records);
            fetchNextPage();
            
        })
      })
  return (
    <div className="px-5 py-10">
        <h1 className="text-xl font-bold py-4">New Arrivals</h1>
        <div className="flex w-full gap-10 overflow-x-auto">
            {/* <NewProductCard 
                shoeName='Balenciaga Track 2' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
                shoeImg={pro4} 
                shoeColor='Forest green and white' 
            />
            <NewProductCard 
                shoeName='New Balance 9060' 
                shoeGender='Men' 
                shoePrice='₦75,000' 
                shoeImg={pro1} 
                shoeColor='Washed blue' 
            />
            <NewProductCard 
                shoeName='New Balance 9060' 
                shoeGender='Men' 
                shoePrice='₦70,000' 
                shoeImg={pro2} 
                shoeColor='White' 
            />
            <NewProductCard 
                shoeName='Balenciaga Track 2' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
                shoeImg={pro3} 
                shoeColor='Forest green and white' 
            />
            <NewProductCard 
                shoeName='Balenciaga Track 2' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
                shoeImg={pro8} 
                shoeColor='Forest green and white' 
            />
            <NewProductCard 
                shoeName='Nike Air Jordan 1 retro high' 
                shoeGender='Women' 
                shoePrice='₦64,000' 
                shoeImg={pro6} 
                shoeColor='Black and white' 
            />
            <NewProductCard 
                shoeName='Balenciaga Track 2' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
                shoeImg={pro7} 
                shoeColor='Forest green and white' 
            /> */}
            {
                products.map((product) => (
                    <NewProductCard key={product.id} shoeName={product.fields.ProductName} 
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
