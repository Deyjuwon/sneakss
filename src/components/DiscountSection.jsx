import { useNavigate } from "react-router-dom"
import Button from "./Button"


const DiscountSection = () => {
  const navigate = useNavigate()

  return (
    <section className="h-72 flex flex-col gap-4 items-center justify-center text-white bg-primaryYellow">
        <h2 className="font-bold text-xl text-center md:text-4xl">GET A 10% DISCOUNT ON ALL PRODUCTS EVERY WEDNESDAY!</h2>
        <p  className="font-semibold text-base  md:text-xl">Customer Happiness Fuels Our Success.</p>
        <div onClick={() => navigate('/new')}><Button title='shop now'  /></div>
    </section>
  )
}

export default DiscountSection
