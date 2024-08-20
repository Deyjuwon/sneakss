import NewProductCard from "./NewProductCard"
import pro4 from '../assets/products/pro4.jpg'
import pro1 from '../assets/products/pro1.jpg'
import pro2 from '../assets/products/pro2.jpg'
import pro3 from '../assets/products/pro3.jpg'
import pro6 from '../assets/products/pro6.jpg'
import pro7 from '../assets/products/pro7.jpg'
import pro8 from '../assets/products/pro8.jpg'

const NewArrival = () => {
  return (
    <div className="px-5 py-10">
        <h1 className="text-xl font-bold py-4">New Arrivals</h1>
        <div className="flex w-full gap-10 overflow-x-auto">
            <NewProductCard 
                shoeName='Balenciaga Track 2' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
                shoeImg={pro4} 
                shoeColor='Forest green and white' 
            />
            <NewProductCard 
                shoeName='New Balance 9060' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
                shoeImg={pro1} 
                shoeColor='Washed blue' 
            />
            <NewProductCard 
                shoeName='New Balance 9060' 
                shoeGender='Men' 
                shoePrice='₦80,000' 
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
            />


        </div>
        
    
    </div>
  )
}

export default NewArrival
