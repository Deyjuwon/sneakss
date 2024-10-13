/* eslint-disable react/no-unescaped-entities */
import base from "../api/base"
import { useState, useEffect } from "react"    
import Footer from "../components/Footer";
import Header from "../components/Header"
import NewProductCard from "../components/NewProductCard";
import NewsletterHome from "../components/NewsletterHome";
import Spinner from "../components/Spinner";

const Women = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      window.scrollTo(0,0);
      base('products')
        .select({ view: 'Grid view' })
        .eachPage((records, fetchNextPage) => {
          setProducts(records);
          fetchNextPage();
          setLoading(false)
        });
    }, []); 
    
  return (
    <div className="pt-32 md:pt-24 ">
        <Header showSearchBar={true} />
        <div className="px-5 pb-0 md:pb-24">
            <div className="flex flex-col gap-4 pb-10">
                <p className="text-sm font-light">Women</p>
                <p className="text-3xl font-bold text-[#800000]">Women's Sneakers</p>
            </div>

            <div className="flex flex-wrap justify-between">
            { loading ? <Spinner /> :
                products.filter((product) => 
                        product.fields.Category === 'Women' || product.fields.Category === 'Unisex'
                    )
                    .map((product) => (
                        <NewProductCard
                        key={product.id}
                        shoeName={product.fields.ProductName}
                        shoeGender={product.fields.Category}
                        shoePrice={product.fields.Price}
                        shoeImg={product.fields.ProductImage[0].url}
                        shoeColor={product.fields.Color}
                        />
            ))}
            </div>
            
        </div>
        <NewsletterHome />
        <Footer bgColor='white' textColor='black' />
        
      
    </div>
  )
}

export default Women
