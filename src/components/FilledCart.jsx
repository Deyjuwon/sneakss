import pro4 from '../assets/products/pro4.jpg'
import pro1 from '../assets/products/pro1.jpg'
const FilledCart = () => {
  return (
    <div className="px-5 pt-10 flex gap-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-[22px] ">Cart</h1>
          
          <div className="pt-14 flex flex-col gap-10">
            <div className="flex justify-between ">
              <div className="flex gap-4">
                <img src={pro4} alt="" className="w-[170px] h-[170px]" />
                <div className="text-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold pb-2">Balenciaga track 2</p>
                    <p>Forest green and white</p>
                    <p>Size 40</p>
                    <p>Quantity 1</p>
                  </div>
                  <div>
                    <p className="underline">Remove</p>
                  </div>
                
                </div>
              </div>
              <div>
                <p className="font-bold text-sm ">N80000</p>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex gap-4">
                <img src={pro1} alt="" className="w-[170px] h-[170px]" />
                <div className="text-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold pb-2">New Balance 9060</p>
                    <p>Blue and white</p>
                    <p>Size 40</p>
                    <p>Quantity 1</p>
                  </div>
                  <div>
                    <p className="underline">Remove</p>
                  </div>
                
                </div>
              </div>
              <div>
                <p className="font-bold text-sm ">N80000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#800000] h-[500px] w-[40%] px-5 text-sm">
          <p className="text-xl font-bold pt-7 pb-14">Order Summary</p>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-bold">N160000</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>Free</p>
            </div>
          </div>
         
          <div className="border-t-black border border-white border-b-black mt-20 flex justify-between py-10">
            <p>Total</p>
            <p className="font-bold">N160000</p>
          </div>
          
          <button className="h-[70px] w-full flex justify-center font-semibold items-center text-sm bg-primaryRed text-white mt-5">Checkout</button>
        </div>
        
      </div>
  )
}

export default FilledCart
