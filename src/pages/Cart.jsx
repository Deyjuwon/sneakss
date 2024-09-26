import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RandomProducts from "../components/RandomProducts"
import EmptyCart from "../components/EmptyCart"
import FilledCart from "../components/FilledCart"

const Cart = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0,0);
}, [])
  return (
    <div className="pt-32 md:pt-24 ">
      <Header showSearchBar={true} />
      {/* <FilledCart /> */}
      <EmptyCart />      
      <div className="pt-20">
          <p className="text-[22px] font-bold px-5">You might also like</p>
          <RandomProducts />
      </div>    
      <Footer bgColor='black' textColor='white' />

        
    </div>
  )
}

export default Cart
