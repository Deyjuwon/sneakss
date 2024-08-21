import Button from "./Button"


const DiscountSection = () => {
  return (
    <section className="h-72 flex flex-col gap-4 items-center justify-center text-white bg-primaryYellow">
        <h2 className="font-bold text-xl text-center md:text-4xl">GET A 10% DISCOUNT ON ALL PRODUCTS EVERY WEDNESDAY!</h2>
        <p className="font-semibold text-base  md:text-xl">Customer Happiness Fuels Our Success.</p>
        <Button title='shop now' />
    </section>
  )
}

export default DiscountSection
