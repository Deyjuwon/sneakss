import Footer from "../components/Footer"
import Header from "../components/Header"
import NewArrival from "../components/NewArrival"
import RandomProducts from "../components/RandomProducts"


const Cart = () => {
  return (
    <div className="pt-32 md:pt-24 ">
      <Header showSearchBar={true} />
      <div className="px-5 pt-10">
        <h1 className="font-bold text-[22px] ">Cart</h1>
        <div className="flex justify-center items-center flex-col pt-32 gap-8">
          <p>There are no items in your cart!</p>
          <button className="h-[70px] w-[380px] flex justify-center font-semibold items-center text-sm bg-primaryRed text-white ">Continue Shopping</button>
        </div>

        
      </div>
      <div className="pt-16">
          <p className="text-[22px] font-bold px-5">You might also like</p>
          <RandomProducts />
      </div>    
      <Footer bgColor='black' textColor='white' />

        
    </div>
  )
}

export default Cart
