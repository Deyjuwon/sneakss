/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"
import NewProductCard from "../components/NewProductCard";
import { menProduct } from '../menProduct';
import NewsletterHome from "../components/NewsletterHome";



const New = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
  return (
    <div className="pt-32 md:pt-24 ">
        <Header showSearchBar={true} />
        <div className="px-5 pb-0 md:pb-24">
            <div className="flex flex-col gap-4 pb-10">
                <p className="text-sm font-light">New</p>
                <p className="text-3xl font-bold text-[#800000]">Latest Sneakers</p>
            </div>

            <div className="flex flex-wrap justify-between">
                {
                    menProduct.map((product) => (
                        <div key={product.id} className="">
                            <NewProductCard shoeName={product.name} 
                                shoeGender={product.gender} 
                                shoePrice={product.price} 
                                shoeImg={product.img} 
                                shoeColor={product.color}  />
                        </div>
                    ))
                }
            </div>
            
        </div>
        <NewsletterHome />
        <Footer bgColor='white' textColor='black' />
        
      
    </div>
  )
}

export default New
